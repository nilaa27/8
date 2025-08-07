document.addEventListener('DOMContentLoaded', () => {
    // --- CANVAS & CONTEXT SETUP ---
    const photoCanvas = document.getElementById('photo-canvas');
    const frameCanvas = document.getElementById('frame-canvas');
    const pCtx = photoCanvas.getContext('2d'); // Photo Context
    const fCtx = frameCanvas.getContext('2d'); // Frame Context
    const canvasWrapper = document.getElementById('canvas-wrapper');

    // --- DOM ELEMENT SELECTION ---
    const frameSelectionContainer = document.getElementById('frame-selection');
    const downloadBtn = document.getElementById('downloadCopyBtn');

    // --- STATE MANAGEMENT ---
    const state = {
        images: [],
        frames: [],
        poseCount: 4, // Default
        activeImageIndex: -1,
        activeFrameSrc: null,
        dragStart: { x: 0, y: 0 },
        isDragging: false
    };

    // --- INITIALIZATION ---
    function initialize() {
        setupCanvasDimensions();
        loadDataFromSession();
        loadFrameOptions();
        addEventListeners();
    }

    function setupCanvasDimensions() {
        const rect = canvasWrapper.getBoundingClientRect();
        photoCanvas.width = frameCanvas.width = rect.width;
        photoCanvas.height = frameCanvas.height = rect.height;
    }

    function loadDataFromSession() {
        const storedImages = JSON.parse(sessionStorage.getItem('photoArray'));
        const storedPoseCount = parseInt(sessionStorage.getItem('poseCount'), 10);

        if (!storedImages || !storedPoseCount) {
            canvasWrapper.innerHTML = '<p style="color:red; text-align:center; padding: 20px;">Error: Data sesi tidak ditemukan. Silakan kembali dan coba lagi.</p>';
            return;
        }

        state.poseCount = storedPoseCount;
        const imagePromises = storedImages.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises).then(loadedImages => {
            // Distribute photos evenly in the canvas for a start
            const positions = distributePhotos(loadedImages.length, photoCanvas.width, photoCanvas.height);
            state.images = loadedImages.map((img, i) => ({
                element: img,
                x: positions[i].x,
                y: positions[i].y,
                scale: positions[i].scale,
                width: img.width,
                height: img.height
            }));
            redrawPhotos();
        });
    }

    function distributePhotos(count, canvasWidth, canvasHeight) {
        // This is a simple distribution logic, can be improved.
        const positions = [];
        const cols = count > 3 ? 2 : 1;
        const rows = Math.ceil(count / cols);
        const boxWidth = canvasWidth / cols;
        const boxHeight = canvasHeight / rows;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;
            positions.push({
                x: col * boxWidth + boxWidth / 2,
                y: row * boxHeight + boxHeight / 2,
                scale: 0.5 // Initial scale
            });
        }
        return positions;
    }


    function loadFrameOptions() {
        const frameDir = `bingkai/pose${state.poseCount}/`;
        // Assuming 3 frames per pose folder, as per plan
        for (let i = 1; i <= 3; i++) {
            const frameSrc = `${frameDir}pose-${i}.png`;
            state.frames.push(frameSrc);

            const thumb = document.createElement('div');
            thumb.classList.add('frame-thumbnail');
            thumb.style.backgroundImage = `url(${frameSrc})`;
            thumb.dataset.src = frameSrc;

            if (i === 1) {
                thumb.classList.add('active');
                state.activeFrameSrc = frameSrc;
                drawFrame(frameSrc);
            }

            thumb.addEventListener('click', () => {
                document.querySelectorAll('.frame-thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                state.activeFrameSrc = frameSrc;
                drawFrame(frameSrc);
            });
            frameSelectionContainer.appendChild(thumb);
        }
    }

    // --- DRAWING FUNCTIONS ---
    function redrawPhotos() {
        pCtx.clearRect(0, 0, photoCanvas.width, photoCanvas.height);
        state.images.forEach(imgObj => {
            pCtx.save();
            pCtx.translate(imgObj.x, imgObj.y);
            pCtx.scale(imgObj.scale, imgObj.scale);
            pCtx.drawImage(imgObj.element, -imgObj.width / 2, -imgObj.height / 2);
            pCtx.restore();
        });
    }

    function drawFrame(src) {
        const frameImg = new Image();
        frameImg.src = src;
        frameImg.onload = () => {
            fCtx.clearRect(0, 0, frameCanvas.width, frameCanvas.height);
            fCtx.drawImage(frameImg, 0, 0, frameCanvas.width, frameCanvas.height);
        };
    }

    // --- EVENT LISTENERS & INTERACTIVITY ---
    function addEventListeners() {
        photoCanvas.addEventListener('mousedown', onMouseDown);
        photoCanvas.addEventListener('mousemove', onMouseMove);
        photoCanvas.addEventListener('mouseup', onMouseUp);
        photoCanvas.addEventListener('mouseleave', onMouseUp); // End drag if mouse leaves canvas
        photoCanvas.addEventListener('wheel', onWheelScroll);
        downloadBtn.addEventListener('click', downloadImage);
    }

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    function onMouseDown(e) {
        const pos = getMousePos(photoCanvas, e);
        // Find which image is being clicked (reverse order to pick top one)
        for (let i = state.images.length - 1; i >= 0; i--) {
            const img = state.images[i];
            const dx = pos.x - img.x;
            const dy = pos.y - img.y;
            const halfW = (img.width * img.scale) / 2;
            const halfH = (img.height * img.scale) / 2;

            if (dx > -halfW && dx < halfW && dy > -halfH && dy < halfH) {
                state.activeImageIndex = i;
                state.isDragging = true;
                state.dragStart.x = pos.x - img.x;
                state.dragStart.y = pos.y - img.y;
                return;
            }
        }
    }

    function onMouseMove(e) {
        if (!state.isDragging || state.activeImageIndex === -1) return;
        const pos = getMousePos(photoCanvas, e);
        const activeImg = state.images[state.activeImageIndex];
        activeImg.x = pos.x - state.dragStart.x;
        activeImg.y = pos.y - state.dragStart.y;
        redrawPhotos();
    }

    function onMouseUp() {
        state.isDragging = false;
        state.activeImageIndex = -1;
    }

    function onWheelScroll(e) {
        e.preventDefault();
        const pos = getMousePos(photoCanvas, e);

        // Find which image is being scrolled over
        for (let i = state.images.length - 1; i >= 0; i--) {
            const img = state.images[i];
            const dx = pos.x - img.x;
            const dy = pos.y - img.y;
            const halfW = (img.width * img.scale) / 2;
            const halfH = (img.height * img.scale) / 2;

            if (dx > -halfW && dx < halfW && dy > -halfH && dy < halfH) {
                const zoomIntensity = 0.01;
                const wheel = e.deltaY < 0 ? 1 : -1;
                const zoom = Math.exp(wheel * zoomIntensity);

                img.scale *= zoom;
                // Clamp scale to prevent image from becoming too small or too large
                img.scale = Math.max(0.1, Math.min(img.scale, 5));

                redrawPhotos();
                return;
            }
        }
    }

    // --- FINAL ACTIONS ---
    function downloadImage() {
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = photoCanvas.width;
        finalCanvas.height = photoCanvas.height;
        const finalCtx = finalCanvas.getContext('2d');

        // Draw photos first, then frame on top
        finalCtx.drawImage(photoCanvas, 0, 0);
        finalCtx.drawImage(frameCanvas, 0, 0);

        const link = document.createElement('a');
        link.download = `pictlord-profesional-${Date.now()}.png`;
        link.href = finalCanvas.toDataURL('image/png', 1.0);
        link.click();
    }

    initialize();
});

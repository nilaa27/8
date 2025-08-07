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
        images: [], // Will hold image objects with position, scale, etc.
        frames: [], // Holds paths to frame images
        poseCount: 4, // Default, will be updated
        activeFrameSrc: null,
        activeImageIndex: -1, // -1 means no image is selected/active
        isDragging: false,
        dragStart: { x: 0, y: 0 }, // To calculate drag offset
    };

    // --- INITIALIZATION ---
    function initialize() {
        // The initialization flow is now driven by loading frames first
        // to get the correct canvas dimensions.
        loadFrameOptions();
        addEventListeners();
    }

    function setupCanvasDimensions(width, height) {
        photoCanvas.width = frameCanvas.width = width;
        photoCanvas.height = frameCanvas.height = height;

        // Make the on-screen wrapper adapt to the canvas aspect ratio
        canvasWrapper.style.aspectRatio = width / height;
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
        const positions = [];
        const cols = (count === 6 || count === 4) ? 2 : 1; // 2 columns for 4 or 6 photos
        const rows = Math.ceil(count / cols);
        const boxWidth = canvasWidth / cols;
        const boxHeight = canvasHeight / rows;
        const padding = 20; // Padding inside each box

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            // Calculate initial scale to fit the image within the box (minus padding)
            // This is a placeholder scale; actual image dimensions are needed for perfect fit
            const initialScale = Math.min(
                (boxWidth - padding * 2) / 1000, // Assuming avg image width
                (boxHeight - padding * 2) / 1000  // Assuming avg image height
            );

            positions.push({
                x: col * boxWidth + boxWidth / 2,
                y: row * boxHeight + boxHeight / 2,
                scale: 0.4 // Start with a smaller, consistent scale
            });
        }
        return positions;
    }


    function loadFrameOptions() {
        const frameDir = `bingkai/pose${state.poseCount}/`;
        state.poseCount = parseInt(sessionStorage.getItem('poseCount'), 10) || 4;

        // Assuming 3 frames per pose folder
        for (let i = 1; i <= 3; i++) {
            const frameSrc = `${frameDir}pose-${i}.png`;
            state.frames.push(frameSrc);

            const thumb = document.createElement('div');
            thumb.classList.add('frame-thumbnail');
            thumb.style.backgroundImage = `url(${frameSrc})`;
            thumb.dataset.src = frameSrc;

            // Load the first frame to determine canvas size
            if (i === 1) {
                const firstFrameImg = new Image();
                firstFrameImg.src = frameSrc;
                firstFrameImg.onload = () => {
                    // Set canvas dimensions based on the frame's original size
                    setupCanvasDimensions(firstFrameImg.naturalWidth, firstFrameImg.naturalHeight);

                    // Now that canvas is sized, load user photos
                    loadDataFromSession();

                    // And draw the first frame
                    thumb.classList.add('active');
                    state.activeFrameSrc = frameSrc;
                    drawFrame(frameSrc);
                };
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
        state.activeImageIndex = -1; // Deselect all first

        // Iterate in reverse to select the top-most image
        for (let i = state.images.length - 1; i >= 0; i--) {
            const img = state.images[i];
            const halfW = (img.width * img.scale) / 2;
            const halfH = (img.height * img.scale) / 2;

            // Check if the click is within the image's bounding box
            if (pos.x >= img.x - halfW && pos.x <= img.x + halfW &&
                pos.y >= img.y - halfH && pos.y <= img.y + halfH) {

                state.activeImageIndex = i;
                state.isDragging = true;
                // Bring selected image to the front of the drawing stack
                state.images.push(state.images.splice(i, 1)[0]);

                state.dragStart.x = pos.x - img.x;
                state.dragStart.y = pos.y - img.y;

                redrawPhotos(); // Redraw to show selection (if any visual feedback is added)
                return; // Stop after finding the first image
            }
        }
    }

    function onMouseMove(e) {
        if (!state.isDragging || state.activeImageIndex === -1) return;

        // The active image is now always the last one in the array
        const activeImg = state.images[state.images.length - 1];
        const pos = getMousePos(photoCanvas, e);

        activeImg.x = pos.x - state.dragStart.x;
        activeImg.y = pos.y - state.dragStart.y;

        redrawPhotos();
    }

    function onMouseUp() {
        state.isDragging = false;
        // Keep the image selected until another is clicked
        // state.activeImageIndex = -1;
    }

    function onWheelScroll(e) {
        e.preventDefault(); // Prevent page scrolling
        const pos = getMousePos(photoCanvas, e);

        // Find which image is being scrolled over, starting from the top
        let targetImageIndex = -1;
        for (let i = state.images.length - 1; i >= 0; i--) {
            const img = state.images[i];
            const halfW = (img.width * img.scale) / 2;
            const halfH = (img.height * img.scale) / 2;
            if (pos.x >= img.x - halfW && pos.x <= img.x + halfW &&
                pos.y >= img.y - halfH && pos.y <= img.y + halfH) {
                targetImageIndex = i;
                break;
            }
        }

        if (targetImageIndex !== -1) {
            const img = state.images[targetImageIndex];
            const zoomIntensity = 0.05;
            const wheel = e.deltaY < 0 ? 1 : -1;
            const zoom = 1 + wheel * zoomIntensity;

            img.scale *= zoom;
            // Add clamping to prevent extreme zoom
            img.scale = Math.max(0.05, Math.min(img.scale, 4.0));

            redrawPhotos();
        }
    }

    // --- FINAL ACTIONS & MODAL LOGIC ---
    const previewModal = document.getElementById('previewModal');
    const qrModal = document.getElementById('qrModal');
    const previewBtn = document.getElementById('previewBtn');
    const shareBtn = document.getElementById('shareBtn'); // Assuming share uses the same QR logic
    const customBackBtn = document.getElementById('customBack');

    const firebaseConfig = {
        apiKey: "AIzaSyCCaLXoaHFOuXRnHAvQzg9R0c1tfsTsTBU",
        authDomain: "project-xlord.firebaseapp.com",
        databaseURL: "https://project-xlord-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "project-xlord",
        storageBucket: "project-xlord.appspot.com",
        messagingSenderId: "847461816867",
        appId: "1:847461816867:web:17071ba14ffe6a6099ef96",
        measurementId: "G-344KX3B197"
    };

    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
    const database = firebase.database();

    let currentQrLink = '';
    let currentImageData = '';
    let qrTimerInterval = null;

    function getFinalImageB64() {
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = photoCanvas.width;
        finalCanvas.height = photoCanvas.height;
        const finalCtx = finalCanvas.getContext('2d');
        finalCtx.drawImage(photoCanvas, 0, 0);
        finalCtx.drawImage(frameCanvas, 0, 0);
        return finalCanvas.toDataURL('image/png', 1.0);
    }

    function showModal(modal) { modal.style.display = 'block'; }
    function hideModal(modal) {
        modal.style.display = 'none';
        if (modal.id === 'qrModal' && qrTimerInterval) {
            clearInterval(qrTimerInterval);
        }
    }

    previewBtn.addEventListener('click', () => {
        document.getElementById('modalImagePreview').src = getFinalImageB64();
        showModal(previewModal);
    });

    // Wire up all close buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal(previewModal);
            hideModal(qrModal);
        });
    });

    customBackBtn.addEventListener('click', () => {
        window.location.href = 'profesional-mode.html';
    });

    function generateShortId(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) { result += chars.charAt(Math.floor(Math.random() * chars.length)); }
        return result;
    }

    async function generateTemporaryLink(base64ImageData) {
        const expirationTime = Date.now() + (5 * 60 * 1000); // 5 minutes
        const dataToStore = { imageData: base64ImageData, expiresAt: expirationTime };
        const shortId = generateShortId(6);
        await database.ref('images/' + shortId).set(dataToStore);
        return `${window.location.origin}/hasil.html?id=${shortId}`;
    }

    async function showQrCode() {
        showModal(qrModal);
        const qrCodePopupContainer = document.getElementById('qrCodePopupContainer');
        qrCodePopupContainer.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 4rem;"></i>';

        if (qrTimerInterval) clearInterval(qrTimerInterval);

        try {
            currentImageData = getFinalImageB64();
            currentQrLink = await generateTemporaryLink(currentImageData);

            const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentQrLink)}`;
            qrCodePopupContainer.innerHTML = `<img src="${qrApiUrl}" alt="Scan to download">`;

            // Setup modal buttons
            document.getElementById('copyLinkBtn').onclick = () => {
                navigator.clipboard.writeText(currentQrLink).then(() => alert('Link disalin!'));
            };
            document.getElementById('downloadFromModalBtn').onclick = () => {
                const link = document.createElement('a');
                link.download = `pictlord-profesional-${Date.now()}.png`;
                link.href = currentImageData;
                link.click();
            };

        } catch (error) {
            console.error('Firebase/QR Error:', error);
            qrCodePopupContainer.innerHTML = '<strong>Gagal membuat QR Code.</strong>';
        }
    }

    downloadBtn.addEventListener('click', showQrCode);
    shareBtn.addEventListener('click', showQrCode); // Both buttons trigger the same QR modal

    initialize();
});

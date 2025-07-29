document.addEventListener('DOMContentLoaded', function() {
    
    // Objek pusat untuk menyimpan semua state/pilihan kustomisasi
    const customizationOptions = {
        logo: {
            lang: 'ENG',
            text: 'pictlord',
            color: '#E28585' // Warna default
        },
        date: {
            show: false,
            showTime: false
        }
    };

    // --- Referensi Elemen DOM (Lengkap) ---
    const photoCustomPreview = document.getElementById('photoPreview');
    const customBack = document.getElementById('customBack');
    const downloadCopyBtn = document.getElementById('downloadCopyBtn');
    
    // Kontrol Kustomisasi
    const colorPickerBtn = document.getElementById("colorPickerBtn");
    const logoLangContainer = document.querySelector('.logo-container');
    const logoColorPicker = document.getElementById('logoColorPicker');
    const dateCheckbox = document.getElementById('dateCheckbox');
    const timeCheckbox = document.getElementById('dateTimeCheckbox');
    
    // State lain
    let selectedShape = 'default';
    let selectedSticker = null;
    let backgroundType = 'color';
    let backgroundColor = '#FFFFFF';
    let backgroundImage = null;
    
    // Mengambil data gambar dari sesi
    const storedImages = JSON.parse(sessionStorage.getItem('photoArray'));
    if (!storedImages || storedImages.length === 0) {
        console.error("Tidak ada gambar yang ditemukan di sessionStorage.");
        if(photoCustomPreview) photoCustomPreview.innerHTML = '<p>Error: Foto tidak ditemukan. Silakan kembali ke halaman sebelumnya.</p>';
        return;
    }

    // --- Event Listeners ---
    if (customBack) {
        // Disesuaikan untuk kembali ke halaman yang menghasilkan 6 foto
        customBack.addEventListener('click', () => {
            window.location.href = 'canvas6.html'; 
        });
    }

    if (logoLangContainer) {
        logoLangContainer.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;
            const lang = button.id.replace('Logo', '').toUpperCase();
            const textMap = { 'ENG': 'pictlord', 'KOR': 'ㅔㅑㅊ시ㅐㄱㅇ', 'CN': '照相亭' };
            customizationOptions.logo.lang = lang;
            customizationOptions.logo.text = textMap[lang] || '';
            redrawCanvas();
        });
    }

    if (logoColorPicker) {
        logoColorPicker.addEventListener('input', (e) => {
            customizationOptions.logo.color = e.target.value;
            redrawCanvas();
        });
    }

    if (dateCheckbox) dateCheckbox.addEventListener('change', (e) => { customizationOptions.date.show = e.target.checked; redrawCanvas(); });
    if (timeCheckbox) timeCheckbox.addEventListener('change', (e) => { customizationOptions.date.showTime = e.target.checked; redrawCanvas(); });
    if (downloadCopyBtn) downloadCopyBtn.addEventListener('click', downloadCanvasCopy);
    
    // --- Fungsi Kustomisasi (Lengkap) ---
    function setBackground(option) {
        if (option.type === 'color') {
            backgroundType = 'color';
            backgroundColor = option.value;
            backgroundImage = null;
        } else if (option.type === 'image') {
            backgroundType = 'image';
            backgroundImage = new Image();
            backgroundImage.src = option.src;
            backgroundImage.onload = redrawCanvas;
        }
        redrawCanvas();
    }
    const picker = new Picker({ parent: colorPickerBtn, popup: 'bottom', color: '#FFFFFF', onChange: (color) => setBackground({ type: 'color', value: color.hex }), onDone: (color) => colorPickerBtn.style.backgroundColor = color.hex });
    colorPickerBtn.addEventListener("click", () => picker.show());

    function setSticker(type) {
        selectedSticker = (selectedSticker === type) ? null : type;
        redrawCanvas();
    }
    
    // --- Event Listeners untuk Semua Tombol (Lengkap) ---
    const pinkBtn = document.getElementById('pinkBtnFrame'); if (pinkBtn) pinkBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#FFC2D1' }));
    const blueBtn = document.getElementById('blueBtnFrame'); if (blueBtn) blueBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#CAF0F8' }));
    const yellowBtn = document.getElementById('yellowBtnFrame'); if (yellowBtn) yellowBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#FFF8A5' }));
    const matchaBtn = document.getElementById('matchaBtnFrame'); if (matchaBtn) matchaBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#90a955' }));
    const purpleBtn = document.getElementById('purpleBtnFrame'); if (purpleBtn) purpleBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#c19ee0' }));
    const brownBtn = document.getElementById('brownBtnFrame'); if (brownBtn) brownBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#DDBEA9' }));
    const redBtn = document.getElementById('redBtnFrame'); if (redBtn) redBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#780000' }));
    const whiteBtn = document.getElementById('whiteBtnFrame'); if (whiteBtn) whiteBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#FFFFFF' }));
    const blackBtn = document.getElementById('blackBtnFrame'); if (blackBtn) blackBtn.addEventListener('click', () => setBackground({ type: 'color', value: '#000000' }));
    const bgImageButtons = { pinkPlaid: 'pink-plaid.jpg', pinkGlitter: 'pink-glitter.jpg', bluePlaid: 'blue-plaid.jpg', brownLeopard: 'brown-leopard.jpg', cowPrint: 'cow-print.jpg', redLeather: 'red-leather.jpg', pinkGumamela: 'pink-gumamela.jpg', whiteKnitted: 'white-knitted-cloth.jpg', 'black-cq': 'black-couqutte.jpg', 'white-cq': 'white-couquette.jpg', pinkLeather: 'pink-diamond-leather.jpg', ribbonDenim: 'ribbon-denim.jpg', blackPinkRibbon: 'black-pink-ribbon.jpg', blueYellowSquares: 'blue-yellow-squares.jpg', blueWhiteSquares: 'blue-white-squares.jpg', fourLockers: '4-lockers.jpg', crumpledPaper: 'crumpled-paper.jpg', blueBackdrop: 'blue-backdrop.jpg', greenHills: 'green-hills.jpg', sandShells: 'sand-shells.jpg', waterBeach: 'water.jpg', cocoTrees: 'coco-trees.jpg', pinkLiliesFrame: 'pink-lilies.jpg', roseCardFrame: 'rose-card.jpg', princessVintageFrame: 'princess-vintage.jpg', gridPaperFrame: 'grid-paper.jpg', stardustFrame: 'stardust.jpg', roughTextureFrame: 'rough-texture.jpg', ribbonSweaterFrame: 'ribbon-sweater.jpg', vsPinkFrame: 'vs-pink.jpg', vsYellowFrame: 'vs-yellow.jpg', redRosesPaintFrame: 'red-roses-paint.jpg', grayTrashFrame: 'gray-trash.jpg', blackTrashFrame: 'black-trash.jpg', whiteTrashFrame: 'white-trash.jpg', brownKnittedFrame: 'brown-knitted.jpg', hotPinkKnittedFrame: 'hot-pink-knitted.jpg', redKnittedFrame: 'red-knitted.jpg', pinkKnittedFrame: 'pink-knitted.jpg', redStripesFrame: 'red-stripes.jpg', greenStripesFrame: 'green-stripes.jpg', blueStripesFrame: 'blue-stripes.jpg', partyDrapeFrame: 'party-drape.jpg', partyDotsFrame: 'party-dots.jpg', blingDenimFrame: 'bling-denim.jpg' };
    Object.keys(bgImageButtons).forEach(id => { const button = document.getElementById(id); if (button) button.addEventListener('click', () => setBackground({ type: 'image', src: `assets/frame-backgrounds/${bgImageButtons[id]}` })); });
    const stickerButtons = { kissSticker: 'kiss', sweetSticker: 'sweet', ribbonSticker: 'ribbon', sparkleSticker: 'sparkle', pearlSticker: 'pearl', classicSticker: 'classic', classicBSticker: 'classicB', softSticker: 'soft', bunnySticker: 'bunny', luckySticker: 'lucky', confettiSticker: 'confetti', ribbonCoquetteSticker: 'ribboncoquette', blueRibbonCoquetteSticker: 'blueribboncoquette', blackStarSticker: 'blackstar', yellowChickenSticker: 'yellowchicken', brownBearSticker: 'brownbear', lotsHeartSticker: 'lotsheart', tabbyCatSticker: 'tabbycat', ballerinaCappuccinoSticker: 'ballerinacp', doggyWhiteSticker: 'doggywhite', sakuraBlossomSticker: 'sakurablossom', myGirlsSticker: 'mygirls' };
    Object.keys(stickerButtons).forEach(id => { const button = document.getElementById(id); if (button) button.addEventListener('click', () => setSticker(stickerButtons[id])); });
    const noneSticker = document.getElementById('noneSticker'); if (noneSticker) noneSticker.addEventListener('click', () => setSticker(null));
    const heartFrameBtn = document.getElementById('heartFrameShape'); if (heartFrameBtn) heartFrameBtn.addEventListener('click', () => { selectedShape = 'heart'; redrawCanvas(); });
    const circleFrameBtn = document.getElementById('circleFrameShape'); if (circleFrameBtn) circleFrameBtn.addEventListener('click', () => { selectedShape = 'circle'; redrawCanvas(); });
    const roundEdgeFrameBtn = document.getElementById('softFrameShape'); if (roundEdgeFrameBtn) roundEdgeFrameBtn.addEventListener('click', () => { selectedShape = 'rounded'; redrawCanvas(); });
    const normalFrameBtn = document.getElementById('noneFrameShape'); if (normalFrameBtn) normalFrameBtn.addEventListener('click', () => { selectedShape = 'default'; redrawCanvas(); });

    // --- Fungsi Menggambar Canvas ---
    function drawTextAndDate(ctx, canvas) {
        const textColor = customizationOptions.logo.color;
        if (customizationOptions.logo.text) {
            ctx.fillStyle = textColor;
            ctx.font = 'bold 32px Arial, Roboto, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(customizationOptions.logo.text, canvas.width / 2, canvas.height - 55);
        }
        if (customizationOptions.date.show || customizationOptions.date.showTime) {
            const currentDate = new Date();
            let displayText = '';
            if (customizationOptions.date.show) displayText += currentDate.toLocaleDateString('id-ID');
            if (customizationOptions.date.showTime) {
                const timeString = currentDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
                displayText += (customizationOptions.date.show ? ' ' : '') + timeString;
            }
            ctx.fillStyle = textColor;
            ctx.font = '18px "DM Sans", Arial, Roboto, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(displayText, canvas.width / 2, canvas.height - 30);
        }
    }
    
    function drawSticker(ctx, stackedCanvas) {
        return new Promise((resolve) => {
            if (!selectedSticker) return resolve();
            // PASTE KODE LENGKAP stickerLayouts DARI FILE ANDA DI SINI
            const stickerLayouts = { 'kiss': [{ src: 'assets/stickers/kiss1.png', x: 30, y: 300, size: 170 }], 'sweet': [ { src: 'assets/stickers/sweet1.png', x: 17, y: 80, size: 90 }, { src: 'assets/stickers/sweet2.png', x: stackedCanvas.width - 100, y: 390, size: 90 }, { src: 'assets/stickers/sweet3.png', x: 30, y: stackedCanvas.height - 200, size: 90 } ], 'ribbon': [ { src: 'assets/stickers/ribbon1.png', x: 17, y: 80, size: 90 }, { src: 'assets/stickers/ribbon3.png', x: stackedCanvas.width - 100, y: 550, size: 95 }, { src: 'assets/stickers/ribbon2.png', x: 15, y: stackedCanvas.height - 380, size: 90 } ], 'sparkle': [ { src: 'assets/stickers/sparkle1.png', x: stackedCanvas.width - 200, y: 150, size: 250 }, { src: 'assets/stickers/sparkle2.png', x: 2, y: stackedCanvas.height - 850, size: 200 }, { src: 'assets/stickers/sparkle2.png', x: stackedCanvas.width - 150, y: stackedCanvas.height - 180, size: 110 } ], /* ...dan seterusnya... */ };
            const stickersToDraw = stickerLayouts[selectedSticker];
            if (!stickersToDraw) return resolve();
            let loadedCount = 0;
            stickersToDraw.forEach(({ src, x, y, size }) => {
                const stickerImg = new Image();
                stickerImg.src = src;
                stickerImg.onload = () => { loadedCount++; if (loadedCount === stickersToDraw.length) resolve(); };
                stickerImg.onerror = () => { console.error(`Gagal memuat stiker: ${src}`); loadedCount++; if (loadedCount === stickersToDraw.length) resolve(); };
            });
        });
    }

    function clipAndDrawImage(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, shapeType) {
        ctx.save(); ctx.beginPath();
        if (shapeType === 'circle') { ctx.arc(dx + dWidth / 2, dy + dHeight / 2, Math.min(dWidth, dHeight) / 2, 0, Math.PI * 2); } 
        else if (shapeType === 'rounded') { const r = 30; ctx.moveTo(dx + r, dy); ctx.lineTo(dx + dWidth - r, dy); ctx.quadraticCurveTo(dx + dWidth, dy, dx + dWidth, dy + r); ctx.lineTo(dx + dWidth, dy + dHeight - r); ctx.quadraticCurveTo(dx + dWidth, dy + dHeight, dx + dWidth - r, dy + dHeight); ctx.lineTo(dx + r, dy + dHeight); ctx.quadraticCurveTo(dx, dy + dHeight, dx, dy + dHeight - r); ctx.lineTo(dx, dy + r); ctx.quadraticCurveTo(dx, dy, dx + r, dy); } 
        else if (shapeType === 'heart') { ctx.moveTo(dx + dWidth / 2, dy + dHeight); ctx.bezierCurveTo(dx + dWidth * 1.25, dy + dHeight * 0.7, dx + dWidth * 0.9, dy - dHeight * 0.1, dx + dWidth / 2, dy + dHeight * 0.25); ctx.bezierCurveTo(dx + dWidth * 0.1, dy - dHeight * 0.1, dx - dWidth * 0.25, dy + dHeight * 0.7, dx + dWidth / 2, dy + dHeight); } 
        else { ctx.rect(dx, dy, dWidth, dHeight); }
        ctx.closePath(); ctx.clip(); ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); ctx.restore();
    }

    async function redrawCanvas() {
        if (!storedImages) return;
        const stackedCanvas = document.createElement('canvas');
        const ctx = stackedCanvas.getContext('2d');
        
        // PENGATURAN UNTUK LAYOUT GRID 2x3
        const columns = 2, rows = 3;
        const imageGridSize = rows * columns; // Harus 6
        const canvasWidth = 900, canvasHeight = 1352;
        const borderWidth = 30, spacing = 12, bottomPadding = 100;
        const photoWidth = (canvasWidth - (borderWidth * 2) - (spacing * (columns - 1))) / columns;
        const photoHeight = (canvasHeight - (borderWidth * 2) - (spacing * (rows - 1)) - bottomPadding) / rows;
        stackedCanvas.width = canvasWidth;
        stackedCanvas.height = canvasHeight;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (backgroundType === 'color') { ctx.fillStyle = backgroundColor; ctx.fillRect(0, 0, canvasWidth, canvasHeight); } 
        else if (backgroundType === 'image' && backgroundImage && backgroundImage.complete) { ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight); }

        // Hanya gambar jika jumlah foto sesuai dengan grid
        if (storedImages.length === imageGridSize) {
            const imageElements = await Promise.all(storedImages.map(imgData => new Promise(resolve => { const img = new Image(); img.src = imgData; img.onload = () => resolve(img); img.onerror = () => resolve(null); })));
            imageElements.forEach((img, index) => {
                if (!img) return;
                const col = index % columns;
                const row = Math.floor(index / columns);
                const x = borderWidth + col * (photoWidth + spacing);
                const y = borderWidth + row * (photoHeight + spacing);
                const imgAspect = img.width / img.height, targetAspect = photoWidth / photoHeight;
                let sx, sy, sWidth, sHeight;
                if (imgAspect > targetAspect) { sHeight = img.height; sWidth = img.height * targetAspect; sx = (img.width - sWidth) / 2; sy = 0; } 
                else { sWidth = img.width; sHeight = img.width / targetAspect; sx = 0; sy = (img.height - sHeight) / 2; }
                clipAndDrawImage(ctx, img, sx, sy, sWidth, sHeight, x, y, photoWidth, photoHeight, selectedShape);
            });
        } else {
             console.warn(`Jumlah foto (${storedImages.length}) tidak sesuai dengan layout grid 2x3 yang membutuhkan ${imageGridSize} foto.`);
        }
        
        drawTextAndDate(ctx, stackedCanvas);
        await drawSticker(ctx, stackedCanvas);
        updatePreview(stackedCanvas);
    }

    function updatePreview(canvas) {
        if (!photoCustomPreview) return;
        photoCustomPreview.innerHTML = '';
        canvas.style.width = (window.innerWidth <= 768) ? "190px" : "230px";
        canvas.style.border = (backgroundColor === '#FFFFFF' && backgroundType === 'color') ? '1px solid #ccc' : 'none';
        photoCustomPreview.appendChild(canvas);
    }

    async function downloadCanvasCopy() {
        const previewCanvas = photoCustomPreview.querySelector('canvas');
        if (!previewCanvas) { alert("Preview tidak tersedia."); return; }
        const imageData = previewCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'pictlord.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    redrawCanvas();
});

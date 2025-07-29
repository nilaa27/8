document.addEventListener('DOMContentLoaded', function() {
    
    // --- MODIFIKASI DIMULAI ---
    // 1. Objek untuk menyimpan state/pilihan kustomisasi Logo dan Tanggal
    const customizationOptions = {
        logo: {
            lang: 'ENG',
            text: 'pictlord',
            color: '#000000' // Warna default untuk teks logo
        },
        date: {
            show: false,
            showTime: false
        }
    };
    // --- MODIFIKASI SELESAI ---

    const photoCustomPreview = document.getElementById('photoPreview')
    const pinkBtn = document.getElementById('pinkBtnFrame')
    const blueBtn = document.getElementById('blueBtnFrame')
    const yellowBtn = document.getElementById('yellowBtnFrame')
    const brownBtn = document.getElementById('brownBtnFrame')
    const redBtn = document.getElementById('redBtnFrame')

    const matchaBtn = document.getElementById('matchaBtnFrame')
    const purpleBtn = document.getElementById('purpleBtnFrame')
    const whiteBtn = document.getElementById('whiteBtnFrame')
    const blackBtn = document.getElementById('blackBtnFrame')

    const pinkGlitter = document.getElementById('pinkGlitter');
    const pinkPlaid = document.getElementById('pinkPlaid');
    const bluePlaid = document.getElementById('bluePlaid');
    const brownLeopard = document.getElementById('brownLeopard');
    const cowPrint = document.getElementById('cowPrint');
    const redLeather = document.getElementById('redLeather');
    const pinkGumamela = document.getElementById('pinkGumamela');
    const whiteKnitted = document.getElementById('whiteKnitted');
    const blackCq = document.getElementById('black-cq');
    const whiteCq = document.getElementById('white-cq');
    const pinkLeather = document.getElementById('pinkLeather');
    const ribbonDenim = document.getElementById('ribbonDenim');
    const blackPinkRibbon = document.getElementById('blackPinkRibbon');
    const blueYellowSquares = document.getElementById('blueYellowSquares');
    const blueWhiteSquares = document.getElementById('blueWhiteSquares');
    const fourLockers = document.getElementById('fourLockers');
    const crumpledPaper = document.getElementById('crumpledPaper');
    const blueBackdrop = document.getElementById('blueBackdrop');
    const greenHills = document.getElementById('greenHills');
    const sandShells = document.getElementById('sandShells');
    const waterBeach = document.getElementById('waterBeach');
    const cocoTrees = document.getElementById('cocoTrees');
    const pinkLiliesFrame = document.getElementById('pinkLiliesFrame');
    const roseCardFrame = document.getElementById('roseCardFrame');
    const princessVintageFrame = document.getElementById('princessVintageFrame');
    const gridPaperFrame = document.getElementById('gridPaperFrame');
    const stardustFrame = document.getElementById('stardustFrame');
    const roughTextureFrame = document.getElementById('roughTextureFrame');
    const ribbonSweaterFrame = document.getElementById('ribbonSweaterFrame');
    const vsPinkFrame = document.getElementById('vsPinkFrame');
    const vsYellowFrame = document.getElementById('vsYellowFrame');
    const redRosesPaintFrame = document.getElementById('redRosesPaintFrame');
    const grayTrashFrame = document.getElementById('grayTrashFrame');
    const blackTrashFrame = document.getElementById('blackTrashFrame');
    const whiteTrashFrame = document.getElementById('whiteTrashFrame');
    const brownKnittedFrame = document.getElementById('brownKnittedFrame');
    const hotPinkKnittedFrame = document.getElementById('hotPinkKnittedFrame');
    const redKnittedFrame = document.getElementById('redKnittedFrame');
    const pinkKnittedFrame = document.getElementById('pinkKnittedFrame');
    const redStripesFrame = document.getElementById('redStripesFrame');
    const greenStripesFrame = document.getElementById('greenStripesFrame');
    const blueStripesFrame = document.getElementById('blueStripesFrame');
    const partyDrapeFrame = document.getElementById('partyDrapeFrame');
    const partyDotsFrame = document.getElementById('partyDotsFrame');
    const blingDenimFrame = document.getElementById('blingDenimFrame');

    const customBack = document.getElementById('customBack');
    const downloadCopyBtn = document.getElementById('downloadCopyBtn');

    const noneSticker = document.getElementById('noneSticker')
    const kissSticker = document.getElementById('kissSticker')
    const ribbonSticker = document.getElementById('ribbonSticker')
    const sweetSticker = document.getElementById('sweetSticker')
    const sparkleSticker = document.getElementById('sparkleSticker')
    const pearlSticker = document.getElementById('pearlSticker')
    const softSticker = document.getElementById('softSticker');
    const bunnySticker = document.getElementById('bunnySticker');
    const classicSticker = document.getElementById('classicSticker');
    const classicBSticker = document.getElementById('classicBSticker');
    const luckySticker = document.getElementById('luckySticker');
    const confettiSticker = document.getElementById('confettiSticker');
    const ribbonCoquetteSticker = document.getElementById('ribbonCoquetteSticker');
    const blueRibbonCoquetteSticker = document.getElementById('blueRibbonCoquetteSticker');
    const blackStarSticker = document.getElementById('blackStarSticker');
    const yellowChickenSticker = document.getElementById('yellowChickenSticker');
    const brownBearSticker = document.getElementById('brownBearSticker');
    const lotsHeartSticker = document.getElementById('lotsHeartSticker');
    const tabbyCatSticker = document.getElementById('tabbyCatSticker');
    const ballerinaCappuccinoSticker = document.getElementById('ballerinaCappuccinoSticker');
    const doggyWhiteSticker = document.getElementById('doggyWhiteSticker');
    const sakuraBlossomSticker = document.getElementById('sakuraBlossomSticker');
    const myGirlsSticker = document.getElementById('myGirlsSticker');
    
    // Variabel ini tidak lagi digunakan, saya hapus untuk kebersihan
    // const engLogo = document.getElementById('engLogo');
    // const korLogo = document.getElementById('korLogo');
    // const cnLogo = document.getElementById('cnLogo');

    const normalFrameBtn = document.getElementById('noneFrameShape');
    const roundEdgeFrameBtn = document.getElementById('softFrameShape');
    const circleFrameBtn = document.getElementById('circleFrameShape');
    const heartFrameBtn = document.getElementById('heartFrameShape');
    
    // Variabel-variabel ini tidak lagi digunakan
    // let engLogoToggle = false;
    // let korLogoToggle = false;
    // let cnLogoToggle = false;

    let selectedShape = 'default';

    // --- MODIFIKASI DIMULAI ---
    // Mengambil elemen-elemen baru untuk logo dan tanggal
    const logoLangContainer = document.querySelector('.logo-container'); // Menggunakan class selector
    const logoColorPicker = document.getElementById('logoColorPicker');
    const dateCheckbox = document.getElementById('dateCheckbox');
    const timeCheckbox = document.getElementById('dateTimeCheckbox'); // Sesuai HTML Anda
    // --- MODIFIKASI SELESAI ---

    const colorPickerBtn = document.getElementById("colorPickerBtn");

    let finalCanvas = null;
    let selectedSticker = null;

    // Variabel selectedText tidak lagi diperlukan karena sudah ada di customizationOptions.logo.text
    // let selectedText = 'pictlord';

    if (customBack) {
        customBack.addEventListener('click', () => {
            window.location.href = 'canvas6.html'
        })
    }

    // --- MODIFIKASI DIMULAI ---
    // Event listener untuk checkbox tanggal dan waktu yang terhubung ke objek kustomisasi
    if (dateCheckbox) {
        dateCheckbox.addEventListener('change', (e) => {
            customizationOptions.date.show = e.target.checked;
            redrawCanvas();
        });
    }

    if (timeCheckbox) {
        timeCheckbox.addEventListener('change', (e) => {
            customizationOptions.date.showTime = e.target.checked;
            redrawCanvas();
        });
    }
    // --- MODIFIKASI SELESAI ---
    
    const storedImages = JSON.parse(sessionStorage.getItem('photoArray'));
    const imageArrayLength = storedImages.length;
    
    if (!storedImages || storedImages.length !== imageArrayLength) {
        console.log("No valid images found in sessionStorage");
    } else {
        console.log("Loaded images:", storedImages);
    }

    let backgroundType = 'color';
    let backgroundColor = '#FFFFFF';
    let backgroundImage = null;

    function setBackground(option) {
        console.log('Setting background:', option);
    
        if (option.type === 'color') {
            backgroundType = 'color';
            backgroundColor = option.value;
            redrawCanvas();
        } else if (option.type === 'image') {
            backgroundType = 'image';
            backgroundImage = new Image();
            backgroundImage.src = option.src;
    
            backgroundImage.onload = () => {
                redrawCanvas();
            };
        }
    }

    const picker = new Picker({
        parent: colorPickerBtn,
        popup: 'bottom',
        color: '#FFFFFF',
        onChange: (color) => {
            setBackground({ type: 'color', value: color.hex });
        },
        onDone: (color) => {
            colorPickerBtn.style.backgroundColor = color.hex;
        }
    });

    colorPickerBtn.addEventListener("click", () => picker.show());

    function setSticker(type) {
        if (selectedSticker === type) {
            selectedSticker = null;
            console.log(`Removed sticker: ${type}`);
        } else {
            selectedSticker = type;
            console.log(`Selected sticker: ${type}`);
        }
        redrawCanvas();
    }
    
    // SEMUA KODE EVENT LISTENER STIKER ANDA TETAP UTUH, TIDAK SAYA UBAH
    const allStickers = [kissSticker, sweetSticker, ribbonSticker, sparkleSticker, pearlSticker, classicSticker, classicBSticker, softSticker, bunnySticker, luckySticker, confettiSticker, ribbonCoquetteSticker, blueRibbonCoquetteSticker, blackStarSticker, yellowChickenSticker, brownBearSticker, lotsHeartSticker, tabbyCatSticker, ballerinaCappuccinoSticker, doggyWhiteSticker, sakuraBlossomSticker, myGirlsSticker, noneSticker];
    function resetStickerBackgrounds() { allStickers.forEach(el => { if (el) el.style.backgroundColor = ''; }); }
    if (kissSticker) { kissSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('kiss'); kissSticker.style.backgroundColor = '#E28585'; }); }
    if (sweetSticker) { sweetSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('sweet'); sweetSticker.style.backgroundColor = '#E28585'; }); }
    if (ribbonSticker) { ribbonSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('ribbon'); ribbonSticker.style.backgroundColor = '#E28585'; }); }
    if (sparkleSticker) { sparkleSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('sparkle'); sparkleSticker.style.backgroundColor = '#E28585'; }); }
    if (pearlSticker) { pearlSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('pearl'); pearlSticker.style.backgroundColor = '#E28585'; }); }
    if (classicSticker) { classicSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('classic'); classicSticker.style.backgroundColor = '#E28585'; }); }
    if (classicBSticker) { classicBSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('classicB'); classicBSticker.style.backgroundColor = '#E28585'; }); }
    if (softSticker) { softSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('soft'); softSticker.style.backgroundColor = '#E28585'; }); }
    if (bunnySticker) { bunnySticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('bunny'); bunnySticker.style.backgroundColor = '#E28585'; }); }
    if (luckySticker) { luckySticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('lucky'); luckySticker.style.backgroundColor = '#E28585'; }); }
    if (confettiSticker) { confettiSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('confetti'); confettiSticker.style.backgroundColor = '#E28585'; }); }
    if (ribbonCoquetteSticker) { ribbonCoquetteSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('ribboncoquette'); ribbonCoquetteSticker.style.backgroundColor = '#E28585'; }); }
    if (blueRibbonCoquetteSticker) { blueRibbonCoquetteSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('blueribboncoquette'); blueRibbonCoquetteSticker.style.backgroundColor = '#E28585'; }); }
    if (blackStarSticker) { blackStarSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('blackstar'); blackStarSticker.style.backgroundColor = '#E28585'; }); }
    if (yellowChickenSticker) { yellowChickenSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('yellowchicken'); yellowChickenSticker.style.backgroundColor = '#E28585'; }); }
    if (brownBearSticker) { brownBearSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('brownbear'); brownBearSticker.style.backgroundColor = '#E28585'; }); }
    if (lotsHeartSticker) { lotsHeartSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('lotsheart'); lotsHeartSticker.style.backgroundColor = '#E28585'; }); }
    if (tabbyCatSticker) { tabbyCatSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('tabbycat'); tabbyCatSticker.style.backgroundColor = '#E28585'; }); }
    if (ballerinaCappuccinoSticker) { ballerinaCappuccinoSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('ballerinacp'); ballerinaCappuccinoSticker.style.backgroundColor = '#E28585'; }); }
    if (doggyWhiteSticker) { doggyWhiteSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('doggywhite'); doggyWhiteSticker.style.backgroundColor = '#E28585'; }); }
    if (sakuraBlossomSticker) { sakuraBlossomSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('sakurablossom'); sakuraBlossomSticker.style.backgroundColor = '#E28585'; }); }
    if (myGirlsSticker) { myGirlsSticker.addEventListener('click', () => { resetStickerBackgrounds(); setSticker('mygirls'); myGirlsSticker.style.backgroundColor = '#E28585'; }); }
    if (noneSticker) { noneSticker.addEventListener('click', () => { resetStickerBackgrounds(); selectedSticker = null; redrawCanvas(); }); }

    // SEMUA KODE EVENT LISTENER FRAME ANDA TETAP UTUH, TIDAK SAYA UBAH
    if (pinkBtn) { pinkBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#FFC2D1' }); }); }
    if (blueBtn) { blueBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#CAF0F8' }); }); }
    if (yellowBtn) { yellowBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#FFF8A5' }); }); }
    if (matchaBtn) { matchaBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#90a955' }); }); }
    if (purpleBtn) { purpleBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#c19ee0' }); }); }
    if (brownBtn) { brownBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#DDBEA9' }); }); }
    if (redBtn) { redBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#780000' }); }); }
    if (whiteBtn) { whiteBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#FFFFFF' }); }); }
    if (blackBtn) { blackBtn.addEventListener('click', () => { setBackground({ type: 'color', value: '#000000' }); }); }
    if (pinkPlaid) { pinkPlaid.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/pink-plaid.jpg'}); }); }
    if (pinkGlitter) { pinkGlitter.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/pink-glitter.jpg'}); }); }
    if (bluePlaid) { bluePlaid.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/blue-plaid.jpg'}); }); }
    if (brownLeopard) { brownLeopard.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/brown-leopard.jpg'}); }); }
    if (cowPrint) { cowPrint.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/cow-print.jpg'}); }); }
    if (redLeather) { redLeather.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/red-leather.jpg'}); }); }
    if (pinkGumamela) { pinkGumamela.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/pink-gumamela.jpg'}); }); }
    if (whiteKnitted) { whiteKnitted.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/white-knitted-cloth.jpg'}); }); }
    if (blackCq) { blackCq.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/black-couqutte.jpg'}); }); }
    if (whiteCq) { whiteCq.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/white-couquette.jpg'}); }); }
    if (pinkLeather) { pinkLeather.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/pink-diamond-leather.jpg'}); }); }
    if (ribbonDenim) { ribbonDenim.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/ribbon-denim.jpg'}); }); }
    if (blackPinkRibbon) { blackPinkRibbon.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/black-pink-ribbon.jpg'}); }); }
    if (blueYellowSquares) { blueYellowSquares.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/blue-yellow-squares.jpg'}); }); }
    if (blueWhiteSquares) { blueWhiteSquares.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/blue-white-squares.jpg'}); }); }
    if (fourLockers) { fourLockers.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/4-lockers.jpg'}); }); }
    if (crumpledPaper) { crumpledPaper.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/crumpled-paper.jpg'}); }); }
    if (blueBackdrop) { blueBackdrop.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/blue-backdrop.jpg'}); }); }
    if (greenHills) { greenHills.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/green-hills.jpg'}); }); }
    if (sandShells) { sandShells.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/sand-shells.jpg'}); }); }
    if (waterBeach) { waterBeach.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/water.jpg'}); }); }
    if (cocoTrees) { cocoTrees.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/coco-trees.jpg'}); }); }
    if (pinkLiliesFrame) { pinkLiliesFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/pink-lilies.jpg'}); }); }
    if (roseCardFrame) { roseCardFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/rose-card.jpg'}); }); }
    if (princessVintageFrame) { princessVintageFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/princess-vintage.jpg'}); }); }
    if (gridPaperFrame) { gridPaperFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/grid-paper.jpg'}); }); }
    if (stardustFrame) { stardustFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/stardust.jpg'}); }); }
    if (roughTextureFrame) { roughTextureFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/rough-texture.jpg'}); }); }
    if (ribbonSweaterFrame) { ribbonSweaterFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/ribbon-sweater.jpg'}); }); }
    if (vsPinkFrame) { vsPinkFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/vs-pink.jpg'}); }); }
    if (vsYellowFrame) { vsYellowFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/vs-yellow.jpg'}); }); }
    if (redRosesPaintFrame) { redRosesPaintFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/red-roses-paint.jpg'}); }); }
    if (grayTrashFrame) { grayTrashFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/gray-trash.jpg'}); }); }
    if (blackTrashFrame) { blackTrashFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/black-trash.jpg'}); }); }
    if (whiteTrashFrame) { whiteTrashFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/white-trash.jpg'}); }); }
    if (brownKnittedFrame) { brownKnittedFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/brown-knitted.jpg'}); }); }
    if (hotPinkKnittedFrame) { hotPinkKnittedFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/hot-pink-knitted.jpg'}); }); }
    if (redKnittedFrame) { redKnittedFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/red-knitted.jpg'}); }); }
    if (pinkKnittedFrame) { pinkKnittedFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/pink-knitted.jpg'}); }); }
    if (redStripesFrame) { redStripesFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/red-stripes.jpg'}); }); }
    if (greenStripesFrame) { greenStripesFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/green-stripes.jpg'}); }); }
    if (blueStripesFrame) { blueStripesFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/blue-stripes.jpg'}); }); }
    if (partyDrapeFrame) { partyDrapeFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/party-drape.jpg'}); }); }
    if (partyDotsFrame) { partyDotsFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/party-dots.jpg'}); }); }
    if (blingDenimFrame) { blingDenimFrame.addEventListener('click', () => { setBackground({ type: 'image', src: 'assets/frame-backgrounds/bling-denim.jpg'}); }); }

    // --- MODIFIKASI DIMULAI ---
    // MENGHAPUS BLOK `allLogoButtons` DAN `updateText` YANG LAMA DAN MENGGANTINYA DENGAN INI.
    if (logoLangContainer) {
        logoLangContainer.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            const lang = button.id.replace('Logo', '').toUpperCase();
            customizationOptions.logo.lang = lang;
            const textMap = { 'ENG': 'pictlord', 'KOR': 'ㅔㅑㅊ시ㅐㄱㅇ', 'CN': '照相亭' };
            customizationOptions.logo.text = textMap[lang] || '';

            // Anda dapat menghapus logika `resetLogoBackgrounds` dan `classList.add('active')` 
            // karena itu sudah ditangani oleh script di file HTML Anda.

            redrawCanvas();
        });
    }

    if (logoColorPicker) {
        logoColorPicker.addEventListener('input', (e) => {
            customizationOptions.logo.color = e.target.value;
            redrawCanvas();
        });
    }
    // --- MODIFIKASI SELESAI ---

    // Fungsi ini sekarang menjadi pusat untuk menggambar teks, membaca dari `customizationOptions`.
    function drawTextAndDate(ctx, canvas) {
        let textColor = customizationOptions.logo.color;

        // Gambar teks logo jika dipilih
        if (customizationOptions.logo.lang !== 'NONE') { // Menambahkan kondisi untuk tidak menggambar jika "None"
            ctx.fillStyle = textColor;
            ctx.font = 'bold 32px Arial, Roboto, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(customizationOptions.logo.text, canvas.width / 2, canvas.height - 55);
        }

        // Gambar tanggal/waktu jika dipilih
        if (customizationOptions.date.show || customizationOptions.date.showTime) {
            const currentDate = new Date();
            let displayText = '';
            if (customizationOptions.date.show) {
                displayText += currentDate.toLocaleDateString();
            }
            if (customizationOptions.date.showTime) {
                const timeString = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                displayText += (customizationOptions.date.show ? ' ' : '') + timeString;
            }
            ctx.fillStyle = textColor;
            ctx.font = '18px "DM Sans", Arial, Roboto, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(displayText, canvas.width / 2, canvas.height - 30);
        }
    }

    // FUNGSI drawSticker ANDA TETAP UTUH, TIDAK SAYA UBAH
    function drawSticker(ctx, stackedCanvas) {
        return new Promise((resolve) => {
            if (!selectedSticker) {
                resolve();
                return;
            }
            // ... (SEMUA KODE STICKER LAYOUTS ANDA DI SINI, SAMA SEPERTI ASLINYA) ...
            const stickerLayouts = { 'kiss': [{ src: 'assets/stickers/kiss1.png', x: 30, y: 300, size: 170 }], 'sweet': [ { src: 'assets/stickers/sweet1.png', x: 17, y: 80, size: 90 }, { src: 'assets/stickers/sweet2.png', x: stackedCanvas.width - 100, y: 390, size: 90 }, { src: 'assets/stickers/sweet3.png', x: 30, y: stackedCanvas.height - 200, size: 90 } ], 'ribbon': [ { src: 'assets/stickers/ribbon1.png', x: 17, y: 80, size: 90 }, { src: 'assets/stickers/ribbon3.png', x: stackedCanvas.width - 100, y: 550, size: 95 }, { src: 'assets/stickers/ribbon2.png', x: 15, y: stackedCanvas.height - 380, size: 90 } ], 'sparkle': [ { src: 'assets/stickers/sparkle1.png', x: stackedCanvas.width - 200, y: 150, size: 250 }, { src: 'assets/stickers/sparkle2.png', x: 2, y: stackedCanvas.height - 850, size: 200 }, { src: 'assets/stickers/sparkle2.png', x: stackedCanvas.width - 150, y: stackedCanvas.height - 180, size: 110 } ], 'pearl': [ { src: 'assets/stickers/pearl1.png', x: 35, y: 30, size: 30 }, { src: 'assets/stickers/pearl1.png', x: 25, y: 50, size: 25 }, { src: 'assets/stickers/pearl1.png', x: 65, y: 40, size: 20 }, { src: 'assets/stickers/pearl1.png', x: 95, y: 40, size: 15 }, { src: 'assets/stickers/pearl1.png', x: 75, y: 26, size: 15 }, { src: 'assets/stickers/pearl1.png', x: 25, y: 65, size: 55 }, { src: 'assets/stickers/pearl1.png', x: 25, y: 120, size: 15 }, { src: 'assets/stickers/pearl1.png', x: 825, y: stackedCanvas.height - 620, size: 15 }, { src: 'assets/stickers/pearl1.png', x: 800, y: stackedCanvas.height - 690, size: 15 }, { src: 'assets/stickers/pearl1.png', x: 840, y: stackedCanvas.height - 650, size: 25 }, { src: 'assets/stickers/pearl1.png', x: 830, y: stackedCanvas.height - 700, size: 45 }, { src: 'assets/stickers/pearl1.png', x: 810, y: stackedCanvas.height - 670, size: 30 }, { src: 'assets/stickers/pearl1.png', x: 810, y: stackedCanvas.height - 710, size: 30 }, { src: 'assets/stickers/pearl1.png', x: 15, y: stackedCanvas.height - 200, size: 30 }, { src: 'assets/stickers/pearl1.png', x: 35, y: stackedCanvas.height - 220, size: 20 }, { src: 'assets/stickers/pearl1.png', x: 20, y: stackedCanvas.height - 240, size: 15 }, { src: 'assets/stickers/pearl2.png', x: 15, y: stackedCanvas.height - 180, size: 150 }, { src: 'assets/stickers/pearl2.png', x: stackedCanvas.width - 150, y: 270, size: 120 } ], 'classic': [ { src: 'assets/stickers/classic1.png', x: 1, y: 50, size: 32}, { src: 'assets/stickers/classic1.png', x: 1, y: 450, size: 32}, { src: 'assets/stickers/classic1.png', x: 1, y: 950, size: 32}, { src: 'assets/stickers/classic2.png', x: 4, y: 80, size: 20}, { src: 'assets/stickers/classic2.png', x: 4, y: 980, size: 20}, { src: 'assets/stickers/classic3.png', x: stackedCanvas.width - 75, y: 70, size: 120}, { src: 'assets/stickers/classic3.png', x: stackedCanvas.width - 75, y: 570, size: 120} ], 'classicB': [ { src: 'assets/stickers/classic4.png', x: 1, y: 50, size: 32}, { src: 'assets/stickers/classic4.png', x: 1, y: 450, size: 32}, { src: 'assets/stickers/classic4.png', x: 1, y: 950, size: 32}, { src: 'assets/stickers/classic5.png', x: 4, y: 80, size: 20}, { src: 'assets/stickers/classic5.png', x: 4, y: 980, size: 20}, { src: 'assets/stickers/classic6.png', x: stackedCanvas.width - 75, y: 70, size: 120}, { src: 'assets/stickers/classic6.png', x: stackedCanvas.width - 75, y: 570, size: 120} ], 'soft': [ { src: 'assets/stickers/soft1.png', x: 5, y: 20, size: 145}, { src: 'assets/stickers/soft2.png', x: stackedCanvas.width - 120, y: 30, size: 100}, { src: 'assets/stickers/soft3.png', x: 10, y: 500, size: 120}, { src: 'assets/stickers/soft4.png', x: 15, y: stackedCanvas.height - 200, size: 120}, { src: 'assets/stickers/soft5.png', x: stackedCanvas.width - 130, y: stackedCanvas.height - 200, size: 120}, { src: 'assets/stickers/soft6.png', x: stackedCanvas.width - 130, y: 430, size: 120} ], 'bunny': [ { src: 'assets/stickers/bunny1.png', x: stackedCanvas.width - 170, y: 10, size: 150}, { src: 'assets/stickers/bunny2.png', x: 15, y: 300, size: 95}, { src: 'assets/stickers/bunny2.png', x: stackedCanvas.width - 100, y: 700, size: 75}, { src: 'assets/stickers/bunny3.png', x: 15, y: stackedCanvas.height - 200, size: 135} ], 'lucky' : [ { src: 'assets/stickers/lucky2.png', x: stackedCanvas.width - 170, y: 20, size: 150}, { src: 'assets/stickers/lucky1.png', x: 15, y: stackedCanvas.height - 215, size: 170}, { src: 'assets/stickers/lucky3.png', x: stackedCanvas.width - 120, y: 420, size: 90}, { src: 'assets/stickers/lucky4.png', x: stackedCanvas.width - 120, y: 495, size: 90}, { src: 'assets/stickers/lucky5.png', x: stackedCanvas.width - 128, y: 560, size: 110}, { src: 'assets/stickers/lucky6.png', x: stackedCanvas.width - 120, y: 650, size: 100}, { src: 'assets/stickers/lucky7.png', x: stackedCanvas.width - 120, y: 730, size: 95} ], 'confetti' : [ { src: 'assets/stickers/confetti/star5.png', x: 100, y: 20, size: 40}, { src: 'assets/stickers/confetti/circle2.png', x: stackedCanvas.width - 120, y: 45, size: 50}, { src: 'assets/stickers/confetti/circle1.png', x: 30, y: 150, size: 35}, { src: 'assets/stickers/confetti/circle1.png', x: stackedCanvas.width - 70, y: 180, size: 32}, { src: 'assets/stickers/confetti/star2.png', x: stackedCanvas.width - 100, y: 320, size: 40}, { src: 'assets/stickers/confetti/star1.png', x: 100, y: 450, size: 32}, { src: 'assets/stickers/confetti/circle2.png', x: stackedCanvas.width - 30, y: 530, size: 27}, { src: 'assets/stickers/confetti/star4.png', x: stackedCanvas.width - 70, y: 580, size: 27}, { src: 'assets/stickers/confetti/star3.png', x: 22, y: 690, size: 47}, { src: 'assets/stickers/confetti/circle1.png', x: stackedCanvas.width - 200, y: 800, size: 32}, { src: 'assets/stickers/confetti/circle1.png', x: stackedCanvas.width - 200, y: 800, size: 32}, { src: 'assets/stickers/confetti/star2.png', x: 100, y: 850, size: 49}, { src: 'assets/stickers/confetti/circle2.png', x: 22, y: 990, size: 30}, { src: 'assets/stickers/confetti/star1.png', x: stackedCanvas.width - 100, y: stackedCanvas.height - 200, size: 35} ], 'ribboncoquette' : [ { src: 'assets/stickers/ribboncq2.png', x: 1, y: 0, size: 80}, { src: 'assets/stickers/ribboncq3.png', x: 392, y: 15, size: 95}, { src: 'assets/stickers/ribboncq1.png', x: stackedCanvas.width - 39, y: 25, size: 82}, { src: 'assets/stickers/ribboncq1.png', x: -22, y: 290, size: 75}, { src: 'assets/stickers/ribboncq2.png', x: stackedCanvas.width - 100, y: 240, size: 55}, { src: 'assets/stickers/ribboncq3.png', x: 5, y: 640, size: 52}, { src: 'assets/stickers/ribboncq3.png', x: stackedCanvas.width - 78, y: 520, size: 69}, { src: 'assets/stickers/ribboncq1.png', x: 399, y: stackedCanvas.height - 200, size: 82}, { src: 'assets/stickers/ribboncq2.png', x: stackedCanvas.width - 42, y: 760, size: 55}, { src: 'assets/stickers/ribboncq1.png', x: -15, y: 890, size: 72}, { src: 'assets/stickers/ribboncq3.png', x: stackedCanvas.width - 70, y: 1020, size: 55}, { src: 'assets/stickers/ribboncq2.png', x: -8, y: stackedCanvas.height - 200, size: 80}, { src: 'assets/stickers/ribboncq3.png', x: stackedCanvas.width - 70, y: stackedCanvas.height - 100, size: 55} ], 'blueribboncoquette' : [ { src: 'assets/stickers/blueRibbon.png', x: 1, y: 0, size: 80}, { src: 'assets/stickers/blueRibbon.png', x: 392, y: 15, size: 95}, { src: 'assets/stickers/blueRibbon.png', x: stackedCanvas.width - 39, y: 25, size: 82}, { src: 'assets/stickers/blueRibbon.png', x: -22, y: 290, size: 75}, { src: 'assets/stickers/blueRibbon.png', x: stackedCanvas.width - 100, y: 240, size: 55}, { src: 'assets/stickers/blueRibbon.png', x: 5, y: 640, size: 52}, { src: 'assets/stickers/blueRibbon.png', x: stackedCanvas.width - 78, y: 520, size: 69}, { src: 'assets/stickers/blueRibbon.png', x: 399, y: stackedCanvas.height - 200, size: 82}, { src: 'assets/stickers/blueRibbon.png', x: stackedCanvas.width - 42, y: 760, size: 55}, { src: 'assets/stickers/blueRibbon.png', x: -15, y: 890, size: 72}, { src: 'assets/stickers/blueRibbon.png', x: stackedCanvas.width - 70, y: 1020, size: 55}, { src: 'assets/stickers/blueRibbon.png', x: -8, y: stackedCanvas.height - 200, size: 80}, { src: 'assets/stickers/blueRibbon.png', x: stackedCanvas.width - 70, y: stackedCanvas.height - 100, size: 55} ], 'blackstar' : [ { src: 'assets/stickers/blackStar1.png', x: 340, y: -90, size: 250}, { src: 'assets/stickers/blackStar2.png', x: stackedCanvas.width - 90, y: -30, size: 110}, { src: 'assets/stickers/blackStar3.png', x: 18, y: 130, size: 98}, { src: 'assets/stickers/blackStar4.png', x: stackedCanvas.width - 120, y: 230, size: 115}, { src: 'assets/stickers/blackStar2.png', x: -17, y: 390, size: 65}, { src: 'assets/stickers/blackStar3.png', x: stackedCanvas.width - 190, y: 590, size: 145}, { src: 'assets/stickers/blackStar2.png', x: 15, y: 750, size: 45}, { src: 'assets/stickers/blackStar2.png', x: stackedCanvas.width - 80, y: 950, size: 55}, { src: 'assets/stickers/blackStar4.png', x: -50, y: stackedCanvas.height - 150, size: 190} ], 'yellowchicken' : [ { src: 'assets/stickers/yellowChicken1.png', x: 1, y: 2, size: 90}, { src: 'assets/stickers/yellowChicken2.png', x: 220, y: -2, size: 66}, { src: 'assets/stickers/yellowChicken1.png', x: stackedCanvas.width - 160, y: 25, size: 55}, { src: 'assets/stickers/yellowChicken2.png', x: stackedCanvas.width - 90, y: 145, size: 85}, { src: 'assets/stickers/yellowChicken2.png', x: -20, y: 245, size: 95}, { src: 'assets/stickers/yellowChicken1.png', x: 140, y: 360, size: 55}, { src: 'assets/stickers/yellowChicken2.png', x: stackedCanvas.width - 220, y: 660, size: 55}, { src: 'assets/stickers/yellowChicken3.png', x: stackedCanvas.width - 70, y: 490, size: 85}, { src: 'assets/stickers/yellowChicken1.png', x: -5, y: 630, size: 80}, { src: 'assets/stickers/yellowChicken1.png', x: stackedCanvas.width - 70, y: 830, size: 75}, { src: 'assets/stickers/yellowChicken2.png', x: stackedCanvas.width - 120, y: stackedCanvas.height - 190, size: 65}, { src: 'assets/stickers/yellowChicken4.png', x: 1, y: stackedCanvas.height - 230, size: 95}, ], 'brownbear' : [ { src: 'assets/stickers/brownyBear1.png', x: 1, y: 5, size: 120}, { src: 'assets/stickers/brownyBear2.png', x: stackedCanvas.width - 100, y: 25, size: 80}, { src: 'assets/stickers/brownyBear3.png', x: -8, y: 315, size: 82}, { src: 'assets/stickers/brownyBear4.png', x: stackedCanvas.width - 100, y: 490, size: 91}, { src: 'assets/stickers/brownyBear5.png', x: -2, y: 590, size: 91}, { src: 'assets/stickers/brownyBear2.png', x: stackedCanvas.width - 70, y: 790, size: 87}, { src: 'assets/stickers/brownyBear3.png', x: -1, y: stackedCanvas.height - 320, size: 82}, { src: 'assets/stickers/brownyBear6.png', x: stackedCanvas.width - 90, y: stackedCanvas.height - 200, size: 92} ], 'lotsheart' : [ { src: 'assets/stickers/lotsHeart1.png', x: 1, y: 15, size: 78}, { src: 'assets/stickers/lotsHeart5.png', x: -18, y: 450, size: 78}, { src: 'assets/stickers/lotsHeart7.png', x: -8, y: 860, size: 60}, { src: 'assets/stickers/lotsHeart6.png', x: 25, y: stackedCanvas.height - 170, size: 70}, { src: 'assets/stickers/lotsHeart2.png', x: stackedCanvas.width - 250, y: 20, size: 60}, { src: 'assets/stickers/lotsHeart4.png', x: stackedCanvas.width - 70, y: 200, size: 57}, { src: 'assets/stickers/lotsHeart6.png', x: stackedCanvas.width - 80, y: 650, size: 60}, { src: 'assets/stickers/lotsHeart3.png', x: stackedCanvas.width - 50, y: 990, size: 50}, { src: 'assets/stickers/lotsHeart8.png', x: stackedCanvas.width - 90, y: stackedCanvas.height - 140, size: 70}, ], 'tabbycat' : [ { src: 'assets/stickers/tabbyCat1.png', x: 1, y: 2, size: 95}, { src: 'assets/stickers/tabbyCat2.png', x: 220, y: -2, size: 66}, { src: 'assets/stickers/tabbyCat3.png', x: stackedCanvas.width - 160, y: 25, size: 60}, { src: 'assets/stickers/tabbyCat4.png', x: stackedCanvas.width - 90, y: 145, size: 95}, { src: 'assets/stickers/tabbyCat9.png', x: -20, y: 245, size: 100}, { src: 'assets/stickers/tabbyCat2.png', x: 140, y: 360, size: 55}, { src: 'assets/stickers/tabbyCat2.png', x: stackedCanvas.width - 220, y: 970, size: 65}, { src: 'assets/stickers/tabbyCat5.png', x: stackedCanvas.width - 90, y: 490, size: 95}, { src: 'assets/stickers/tabbyCat6.png', x: -5, y: 630, size: 84}, { src: 'assets/stickers/tabbyCat9.png', x: stackedCanvas.width - 70, y: 830, size: 75}, { src: 'assets/stickers/tabbyCat3.png', x: -5, y: 830, size: 75}, { src: 'assets/stickers/tabbyCat3.png', x: stackedCanvas.width - 120, y: stackedCanvas.height - 190, size: 65}, { src: 'assets/stickers/tabbyCat7.png', x: 1, y: stackedCanvas.height - 230, size: 120} ], 'ballerinacp' : [ { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino1.png', x: 1, y: 2, size: 125}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino3.png', x: 402, y: -2, size: 90}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino4.png', x: stackedCanvas.width - 130, y: 25, size: 150}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino2.png', x: stackedCanvas.width - 120, y: 345, size: 129}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino5.png', x: -10, y: 695, size: 150}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino7.png', x: -10, y: 295, size: 100}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino6.png', x: stackedCanvas.width - 115, y: 750, size: 110}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino3.png', x: -5, y: stackedCanvas.height - 200, size: 145}, { src: 'assets/stickers/ballerinaCappuccino/balerinaCappuccino4.png', x: stackedCanvas.width - 130, y: stackedCanvas.height - 200, size: 125} ], 'doggywhite' : [ { src: 'assets/stickers/doggyWhite/doggyWhite3.png', x: 1, y: 230, size: 115}, { src: 'assets/stickers/doggyWhite/doggyWhite1.png', x: stackedCanvas.width - 130, y: 25, size: 125}, { src: 'assets/stickers/doggyWhite/doggyWhite4.png', x: stackedCanvas.width - 110, y: 545, size: 115}, { src: 'assets/stickers/doggyWhite/doggyWhite2.png', x: -10, y: 695, size: 125}, { src: 'assets/stickers/doggyWhite/doggyWhite3.png', x: -5, y: stackedCanvas.height - 200, size: 115}, { src: 'assets/stickers/doggyWhite/doggyWhite1.png', x: stackedCanvas.width - 130, y: stackedCanvas.height - 200, size: 125} ], 'mygirls' : [ { src: 'assets/stickers/myGirls/myGirls4.png', x: -30, y: 15, size: 200}, { src: 'assets/stickers/myGirls/myGirls7.png', x: 342, y: -25, size: 215}, { src: 'assets/stickers/myGirls/myGirls8.png', x: stackedCanvas.width - 110, y: 25, size: 105}, { src: 'assets/stickers/myGirls/myGirls10.png', x: stackedCanvas.width - 150, y: 95, size: 155}, { src: 'assets/stickers/myGirls/myGirls11.png', x: stackedCanvas.width - 95, y: 185, size: 115}, { src: 'assets/stickers/myGirls/myGirls6.png', x: stackedCanvas.width - 110, y: 395, size: 135}, { src: 'assets/stickers/myGirls/myGirls4.png', x: stackedCanvas.width - 110, y: 545, size: 135}, { src: 'assets/stickers/myGirls/myGirls1.png', x: stackedCanvas.width - 110, y: 695, size: 135}, { src: 'assets/stickers/myGirls/myGirls2.png', x: -20, y: 305, size: 125}, { src: 'assets/stickers/myGirls/myGirls4.png', x: -20, y: 450, size: 125}, { src: 'assets/stickers/myGirls/myGirls6.png', x: -20, y: 580, size: 125}, { src: 'assets/stickers/myGirls/myGirls10.png', x: -15, y: stackedCanvas.height - 370, size: 115}, { src: 'assets/stickers/myGirls/myGirls11.png', x: 15, y: stackedCanvas.height - 300, size: 155}, { src: 'assets/stickers/myGirls/myGirls9.png', x: -5, y: stackedCanvas.height - 200, size: 115}, { src: 'assets/stickers/myGirls/myGirls5.png', x: stackedCanvas.width - 190, y: stackedCanvas.height - 290, size: 222} ], 'sakurablossom' : [ { src: 'assets/stickers/sakuraBlossom/sakuraBlossom1.png', x: 1, y: 5, size: 120}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom2.png', x: stackedCanvas.width - 100, y: 25, size: 80}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom4.png', x: stackedCanvas.width - 120, y: 95, size: 40}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom2.png', x: -8, y: 315, size: 82}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom3.png', x: 35, y: 390, size: 50}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom2.png', x: stackedCanvas.width - 100, y: 490, size: 91}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom4.png', x: stackedCanvas.width - 140, y: 430, size: 35}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom2.png', x: -2, y: 590, size: 91}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom3.png', x: -15, y: 700, size: 45}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom5.png', x: 50, y: 900, size: 45}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom1.png', x: stackedCanvas.width - 70, y: 790, size: 87}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom2.png', x: -1, y: stackedCanvas.height - 320, size: 82}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom5.png', x: 30, y: stackedCanvas.height - 100, size: 48}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom5.png', x: 90, y: stackedCanvas.height - 40, size: 44}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom2.png', x: stackedCanvas.width - 90, y: stackedCanvas.height - 200, size: 92}, { src: 'assets/stickers/sakuraBlossom/sakuraBlossom4.png', x: stackedCanvas.width - 40, y: stackedCanvas.height - 290, size: 40} ] };
            const stickersToDraw = stickerLayouts[selectedSticker];
            if (!stickersToDraw) {
                resolve();
                return;
            }
            let loadedCount = 0;
            stickersToDraw.forEach(({ src, x, y, size }) => {
                const stickerImg = new Image();
                stickerImg.src = src;
                stickerImg.onload = function () {
                    ctx.drawImage(stickerImg, x, y, size, size);
                    loadedCount++;
                    if (loadedCount === stickersToDraw.length) { resolve(); }
                };
                stickerImg.onerror = function () {
                    console.error(`Failed to load sticker: ${src}`);
                    loadedCount++;
                    if (loadedCount === stickersToDraw.length) { resolve(); }
                };
            });
        });
    }
    
    // FUNGSI clipAndDrawImage ANDA TETAP UTUH, TIDAK SAYA UBAH
    function clipAndDrawImage(ctx, img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, shapeType) {
        ctx.save();
        ctx.beginPath();
        const centerX = dx + dWidth / 2;
        const centerY = dy + dHeight / 2;
        if (shapeType === 'circle') { const radius = Math.min(dWidth, dHeight) / 2; ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); } 
        else if (shapeType === 'rounded') { const radius = 30; ctx.moveTo(dx + radius, dy); ctx.lineTo(dx + dWidth - radius, dy); ctx.quadraticCurveTo(dx + dWidth, dy, dx + dWidth, dy + radius); ctx.lineTo(dx + dWidth, dy + dHeight - radius); ctx.quadraticCurveTo(dx + dWidth, dy + dHeight, dx + dWidth - radius, dy + dHeight); ctx.lineTo(dx + radius, dy + dHeight); ctx.quadraticCurveTo(dx, dy + dHeight, dx, dy + dHeight - radius); ctx.lineTo(dx, dy + radius); ctx.quadraticCurveTo(dx, dy, dx + radius, dy); } 
        else if (shapeType === 'heart') { ctx.beginPath(); ctx.moveTo(dx + dWidth / 2, dy + dHeight); ctx.bezierCurveTo( dx + dWidth * 1.25, dy + dHeight * 0.7, dx + dWidth * 0.9, dy - dHeight * 0.1, dx + dWidth / 2, dy + dHeight * 0.25 ); ctx.bezierCurveTo( dx + dWidth * 0.1, dy - dHeight * 0.1, dx - dWidth * 0.25, dy + dHeight * 0.7, dx + dWidth / 2, dy + dHeight ); ctx.closePath(); } 
        else { ctx.rect(dx, dy, dWidth, dHeight); }
        ctx.clip();
        ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.restore();
    }
    
    // SEMUA EVENT LISTENER BENTUK FRAME ANDA TETAP UTUH, TIDAK SAYA UBAH
    const allFrameButtons = [heartFrameBtn, circleFrameBtn, roundEdgeFrameBtn, normalFrameBtn];
    function resetFrameBackgrounds() { allFrameButtons.forEach(btn => { if (btn) btn.style.backgroundColor = ''; }); }
    if (heartFrameBtn) { heartFrameBtn.addEventListener('click', () => { resetFrameBackgrounds(); selectedShape = 'heart'; heartFrameBtn.style.backgroundColor = '#E28585'; redrawCanvas(); }); }
    if (circleFrameBtn) { circleFrameBtn.addEventListener('click', () => { resetFrameBackgrounds(); selectedShape = 'circle'; circleFrameBtn.style.backgroundColor = '#E28585'; redrawCanvas(); }); }
    if (roundEdgeFrameBtn) { roundEdgeFrameBtn.addEventListener('click', () => { resetFrameBackgrounds(); selectedShape = 'rounded'; roundEdgeFrameBtn.style.backgroundColor = '#E28585'; redrawCanvas(); }); }
    if (normalFrameBtn) { normalFrameBtn.addEventListener('click', () => { resetFrameBackgrounds(); selectedShape = 'default'; normalFrameBtn.style.backgroundColor = '#E28585'; redrawCanvas(); }); }

    // Fungsi redrawCanvas UTAMA, dengan modifikasi untuk membaca dari `customizationOptions`
    function redrawCanvas() {
        console.log(`Redrawing canvas with grid layout`);

        const stackedCanvas = document.createElement('canvas');
        const ctx = stackedCanvas.getContext('2d');

        const columns = 2;
        const rows = 3;
        const imageGridSize = rows * columns; // Harusnya 6

        const canvasWidth = 900;
        const canvasHeight = 1352;
        const borderWidth = 30;
        const spacing = 12;
        const bottomPadding = 100;

        const availableWidth = canvasWidth - (borderWidth * 2) - (spacing * (columns - 1));
        const availableHeight = canvasHeight - (borderWidth * 2) - (spacing * (rows - 1)) - bottomPadding;
        const photoWidth = availableWidth / columns;
        const photoHeight = availableHeight / rows;

        stackedCanvas.width = canvasWidth;
        stackedCanvas.height = canvasHeight;

        ctx.clearRect(0, 0, stackedCanvas.width, stackedCanvas.height);

        if (backgroundType === 'color') {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, stackedCanvas.width, stackedCanvas.height);
        } else if (backgroundType === 'image' && backgroundImage) {
            ctx.drawImage(backgroundImage, 0, 0, stackedCanvas.width, stackedCanvas.height);
        }
        
        // --- MODIFIKASI DIMULAI ---
        // Memanggil fungsi `drawTextAndDate` yang sudah diperbarui
        drawTextAndDate(ctx, stackedCanvas);
        // --- MODIFIKASI SELESAI ---

        if (storedImages && storedImages.length === imageGridSize) {
            let loadedImages = 0;
            storedImages.forEach((imgData, index) => {
                const img = new Image();
                img.src = imgData;
                img.onload = function () {
                    const imgAspect = img.width / img.height;
                    const targetAspect = photoWidth / photoHeight;
                    let sx, sy, sWidth, sHeight;

                    if (imgAspect > targetAspect) {
                        sHeight = img.height;
                        sWidth = img.height * targetAspect;
                        sx = (img.width - sWidth) / 2;
                        sy = 0;
                    } else {
                        sWidth = img.width;
                        sHeight = img.width / targetAspect;
                        sx = 0;
                        sy = (img.height - sHeight) / 2;
                    }
        
                    const col = index % columns;
                    const row = Math.floor(index / columns);
                    const x = borderWidth + col * (photoWidth + spacing);
                    const y = borderWidth + row * (photoHeight + spacing);
        
                    clipAndDrawImage(ctx, img, sx, sy, sWidth, sHeight, x, y, photoWidth, photoHeight, selectedShape);
        
                    loadedImages++;
                    if (loadedImages === imageGridSize) {
                        drawSticker(ctx, stackedCanvas).then(() => {
                           updatePreview(stackedCanvas);
                        });
                    }
                };
            });
        } else {
            console.log("Image count does not match grid size.");
            updatePreview(stackedCanvas); // Tampilkan canvas kosong dengan background
        }
    }

    // Fungsi updatePreview tetap sama
    function updatePreview(canvas) {
        if (!canvas) {
            redrawCanvas();
            return;
        }
        if (photoCustomPreview) {
            photoCustomPreview.innerHTML = '';
            photoCustomPreview.appendChild(canvas);

            if (window.innerWidth <= 768) {
                canvas.style.width = "190px";
            } else {
                canvas.style.width = "230px";
            }
            if(backgroundColor == '#FFFFFF') {
                canvas.style.border = '1px solid black';
            } else {
                canvas.style.border = 'none';
            }
        }
    }
    
    // Fungsi downloadCanvasCopy tetap sama, hanya modifikasi pada pemanggilan drawTextAndDate
    async function downloadCanvasCopy() {
        const stackedCanvas = document.createElement('canvas');
        const ctx = stackedCanvas.getContext('2d');
        
        const columns = 2;
        const rows = 3;
        const imageGridSize = rows * columns;

        const canvasWidth = 900;
        const canvasHeight = 1352;
        const borderWidth = 30;
        const spacing = 12;
        const bottomPadding = 100;

        const availableWidth = canvasWidth - (borderWidth * 2) - (spacing * (columns - 1));
        const availableHeight = canvasHeight - (borderWidth * 2) - (spacing * (rows - 1)) - bottomPadding;
        const photoWidth = availableWidth / columns;
        const photoHeight = availableHeight / rows;
    
        stackedCanvas.width = canvasWidth;
        stackedCanvas.height = canvasHeight;
    
        ctx.clearRect(0, 0, stackedCanvas.width, stackedCanvas.height);

        if (backgroundType === 'color') {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, stackedCanvas.width, stackedCanvas.height);
        } else if (backgroundType === 'image' && backgroundImage) {
            ctx.drawImage(backgroundImage, 0, 0, stackedCanvas.width, stackedCanvas.height);
        }
    
        if (storedImages && storedImages.length === imageGridSize) {
            let loadedImages = 0;
            const imagePromises = storedImages.map(imgData => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = imgData;
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(new Error(`Failed to load image: ${imgData}`));
                });
            });

            try {
                const images = await Promise.all(imagePromises);
                images.forEach((img, index) => {
                    const imgAspect = img.width / img.height;
                    const targetAspect = photoWidth / photoHeight;
                    let sx, sy, sWidth, sHeight;
                    if (imgAspect > targetAspect) {
                        sHeight = img.height; sWidth = img.height * targetAspect; sx = (img.width - sWidth) / 2; sy = 0;
                    } else {
                        sWidth = img.width; sHeight = img.width / targetAspect; sx = 0; sy = (img.height - sHeight) / 2;
                    }
                    const col = index % columns;
                    const row = Math.floor(index / columns);
                    const x = borderWidth + col * (photoWidth + spacing);
                    const y = borderWidth + row * (photoHeight + spacing);
                    clipAndDrawImage(ctx, img, sx, sy, sWidth, sHeight, x, y, photoWidth, photoHeight, selectedShape);
                });

                // --- MODIFIKASI DIMULAI ---
                // Panggil drawTextAndDate dan drawSticker setelah semua gambar selesai digambar
                drawTextAndDate(ctx, stackedCanvas);
                await drawSticker(ctx, stackedCanvas);
                // --- MODIFIKASI SELESAI ---

                const imageData = stackedCanvas.toDataURL('image/png');
                function isIOS() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; }
                if (isIOS()) {
                    const byteCharacters = atob(imageData.split(',')[1]); const byteNumbers = new Array(byteCharacters.length); for (let i = 0; i < byteCharacters.length; i++) { byteNumbers[i] = byteCharacters.charCodeAt(i); } const byteArray = new Uint8Array(byteNumbers); const blob = new Blob([byteArray], { type: 'image/png' }); const link = document.createElement('a'); const url = URL.createObjectURL(blob); link.href = url; link.download = 'pictlord.png'; document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url);
                } else {
                    const link = document.createElement('a'); link.href = imageData; link.download = 'pictlord.png'; document.body.appendChild(link); link.click(); document.body.removeChild(link);
                }

            } catch (error) {
                console.error("Error loading images for download:", error);
            }
        } else {
            console.log("No stored images found for download.");
        }
    }
    
    if (downloadCopyBtn) {
        downloadCopyBtn.addEventListener('click', downloadCanvasCopy);
    }

    window.onload = () => {
        redrawCanvas();
    };
})
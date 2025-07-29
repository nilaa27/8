document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Manager Script (Tetap Sama) ---
    const themeToggle = document.getElementById('theme-toggle');
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
    };
    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    // --- 2. Script untuk Active Button States (Tetap Sama) ---
    const buttonContainers = document.querySelectorAll('.custom-buttons-container, .logo-container');
    buttonContainers.forEach(container => {
        container.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('button');
            if (!clickedButton) return;
            
            if (!clickedButton.closest('.stickers-container')) { 
                 const buttonsInGroup = container.querySelectorAll('button');
                 buttonsInGroup.forEach(btn => btn.classList.remove('active'));
                 clickedButton.classList.add('active');
            } else {
                if(clickedButton.id === 'noneSticker') {
                    const stickerButtons = container.querySelectorAll('button');
                    stickerButtons.forEach(btn => btn.classList.remove('active'));
                    clickedButton.classList.add('active');
                } else {
                    document.getElementById('noneSticker')?.classList.remove('active');
                    clickedButton.classList.toggle('active');
                }
            }
        });
    });

    // --- 3. Logika Modal Preview (Tetap Sama) ---
    const previewModal = document.getElementById('previewModal');
    const previewBtn = document.getElementById('previewBtn');
    const modalImage = document.getElementById('modalImagePreview');

    if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            const finalCanvas = document.querySelector('#photoPreview canvas'); 
            if (finalCanvas) {
                modalImage.src = finalCanvas.toDataURL('image/png');
                previewModal.style.display = 'block';
            } else {
                alert('Silakan buat gambar terlebih dahulu!');
            }
        });
    }

    // =========================================================
    // --- 4. LOGIKA BARU: Modal Download & QR Code ---
    // =========================================================
    const downloadModal = document.getElementById('downloadModal');
    const openDownloadModalBtn = document.getElementById('downloadCopyBtn');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const finalDownloadLink = document.getElementById('finalDownloadLink');

    if (openDownloadModalBtn) {
        openDownloadModalBtn.addEventListener('click', () => {
            const finalCanvas = document.querySelector('#photoPreview canvas');
            if (!finalCanvas) {
                alert('Gambar belum siap untuk diunduh!');
                return;
            }

            // 1. Ambil data gambar dari canvas
            const imageDataUrl = finalCanvas.toDataURL('image/png');

            // 2. Set link download pada tombol di dalam modal
            finalDownloadLink.href = imageDataUrl;
            
            // 3. Hapus QR code lama (jika ada) dan buat yang baru
            qrCodeContainer.innerHTML = '';
            new QRCode(qrCodeContainer, {
                text: imageDataUrl,
                width: 200,  // Ukuran QR Code
                height: 200,
                correctLevel: QRCode.CorrectLevel.L // Level koreksi terendah untuk data besar
            });

            // 4. Tampilkan modal
            downloadModal.style.display = 'block';
        });
    }

    // --- 5. Logika Menutup Semua Modal ---
    function setupModalClose(modalElement) {
        if (!modalElement) return;
        const closeBtn = modalElement.querySelector('.modal-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modalElement.style.display = 'none';
            });
        }
        window.addEventListener('click', (event) => {
            if (event.target == modalElement) {
                modalElement.style.display = 'none';
            }
        });
    }
    setupModalClose(previewModal);
    setupModalClose(downloadModal); // Terapkan juga untuk modal download

    // --- 6. Logika Tombol Share (Tetap Sama) ---
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'Pictlord Photobooth',
                text: 'Coba deh photobooth online keren ini! Aku baru aja bikin foto ciamik di sini. ✨',
                url: window.location.origin 
            };
    
            try {
                if (navigator.share) {
                    await navigator.share(shareData);
                } else {
                    alert('Browser Anda tidak mendukung fitur share. Silakan salin link secara manual.');
                }
            } catch (err) {
                console.error('Error saat sharing:', err);
            }
        });
    }

    // --- 7. Logika untuk Kustomisasi Warna Logo (Tetap Sama) ---
    const logoColorPicker = document.getElementById('logoColorPicker');
    if (logoColorPicker) {
        logoColorPicker.addEventListener('input', () => {
            // Logika ini akan memanggil fungsi redraw dari `customize.js`
            // karena `customize.js` memiliki listener yang terhubung dengan color picker ini.
            // Anda tidak perlu menambahkan apa-apa di sini.
            console.log('Warna logo baru dipilih:', logoColorPicker.value);
        });
    }
});
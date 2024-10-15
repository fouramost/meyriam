// Простая галерея с увеличением изображения
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
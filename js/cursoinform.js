document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.classList.remove('active');
            thumbnails[i].classList.remove('active');
        });
        galleryImages[index].classList.add('active');
        thumbnails[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    }

    // Event Listeners para botões de navegação
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }

    // Event Listeners para thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            showImage(index);
            currentIndex = index; // Atualiza o índice atual para navegação
        });
    });

    // Mostra a primeira imagem e thumbnail ao carregar
    showImage(currentIndex);
});
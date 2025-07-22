    // Efeito de revelação dos itens da linha do tempo ao rolar

     document.addEventListener('DOMContentLoaded', function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkVisibility() {
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight - 100) {
                    item.classList.add('visible');
                }
            });
        }
        
        // Verifica a visibilidade ao carregar a página
        checkVisibility();
        
        // Verifica a visibilidade ao rolar
        window.addEventListener('scroll', checkVisibility);
        
        // Botão de voltar ao topo
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Efeito de hover nas imagens da galeria
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('img').style.transform = 'scale(1.1)';
                this.querySelector('.gallery-caption').style.transform = 'translateY(0)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('img').style.transform = 'scale(1)';
                this.querySelector('.gallery-caption').style.transform = 'translateY(100%)';
            });
        });
    });
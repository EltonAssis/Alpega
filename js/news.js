    document.addEventListener('DOMContentLoaded', function() {
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
        
        // Filtro de categorias
        const categoryBtns = document.querySelectorAll('.category-btn');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Aqui você implementaria a filtragem real das notícias
                // Por enquanto é apenas visual
            });
        });
        
        // Efeito de hover nas cartas de notícias
        const newsCards = document.querySelectorAll('.news-card');
        
        newsCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('img').style.transform = 'scale(1.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('img').style.transform = 'scale(1)';
            });
        });
        
        // Animação de carregamento das notícias
        const newsGrid = document.querySelector('.news-grid');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.news-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.1 });
        
        if (newsGrid) {
            observer.observe(newsGrid);
            
            // Configuração inicial para a animação
            const cards = newsGrid.querySelectorAll('.news-card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
        }
    });
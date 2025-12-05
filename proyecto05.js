// Ocultar nav al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - ocultar nav
        nav.classList.add('hidden');
    } else {
        // Scrolling up - mostrar nav
        nav.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Animación suave al cargar imágenes
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease-in-out';
                
                // Cuando la imagen carga, hacer fade in
                if (img.complete) {
                    img.style.opacity = '1';
                } else {
                    img.addEventListener('load', () => {
                        img.style.opacity = '1';
                    });
                }
                
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Efecto hover en imágenes de armadura
document.addEventListener('DOMContentLoaded', () => {
    const armaduraImgs = document.querySelectorAll('.armadura-modelos img, .galeria-armaduras img');
    
    armaduraImgs.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            img.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

// Autoplay video con control de visibilidad
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-container video');
    
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(err => {
                        console.log('Autoplay prevented:', err);
                    });
                } else {
                    video.pause();
                }
            });
        }, {
            threshold: 0.5
        });
        
        videoObserver.observe(video);
    }
});
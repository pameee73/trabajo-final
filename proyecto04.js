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

// Animación de aparición suave para imágenes
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.8s ease-in-out';
                
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

// Efecto parallax suave en el header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.proyecto-header');
    const scrolled = window.pageYOffset;
    
    if (header && scrolled < window.innerHeight) {
        const headerBg = header.querySelector('.header-bg');
        if (headerBg) {
            headerBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Animación de los círculos de color al hacer hover
document.addEventListener('DOMContentLoaded', () => {
    const colores = document.querySelectorAll('.color-circulo');
    
    colores.forEach(color => {
        color.addEventListener('mouseenter', () => {
            color.style.transform = 'scale(1.15) rotate(5deg)';
            color.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
        });
        
        color.addEventListener('mouseleave', () => {
            color.style.transform = 'scale(1)';
            color.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
    });
});

// Efecto de rotación sutil en los iconos de naturaleza
document.addEventListener('DOMContentLoaded', () => {
    const iconos = document.querySelectorAll('.icono-item img');
    
    iconos.forEach(icono => {
        icono.addEventListener('mouseenter', () => {
            icono.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icono.addEventListener('mouseleave', () => {
            icono.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Animación de las ilustraciones del personaje al entrar en viewport
document.addEventListener('DOMContentLoaded', () => {
    const ilustraciones = document.querySelectorAll('.ilustraciones-personaje img');
    
    const ilustracionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });
    
    ilustraciones.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(30px)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        ilustracionObserver.observe(img);
    });
});
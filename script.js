// Navegación suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto parallax suave para las flores decorativas
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach((flower, index) => {
        const speed = (index + 1) * 0.3;
        flower.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
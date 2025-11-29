// Efecto de GIF automático para mockup móvil
let currentFrame = 0;
let animationInterval = null;

// Define aquí las rutas de tus imágenes (frames del "GIF")
const frames = [
            'boop/frame1.webp',
            'boop/frame2.webp',
            'boop/frame3.webp',
            'boop/frame4.webp',
            'boop/frame5.webp',
            'boop/frame6.webp',
            'boop/frame7.webp',
    // Agrega o quita frames según necesites
];

function startGifAnimation() {
    const mockupImg = document.querySelector('.mockup-movil img');
    
    if (!mockupImg) return;
    
    // Cambiar frame cada 150 milisegundos (ajusta este número para más rápido o más lento)
    // 150ms = velocidad media
    // 100ms = más rápido
    // 200ms = más lento
    animationInterval = setInterval(() => {
        currentFrame = (currentFrame + 1) % frames.length;
        mockupImg.src = frames[currentFrame];
    }, 1000);
}

// Iniciar la animación cuando la página carga
window.addEventListener('load', startGifAnimation);

// También reiniciar si se recarga la sección
document.addEventListener('DOMContentLoaded', startGifAnimation);

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

            
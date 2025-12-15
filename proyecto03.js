// Efecto de GIF automático para mockup móvil
let currentFrame = 0;
let animationInterval = null;

// Define aquí las rutas de tus frames del mockup
const frames = [
    'turi/frame1.webp',
    'turi/frame2.webp',
    'turi/frame3.webp',
    'turi/frame4.webp',
    'turi/frame5.webp',
    'turi/frame6.webp',
    'turi/frame7.webp',
    'turi/frame8.webp',
    'turi/frame9.webp',
    'turi/frame10.webp',
];

function startGifAnimation() {
    const mockupImg = document.querySelector('.mockup-movil img');
    
    if (!mockupImg) return;
    
    animationInterval = setInterval(() => {
        currentFrame = (currentFrame + 1) % frames.length;
        mockupImg.src = frames[currentFrame];
    }, 1000);
}

window.addEventListener('load', startGifAnimation);
document.addEventListener('DOMContentLoaded', startGifAnimation);

// Ocultar nav al hacer scroll y mostrar botón volver
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const btnVolver = document.querySelector('.btn-volver');
    const currentScroll = window.pageYOffset;
    const headerHeight = document.querySelector('.proyecto-header').offsetHeight;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    
    // Mostrar botón volver solo cuando el nav está oculto y después del header
    if (currentScroll > headerHeight && nav.classList.contains('hidden')) {
        btnVolver.classList.add('visible');
    } else {
        btnVolver.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});
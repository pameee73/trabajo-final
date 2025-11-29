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
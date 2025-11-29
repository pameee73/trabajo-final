// Animación de la foto que se mueve al hacer scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const foto = document.getElementById('foto-movil');
    const seccion1 = document.querySelector('.seccion-1');
    const seccion2 = document.querySelector('.seccion-2');
    const seccion3 = document.querySelector('.seccion-3');
    
    const seccion1Height = seccion1.offsetHeight;
    const seccion2Top = seccion2.offsetTop;
    const seccion3Top = seccion3.offsetTop;
    
    // Cuando pasamos de la sección 1 a la 2, la foto se mueve a la izquierda
    if (scrollY > seccion1Height * 0.7) {
        foto.classList.add('moved-left');
    } else {
        foto.classList.remove('moved-left');
    }
    
    // Mostrar texto de sección 2
    const textoSeccion2 = seccion2.querySelector('.texto-derecha');
    if (scrollY > seccion2Top - window.innerHeight / 2) {
        textoSeccion2.classList.add('visible');
    } else {
        textoSeccion2.classList.remove('visible');
    }
    
    // Mostrar texto de sección 3
    const textoSeccion3 = seccion3.querySelector('.texto-derecha');
    if (scrollY > seccion3Top - window.innerHeight / 2) {
        textoSeccion3.classList.add('visible');
    } else {
        textoSeccion3.classList.remove('visible');
    }
});
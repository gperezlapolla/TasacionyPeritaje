const initCarousel = () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    let currentIndex = 0;
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 6000); // 6 segundos entre imágenes
};

function handleClick(service) { console.log(`Usuario interesado en: ${service}`); }

document.addEventListener('DOMContentLoaded', () => {
    console.log('Estructura profesional de Tasación y Peritaje cargada.');
    initCarousel();
});
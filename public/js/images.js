const navLinks = document.querySelectorAll('.nav-link');
const images = document.querySelectorAll('.carousel-image');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        const target = link.getAttribute('data-target');
        images.forEach(image => {
            if (image.id === target) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    });
});
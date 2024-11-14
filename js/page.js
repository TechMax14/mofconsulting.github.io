function fadeInOnScroll() {
    let offset = 300;

    if (isMobile()) {
        offset = 200;
    }

    const fadeIns = document.querySelectorAll('.fade-in');

    fadeIns.forEach(fadeIn => {
        const fadeInTop = fadeIn.getBoundingClientRect().top + offset;
        const windowHeight = window.innerHeight;

        if (fadeInTop < windowHeight) {
            fadeIn.style.opacity = '1';
        }
    });
}

function fadeInButtonsOnScroll() {
    let offset = 100;

    if (isMobile()) {
        offset = 100;
    }

    const fadeIns = document.querySelectorAll('.fade-in-buttons');

    fadeIns.forEach(fadeIn => {
        const fadeInTop = fadeIn.getBoundingClientRect().top + offset;
        const windowHeight = window.innerHeight;

        if (fadeInTop < windowHeight) {
            fadeIn.style.opacity = '1';
        }
    });
}

function isMobile() {
    const mobileSize = 768; // adjust this value as needed
    return window.innerWidth < mobileSize;
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('scroll', fadeInButtonsOnScroll);

function fadeInAuto() {
    const offset = 110; // adjust this value as needed

    const fadeIns = document.querySelectorAll('.fade-in-auto');

    fadeIns.forEach(fadeIn => {
        // const fadeInTop = fadeIn.getBoundingClientRect().top;
        const fadeInTop = fadeIn.getBoundingClientRect().top - offset;
        const windowHeight = window.innerHeight;

        if (fadeInTop < windowHeight) {
            fadeIn.style.opacity = '1';
        }
    });
}

setTimeout(fadeInAuto, 3500);
let slider = document.querySelector('.slider');
let slides = document.querySelector('.slides');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let slideWidth = slider.clientWidth;
let currentSlide = 0;

function goToSlide(slide) {
    slides.style.transform = `translateX(-${slide * slideWidth}px)`;
    currentSlide = slide;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.children.length - 1) {
        goToSlide(currentSlide + 1);
    }
});

window.addEventListener('resize', () => {
    slideWidth = slider.clientWidth;
    goToSlide(currentSlide);
});

goToSlide(currentSlide);

function goToSlide(slide) {
    slides.style.transform = `translateX(-${slide * slideWidth}px)`;
    currentSlide = slide;
}

function nextSlide() {
    if (currentSlide < slides.children.length - 1) {
        goToSlide(currentSlide + 1);
    } else {
        goToSlide(0);
    }
}

setInterval(nextSlide, 1500); // switch slides every 1.5 seconds

window.addEventListener('resize', () => {
    slideWidth = slider.clientWidth;
    goToSlide(currentSlide);
});

goToSlide(currentSlide);
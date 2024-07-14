let slideIndex = 0;
let slideInterval;
let isPlaying = true;

function showSlides(n = null) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (n !== null) {
        slideIndex = n;
    } else {
        slideIndex++;
    }

    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    if (isPlaying) {
        slideInterval = setTimeout(showSlides, 2000);
    }
}

function toggleSlider() {
    let button = document.getElementById("sliderControlButton");
    if (isPlaying) {
        clearTimeout(slideInterval);
        button.textContent = "Play";
    } else {
        showSlides();
        button.textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function addFullscreenEvent() {
    let slides = document.getElementsByClassName("scaled-image");
    for (let slide of slides) {
        slide.addEventListener('click', function () {
            if (isPlaying) {
                toggleSlider();
            }
            enterFullscreen(slide);
            slide.classList.add('fullscreen');
        });
    }
}

function currentSlide(n) {
    clearTimeout(slideInterval);
    showSlides(slideIndex = n);
    if (!isPlaying) {
        toggleSlider();
    }
}

document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement) {
        let slides = document.getElementsByClassName("scaled-image");
        for (let slide of slides) {
            slide.classList.remove('fullscreen');
        }
        if (!isPlaying) {
            toggleSlider();
        }
    }
});

showSlides();
addFullscreenEvent();

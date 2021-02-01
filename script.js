const slides = [];
const name = [];

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex=(slideIndex + 1)%slides.length;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

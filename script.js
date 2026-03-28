const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// menuIcon.onclick = () => {
//     navLinks.classList.toggle('active');
// }

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})


document.addEventListener('click', e => {
    if(!navLinks.contains(e.target) && e.target !== menuIcon) {
        navLinks.classList.remove('active')
    }
})

// Image Slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }
    slides[slideIndex-1].style.display = "block";
    
}

//Copy e-mail

function copyMail() {

    navigator.clipboard.writeText("gmail.com");

}




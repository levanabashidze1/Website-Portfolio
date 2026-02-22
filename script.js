const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// menuIcon.onclick = () => {
//     navLinks.classList.toggle('active');
// }

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

document.addEventListener('click', e => {
    if(!navLinks.contains(e.target) && e.target !== menuIcon) {
        navLinks.classList.remove('active')
    }
})


// Toggle Menu
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

if (nav) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        nav.classList.toggle('active');
    };
};
    
// Scroll to top
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = ( ) => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    // sticky header //
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove active class from nav links on scroll // 
    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');

};


// Scroll Reveal
ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ', { origin:'right'});
  
// Typed.js 
const typed = new Typed('.multipe-text', {
    strings: ['Front-End Developer', 'Software Developer', 'Game Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
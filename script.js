// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each nav link
navLinks.forEach(link => {
   link.addEventListener('click', event => {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Get the target element from the link's href attribute
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Scroll the target element into view with smooth behavior
      targetElement.scrollIntoView({ behavior: 'smooth' });
   });
});

// Get Hamburger element
const hamburger = document.querySelector('.header__hamburger')
const webMenu = document.querySelector('.header__webMenu')
const mobileMenu = document.querySelector('.header__mobileMenu')
const closeMenu = document.querySelector('.header__closeMobileMenu')
const mobileMenuItem = document.querySelectorAll('.header__mobileMenuItem')

hamburger.addEventListener('click', () => {
   mobileMenu.classList.add('is-active')
});

closeMenu.addEventListener('click', () => {
   mobileMenu.classList.remove('is-active')
});

// mobileMenuItem.forEach(item => {
//    item.addEventListener('click', () => {
//       mobileMenu.style.display = 'none';
//    })
// })

// window.addEventListener('resize', () => {
//    if (window.innerWidth >= 768) {
//       mobileMenu.style.display = 'none';
//    }
// });


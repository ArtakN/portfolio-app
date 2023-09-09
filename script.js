// smoot scroll
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
   link.addEventListener('click', event => {

      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({ behavior: 'smooth' });
   });
});

// Mobile menu
const hamburger = document.querySelector('.header__hamburger')
const mobileMenu = document.querySelector('.header__mobileMenu')
const closeMenu = document.querySelector('.header__closeMobileMenu')
const mobileMenuItem = document.querySelectorAll('.header__mobileMenuItem')

function openMobileMenu() {
   mobileMenu.classList.add('is-active')
}

function closeMobileMenu() {
   mobileMenu.classList.remove('is-active')
}

hamburger.addEventListener('click', openMobileMenu);

closeMenu.addEventListener('click', closeMobileMenu);

mobileMenuItem.forEach(item => {
   item.addEventListener('click', closeMobileMenu)
})
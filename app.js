console.log('yeye')

const mobileMenu = document.querySelector('.btn__menu')
const navContainer = document.querySelector('.nav__container')

mobileMenu.addEventListener('click', () => {
    if (navContainer.classList.contains('menu-open')) {
        navContainer.classList.remove('menu-open')
    } else {
        navContainer.classList += ' menu-open'
    }
})
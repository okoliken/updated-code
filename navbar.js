const hamburgerMenu = document.querySelector('.mobile-menu')
const menuitem = document.querySelector('.nav-menu')

// menuitem.style.maxHeight = '0px'


hamburgerMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (menuitem.style.display === 'none') {
        menuitem.style.display = 'block'
    }else {
        menuitem.style.display = 'none'
    }
}
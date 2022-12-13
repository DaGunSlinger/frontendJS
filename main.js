const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const iconCart = document.querySelector('.navbar-shopping-cart')
const productsInCart = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    if(!productsInCart.classList.contains('inactive')){
        productsInCart.classList.toggle('inactive')
    }
}

burguerMenu.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    if(!productsInCart.classList.contains('inactive')){
        productsInCart.classList.toggle('inactive')
    }
}

iconCart.addEventListener('click', toggleCart)
function toggleCart(){
    productsInCart.classList.toggle("inactive")
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive')
    }
    if(!desktopMenu.classList.toggle('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
}
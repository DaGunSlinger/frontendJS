//Variables para FuncionesOnClick
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const iconCart = document.querySelector('.navbar-shopping-cart')
const productsInCart = document.querySelector('.product-detail')

const productDetailContainer = document.querySelector('.product-individual-detail')
const xDetailContainer = document.querySelector('.product-individual-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    if(!productsInCart.classList.contains('inactive')){
        productsInCart.classList.toggle('inactive')
    }
    closeDetailItem()
}

burguerMenu.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    if(!productsInCart.classList.contains('inactive')){
        productsInCart.classList.toggle('inactive')
    }
    closeDetailItem()
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
    closeDetailItem()
}

function openDetailItem(){
    productDetailContainer.classList.remove('inactive')
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
    if(!productsInCart.classList.contains('inactive')){
        productsInCart.classList.toggle('inactive')
    }
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive')
    }
}

xDetailContainer.addEventListener('click', closeDetailItem)
function closeDetailItem(){
    productDetailContainer.classList.add('inactive')
}

//Variables para manipulación de listas
function renderProducts(){
    const cardsContainer = document.querySelector('.cards-container')
    
    const productList = [];
    productList.push({
         name: 'Bike',
         price: 120,
         image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
     })
     productList.push({
         name: 'Screen',
         price: 300,
         image: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/07/Samsung-M8-Smart-Monitor-1-scaled.jpg'
     })
     productList.push({
        name: 'Procesador AMD ryzen 5600g',
        price: 120,
        image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/18167827/2021-08-04-image-10.webp?1658118085'
    })
    productList.push({
        name: 'Licencia windows',
        price: 14,
        image: 'https://impactotic.co/wp-content/uploads/2021/12/windows-11-cover.jpg'
    })
    productList.push({
        name: 'Teclado mecánico',
        price: 90,
        image: 'https://i0.wp.com/myfimport.com/wp-content/uploads/2022/02/mecanico-2.jpg?fit=450%2C451&ssl=1'
    })
    productList.push({
        name: 'Caldo de costilla',
        price: 3,
        image: 'https://www.comedera.com/wp-content/uploads/2021/04/sopa-de-costilla_shutterstock_1858869487.jpg'
    })
    
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openDetailItem)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv,productInfoFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
        /*
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        </div>
        */
    }
}

renderProducts()

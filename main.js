const menuEmail = document.querySelector('.navbar-email')
const menuIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')



menuEmail.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleProductDetail)

productDetailCloseIcon.addEventListener('click',closeProductDetail)

function toggleDesktopMenu() {
   /* const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    } */
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}
function toggleMobileMenu() {
   /* const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    } */
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}
function toggleProductDetail() {
   /* const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }  */  
    shoppingCartContainer.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')

}

function openProductDetail(){
    productDetailContainer.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
  
}
function closeProductDetail(){
    productDetailContainer.classList.add('inactive')

}
const productList= [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Car',
    price: 35000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price
        
        const productName = document.createElement('p');
        productName.innerText= product.name
     
        productInfoDiv.append(productPrice,productName);
     
        const productInfoFigure = document.createElement('figure');
     
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productFigureImg);
     
        productInfo.append(productInfoDiv,productInfoFigure)
     
        productCard.append(productImg,productInfo)
        
        cardsContainer.appendChild(productCard)
     }
}

renderProducts(productList);
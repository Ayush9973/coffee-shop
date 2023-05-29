document.addEventListener('DOMContentLoaded', function() {
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
        serch.classList.remove('active');
    cart.classList.remove ('active');
}
let cart = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    serch.classList.remove('active');
    
}
let serch= document.querySelector('.search-from');
document.querySelector('#Search-btn').onclick = () => {
    serch.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove ('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    serch.classList.remove('active');
    cart.classList.remove ('active');
}
});

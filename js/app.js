const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');

menuOpen.addEventListener('click', ()=> {
    menu.style.transform = 'translateX(0)';
    menu.style.boxShadow = '0rem 0px 7rem 0px #212121';
});
menuClose.addEventListener('click', ()=> {
    menu.style.transform = 'translateX(100%)';
    menu.style.boxShadow = 'unset';
})
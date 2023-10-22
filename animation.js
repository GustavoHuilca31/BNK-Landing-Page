/*=============== SHOW MENU ===============*/

const navbartoggle=document.querySelector('.navbar-toggle');
const navmenu=document.querySelector('.nav-menu');

const navbartoggleFunc= function() {
    navbartoggle.classList.toggle('active');
    navmenu.classList.toggle('active');
}

navbartoggle.addEventListener('click',navbartoggleFunc)

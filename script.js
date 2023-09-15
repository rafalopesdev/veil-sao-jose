const btn = document.querySelector('.btnTop');

btn.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

document.addEventListener('scroll', ocultar);

function ocultar() {
  if (window.scrollY > 10) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
}
ocultar();

const iconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile');

function openMenu() {
  menuMobile.classList.toggle('ativo');
}

iconMenu.addEventListener('click', openMenu);

(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active');
    }
  }
}());

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const menuCloseItem = document.querySelector('.header__nav__close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__menu__active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__menu__active');
  });
}());
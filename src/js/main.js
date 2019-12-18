/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keypress', (event) =>{
    console.log(event.code)
  });

  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
      console.log('Esc pressed')
      switchModal();
    }
  }); 

// All good up here

  modal.addEventListener('mouseup', function(event) {
    var menu = document.querySelector('.modal__dialog');
    var menu2 = document.querySelector('.modal__form');
    var menu3 = document.querySelector('.modal__policy')
    if((event.target != menu && event.target.parentNode != menu) && (event.target != menu2 && event.target.parentNode != menu2) && (event.target != menu3 && event.target.parentNode != menu3)) {
      switchModal();
    }
  });
 
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal'),
      closeBtn = $('.modal__close');
  /* console.log(modal);
  console.log(modalBtn);
  console.log(closeBtn); */

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var top_show = 200; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('#top').fadeIn();
    else $('#top').fadeOut();
  });
  $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });


});
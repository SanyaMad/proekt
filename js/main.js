$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');
    
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

 

$(document).on('keydown', function(e) {
    if (e.keyCode == 27)
    modal.removeClass('modal--visible')
});
var modalDialog = $('.modal__dialog')

    $(document).mouseup( function(e) {
        if(!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0 ) {
            modal.removeClass('modal--visible')
        };
    }); 
    
    new WOW().init();

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
          messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длинее пятнадцати букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "обязательно укажите email",
              email: "Введите в формате name@domain.com"
            }
          }
    });

    $('[type=tel]').mask('+7(000) 000 00-00'), {placeholder: "+7 (___)-___-__-__"};

});


    





  









/*
document.addEventListener('click', (e) => {
    if (e.target.classList === modal.classList) {
        modal.classList.toggle('modal--visible');
    };
});

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') {
        if (modal.classList.contains('modal--visible')) {
            modal.classList.toggle('modal--visible');
        };
    }}); */


/*
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const CloseBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }

    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal)
    });

    CloseBtn.addEventListener('click', switchModal)
});
*/


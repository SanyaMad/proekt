$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');
    
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    })

$(document).on('keydown', function(e) {
    if (e.keyCode == 27)
    modal.removeClass('modal--visible')
});

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


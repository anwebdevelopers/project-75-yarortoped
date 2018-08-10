document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    /*******************************************************/
    //MENU MOBILE
    /*******************************************************/
    const menu = document.querySelector('.header__menu'),
        buttonMenuMobile = document.querySelector('.header__menu-button');
        
    buttonMenuMobile.addEventListener('click', function(e) {
        e.stopPropagation();
        if (buttonMenuMobile.classList.contains('active')) {
            buttonMenuMobile.classList.remove('active');
            menu.style.display = '';
        } else {
            buttonMenuMobile.classList.add('active');
            menu.style.display = 'block';
        }
    });

    window.addEventListener('resize', function() {
        buttonMenuMobile.classList.remove('active');
        menu.style.display = '';
    });
});

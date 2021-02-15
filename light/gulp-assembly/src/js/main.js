import './_vars';
import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed
window.onload = function() {
    let save = document.querySelector('.btn-save');
    let notify = document.querySelector('.access__notify');
    let close = document.querySelector('.notify__close');
    let burger = document.querySelector('.header__burger');
    let navClose = document.querySelector('.nav__close');
    let nav = document.querySelector('.nav');

    save.addEventListener('click', (e) => {
        e.preventDefault();
        notify.classList.add('access__notify--visible');
    });

    close.addEventListener('click', () => {
        notify.classList.remove('access__notify--visible');
    });

    burger.addEventListener('click', () => {
        nav.classList.add('nav--visible');
    });

    navClose.addEventListener('click', () => {
        nav.classList.remove('nav--visible');
    });
}
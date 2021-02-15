import './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';
import '../../node_modules/lightgallery.js/lib/js/lightgallery';
import '../../node_modules/lg-video.js/dist/lg-video';


window.onload = function() {
  let burger = document.querySelector('.header__burger');
  let navClose = document.querySelector('.nav__close');
  let nav = document.querySelector('.menu');

  burger.addEventListener('click', () => {
      nav.classList.add('nav--visible');
  });

  navClose.addEventListener('click', () => {
      nav.classList.remove('nav--visible');
  });

  lightGallery(document.getElementById('lightgallery'));
  lightGallery(document.getElementById('video-gallery'));
}

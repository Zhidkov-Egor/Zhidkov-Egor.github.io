// Плавный скролл
$(".scroll").on("click", "a", function (event) {
    event.preventDefault();
    var anchorId = $(this).attr("href");
    scrollingDistance = $(anchorId).offset().top - $(".scroll").height();
    $("html, body").animate({
      scrollTop: scrollingDistance
    }, 1100);
  });

// Бургер Меню
(function () {
  $('.menu-wrapper').on('click', function () {
    $('.menu__box').toggleClass('animationMenu');
    $('.hamburger-menu').toggleClass('animate');
    $('body').toggleClass('noScroll');
  });
  $('.menu__item a').on('click', function () {
    $('.menu__box').removeClass('animationMenu');
    $('.hamburger-menu').removeClass('animate');
    $('body').toggleClass('noScroll');
  });
})();
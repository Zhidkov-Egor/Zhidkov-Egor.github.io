//открытие и закрытие меню
$(document).ready(function () {
  (function () {
    $(".menu-wrapper").on("click", function () {
      $(".menu").toggleClass("animationMenu");
      $(".hamburger-menu").toggleClass("animate");
      $("body, html").toggleClass("noScroll");
    });
    $(".menu__item a").on("click", function () {
      $(".menu").removeClass("animationMenu");
      $(".hamburger-menu").removeClass("animate");
      $("body, html").toggleClass("noScroll");
    });
  })();
});
// Движение текста (Управляющие партнёры RDG Lex)
$(document).ready(function () {
  var w_height = $(this).height();
  var slide_width = $(".managers__scrollLeft").width();
  var slide_left = slide_width / w_height;
  var slide_width_r = $(".managers__scrollRight").width();
  var slide_right_r = slide_width_r / w_height;
  $(window).scroll(function (e) {
    var f_left = slide_left * $(this).scrollTop() * -8;
    $(".managers__scrollLeft").css({
      left: f_left,
    });
    var f_right = 10000 + slide_right_r * $(this).scrollTop() * -2;
    $(".managers__scrollRight").css({
      right: f_right,
    });
  });
});
// Маска для телефона
window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ?
        val.charAt(i++) :
        i >= val.length ?
        "" :
        a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }
  var input = document.querySelector("#phone");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
});

// Slick slider (новости)
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4,
    infinite: true,
    speed: 300,
    // centerMode: true,
    // variableWidth: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/slider-left.png" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/slider-right.png" alt="">',
    responsive: [{
        breakpoint: 1766,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1357,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 956,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});

// Slick slider (управляющие)
$(document).ready(function () {
  $(".slider__managers").slick({
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    // centerMode: true,
    // variableWidth: true,
    prevArrow: '<img class="slider-arrows-manager slider-arrows-manager__left" src="img/manager-slider-arrow-left.png" alt="">',
    nextArrow: '<img class="slider-arrows-manager slider-arrows-manager__right" src="img/manager-slider-arrow-right.png" alt="">',
    // responsive: [{
    //   breakpoint: 1766,
    //   settings: {
    //     slidesToShow: 1,
    //   },
    // }, ],
  });
});

//Отправка и проверка формы
let valideteForms = function (selector, rules, messages, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: messages,
    submitHandler: function (form) {
      $(function () {
        "use strict";
        $(".progress").addClass("progressvis");
        $.ajax({
          url: "send.php",
          type: "POST",
          contentType: false,
          processData: false,
          data: new FormData(form),
          success: function (msg) {
            console.log(msg);
            if (msg == "ok") {
              // alert("Сообщение отправлено. В ближайшее время с вами свяжутся.");
              $(".thanks").addClass("thanks-ok");
              $(".progress").removeClass("progressvis");
              $(".fileDown").remove();
              $("#form").trigger("reset");
            } else {
              alert("Error");
            }
          },
        });
      });
    },
  });
};
valideteForms(
  ".form", {
    email: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
    },
    name: {
      required: true,
      minLength: 3,
    },
  }, {
    name: {
      required: "Данное поле обязательно для заполнения",
      minLength: "Поле должно содержать не менее 3 символов",
    },
    tel: {
      required: "Данное поле обязательно для заполнения",
    },
    email: {
      required: "Данное поле обязательно для заполнения",
      email: "Пожалуйста, введите правильный адрес электронной почты",
    },
  }
);

//Плавный скролл к якорю
$(".menu__item, .services__btn").on("click", "a", function (event) {
  event.preventDefault();
  var anchorId = $(this).attr("href");
  scrollingDistance = $(anchorId).offset().top - $(".menu__item").height();
  $("html, body").animate({
      scrollTop: scrollingDistance,
    },
    1100
  );
});

$(".first-screen__contact, .arrowUp__link").on("click", function (event) {
  event.preventDefault();
  var anchorId = $(this).attr("href");
  scrollingDistance = $(anchorId).offset().top - $(".menu__item").height();
  $("html, body").animate({
      scrollTop: scrollingDistance,
    },
    1100
  );
});
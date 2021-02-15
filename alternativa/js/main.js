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
// Slick slider
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/slide-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/slide-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 981,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
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
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }
  var input = document.querySelector("#user-phone");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
});

// Проверка полей в форме и отправка
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
          error: function (data) {
            console.log("Error", data);
          },
        });
      });
    },
  });
};

valideteForms(
  ".form",
  {
    tel: {
      required: true,
    },
    name: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: {
      required: "Данное поле обязательно для заполнения",
      minLength: "Поле должно содержать не менее 5 символов",
    },
    tel: {
      required: "Данное поле обязательно для заполнения",
    },
  }
);

// Плавный скрол к якорю
$(".menu__item").on("click", "a", function (event) {
  event.preventDefault();
  var anchorId = $(this).attr("href");
  scrollingDistance = $(anchorId).offset().top - $(".menu__item").height();
  $("html, body").animate(
    {
      scrollTop: scrollingDistance,
    },
    1100
  );
});

$(".card__order").on("click", function (event) {
  event.preventDefault();
  var anchorId = $(this).attr("href");
  scrollingDistance = $(anchorId).offset().top - $(".card__order").height();
  $("html, body").animate(
    {
      scrollTop: scrollingDistance,
    },
    1100
  );
});

window.addEventListener("DOMContentLoaded", function () {
  var o = 1,
    i = document.querySelectorAll(".slider-item"),
    t = document.querySelector(".prev"),
    e = document.querySelector(".next"),
    n = document.querySelector(".slider-dots"),
    r = document.querySelectorAll(".dot");

  function a(t) {
    t > i.length && (o = 1), t < 1 && (o = i.length);
    for (var e = 0; e < i.length; e++) i[e].style.display = "none";
    for (var n = 0; n < r.length; n++) r[n].classList.remove("dot-active");
    i[o - 1].style.display = "block", r[o - 1].classList.add("dot-active")
  }

  function l(t) {
    a(o += t)
  }
  a(o), t.addEventListener("click", function () {
    l(-1)
  }), e.addEventListener("click", function () {
    l(1)
  }), n.addEventListener("click", function (t) {
    for (var e = 0; e < r.length + 1; e++) t.target.classList.contains("dot") && t.target == r[e - 1] && a(o = e)
  });

  function s() {
    document.querySelector(".next").click()
  }
  var c = setInterval(s, 1e4);
  $(".slider-item").hover(function () {
    clearInterval(c)
  }, function () {
    c = setInterval(s, 1e4)
  })
}), $(".img-container").each(function () {
  $(this).swipe({
    swipeLeft: function () {
      $(this).parent().find(".next").click()
    },
    swipeRight: function () {
      $(this).parent().find(".prev").click()
    }
  })
}), window.onload = function () {
  for (links = document.getElementsByTagName("a"), i = 0; i < links.length; i++) link = links[i], link.getAttribute("href") && "external" == link.getAttribute("rel") && (link.target = "_blank")
}, $(".scroll").on("click", "a", function (t) {
  t.preventDefault();
  var e = $(this).attr("href");
  scrollingDistance = $(e).offset().top - $(".scroll").height(), $("html, body").animate({
    scrollTop: scrollingDistance
  }, 1100)
}), $(".arowUpLink").on("click", function (t) {
  t.preventDefault();
  var e = $(this).attr("href");
  scrollingDistance = $(e).offset().top - $(".arowUpLink").height(), $("html, body").animate({
    scrollTop: scrollingDistance
  }, 1100)
});
var t = new ScrollMagic.Controller,
  e = new TimelineMax;
e.fromTo([".catalogAll"], .5, {
  xPercent: 0
}, {
  xPercent: -410,
  ease: Linear.easeNone
}, "+=0"), new ScrollMagic.Scene({
  triggerElement: ".catalogAllCategory",
  triggerHook: .1,
  duration: "100%"
}).setPin(".catalogAllCategory").setTween(e).addTo(t), $("#ajax-contact-form").trigger("reset"), $(function () {
  "use strict";
  $("#ajax-contact-form").on("submit", function (t) {
    $(".progress").addClass("progressvis"), t.preventDefault(), $.ajax({
      url: "send.php",
      type: "POST",
      contentType: !1,
      processData: !1,
      data: new FormData(this),
      success: function (t) {
        console.log(t), "ok" == t ? (alert("Ваша заявка отправлена, спасибо!"), $(".progress").removeClass("progressvis"), $(".fileDown").remove(), $("#ajax-contact-form").trigger("reset")) : alert("Ошибка")
      }
    })
  })
}), $("#file").on("change", function () {
  var t = this.files,
    e = this.parentNode,
    n = document.createElement("ul"),
    o = "";
  e.querySelector(".list-files") && e.querySelector(".list-files").remove(), n.className = "list-files";
  for (var i = 0; i < t.length; i++) o = '<li class="fileDown">Кол-во прикрепленных файлов: ' + t.length + "</li>";
  n.innerHTML = o, e.appendChild(n)
}), $(function () {
  document.getElementById("mailSubscribe").addEventListener("submit", function (t) {
    var e = new XMLHttpRequest,
      n = this,
      o = $(this);
    t.preventDefault(), e.open("POST", "mail.php", !0), e.onreadystatechange = function () {
      4 == e.readyState && 200 == e.status && (alert(e.responseText), 0 == e.responseText.indexOf(n.emailTwo.value) && o.trigger("reset"))
    }, e.onerror = function () {
      alert("Ошибка, попробуйте еще раз")
    }, e.send(new FormData(n))
  }, !1)
}), window.addEventListener("DOMContentLoaded", function () {
  function t(t) {
    var e = "+7 (___) ___-__-__",
      n = 0,
      o = e.replace(/\D/g, ""),
      i = this.value.replace(/\D/g, "");
    o.length >= i.length && (i = o), this.value = e.replace(/./g, function (t) {
      return /[_\d]/.test(t) && n < i.length ? i.charAt(n++) : n >= i.length ? "" : t
    }), "blur" == t.type ? 2 == this.value.length && (this.value = "") : function (t, e) {
      if (e.focus(), e.setSelectionRange) e.setSelectionRange(t, t);
      else if (e.createTextRange) {
        var n = e.createTextRange();
        n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
      }
    }(this.value.length, this)
  }
  var e = document.querySelector("#phone");
  e.addEventListener("input", t, !1), e.addEventListener("focus", t, !1), e.addEventListener("blur", t, !1)
}), $(".pointSpb").hover(function () {
  $(".pointSpbText").attr("id", "pointTextVis")
}, function () {
  $(".pointSpbText").removeAttr("id", "pointTextVis")
}),
$(".pointPetrozav").hover(function () {
  $(".pointPetrozavText").attr("id", "pointTextVis")
}, function () {
  $(".pointPetrozavText").removeAttr("id", "pointTextVis")
}), $(".pointVelNovgorod").hover(function () {
  $(".pointVelNovgorodText").attr("id", "pointTextVis")
}, function () {
  $(".pointVelNovgorodText").removeAttr("id", "pointTextVis")
}), $(".pointCherepovec").hover(function () {
  $(".pointCherepovecText").attr("id", "pointTextVis")
}, function () {
  $(".pointCherepovecText").removeAttr("id", "pointTextVis")
}), $(".pointTver").hover(function () {
  $(".pointTverText").attr("id", "pointTextVis")
}, function () {
  $(".pointTverText").removeAttr("id", "pointTextVis")
}), $(".pointPskov").hover(function () {
  $(".pointPskovText").attr("id", "pointTextVis")
}, function () {
  $(".pointPskovText").removeAttr("id", "pointTextVis")
}), $(".pointBryansk").hover(function () {
  $(".pointBryanskText").attr("id", "pointTextVis")
}, function () {
  $(".pointBryanskText").removeAttr("id", "pointTextVis")
}), $(".pointVologda").hover(function () {
  $(".pointVologdaText").attr("id", "pointTextVis")
}, function () {
  $(".pointVologdaText").removeAttr("id", "pointTextVis")
}), $(".pointSiktivkar").hover(function () {
  $(".pointSiktivkarText").attr("id", "pointTextVis")
}, function () {
  $(".pointSiktivkarText").removeAttr("id", "pointTextVis")
}), $(".pointArhangelsk").hover(function () {
  $(".pointArhangelskText").attr("id", "pointTextVis")
}, function () {
  $(".pointArhangelskText").removeAttr("id", "pointTextVis")
}), $(".pointMurmansk").hover(function () {
  $(".pointMurmanskText").attr("id", "pointTextVis")
}, function () {
  $(".pointMurmanskText").removeAttr("id", "pointTextVis")
}), $(".pointBlagovehensk").hover(function () {
  $(".pointBlagovehenskText").attr("id", "pointTextVis")
}, function () {
  $(".pointBlagovehenskText").removeAttr("id", "pointTextVis")
}), $(".menu-wrapper").on("click", function () {
  $(".menu__box").toggleClass("animationMenu"), $(".hamburger-menu").toggleClass("animate"), $("body").toggleClass("noScroll")
}), $(".menu__item a").on("click", function () {
  $(".menu__box").removeClass("animationMenu"), $(".hamburger-menu").removeClass("animate"), $("body").toggleClass("noScroll")
}), $(".catalogAll").on("click", function () {
  window.location.href = $(this).attr("url")
});

$(function () {
  new LazyLoad({ elements_selector: ".lazy" }).update();
  var e = document.getElementById("random-counter");
  setInterval(function () {
    var t = Math.round(24 * Math.random() + 9861);
    e.innerHTML = t;
  }, 3e3),
    $(".pre_toform").click(function () {
      return (
        $("html, body").animate(
          { scrollTop: $("#reg-form").offset().top - 300 },
          1e3
        ),
        !1
      );
    }),
    $(".only_number").on("keydown", function (e) {
      46 == e.keyCode ||
        8 == e.keyCode ||
        9 == e.keyCode ||
        27 == e.keyCode ||
        187 == e.keyCode ||
        (65 == e.keyCode && !0 === e.ctrlKey) ||
        (e.keyCode >= 35 && e.keyCode <= 39) ||
        ((e.keyCode < 48 || e.keyCode > 57) &&
          (e.keyCode < 96 || e.keyCode > 105) &&
          e.preventDefault());
    });
  var t = $(".form-step-item"),
    o = null,
    n = slv({
      fieldsWrapper: t,
      hintsFrom: $("#errors li"),
      errorContainerSelector: ".error-message",
      form: $(".form-step-wrapper"),
      afterValidation: function (e) {
        t.eq(e - 1).removeClass("active"),
          $("body").attr("data-current-step", e + 1),
          t.eq(e).addClass("active");
      },
      data: {
        ccode: window.ccode,
      },
      whenDone: function (e) {
        dataLayer && dataLayer.push({ event: "registration" }),
          "undefined" != typeof move_next &&
            move_next(o, { key: e.key, login: e.login }, !0);
      },
      onGoTo: function (e) {
        t.removeClass("active"),
          $("body").attr("data-current-step", e + 1),
          t.eq(e).addClass("active");
      },
    });
  n.init(),
    $(".lt_button_next").on("click", function (e) {
      e.preventDefault(), (o = e), n.check();
    }),
    $(".pagination-item").on("click", function (e) {
      e.preventDefault(), n.goTo($(this).index());
    });
  var a = "is-active",
    i = ".form-select",
    s = ".select-value",
    r = ".select-dropdown",
    c = "select-item";
  function l(e) {
    $(e).closest(".form-item").addClass("is-focused");
  }
  var d = "";
  $(i)
    .find("select")
    .each(function () {
      $(this)
        .find("option")
        .each(function () {
          $(this).is("[selected]") &&
            ($(this).closest(i).find(s).html($(this).html()), l(this)),
            (d +=
              '<div class="' +
              c +
              '" value="' +
              $(this).val() +
              '">' +
              $(this).html() +
              "</div>");
        })
        .closest(i)
        .find(r)
        .append($(d));
    }),
 
    $(document).on("click", i, function (e) {
      var t = $(this),
        o = $(e.target).closest("." + c);
      if (o.length)
        return (
          t.removeClass(a),
          l(this),
          t.find(s).html(o.html()),
          void t.find("select").val(o.attr("value")).change()
        );
      t.toggleClass(a);
    }),
    $(document).on("click", function (e) {
      var t = $(e.target),
        o = $(i);
      t.closest(i).length
        ? o.not(t.closest(i)).removeClass(a)
        : o.removeClass(a);
    });
});

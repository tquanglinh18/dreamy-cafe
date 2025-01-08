$(function () {
  AOS.init();
  const $mobileHeader = $('#mobileHeader');

  $('#menu-toggle').on('click', function () {
    $mobileHeader.toggleClass('show');
  });


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#btn-show-more").click(() => {
    $(".pined-quick-action").toggleClass("show-quick-action");
  })

  const lstOptionAccount = $("#input-gift-code .dropdown-item")
  for (let i = 0; i < lstOptionAccount.length; i++) {
    const idElmSel = '#account-'.concat(i + 1)
    $(idElmSel).click(() => {
      console.log(idElmSel)
      $("#sel-account-type").text($(idElmSel).text())
      $("#input-gift-code .dropdown-menu").removeClass("show");
    })
  }

  const lstServices = $("#lst-payment-method .dropdown-item")
  for (let i = 0; i < lstServices.length; i++) {
    const idServieceSel = "#".concat($(lstServices[i]).attr("id"))

    $(idServieceSel).click(() => {
      $("#lst-payment-method #sel-services").text($(idServieceSel).text())
      $("#lst-payment-method #sel-services ~ .dropdown-menu").removeClass("show");
    })
  }

  const lstPearlElm = $("#sel-pearl .dropdown-item")
  for (let i = 0; i < lstPearlElm.length; i++) {
    const idPearlSel = "#".concat($(lstServices[i]).attr("id"))
    const idPearlSelCount = idPearlSel.concat(" .number-of-pearls--name")
    console.log(idPearlSel)
    $(idPearlSel).click(() => {
      $("#sel-pearl #sel-coin .number-of-pearls--name").text($(idPearlSelCount).text())
      $("#sel-pearl #sel-coin ~ .dropdown-menu").removeClass("show");
    })
  }

});





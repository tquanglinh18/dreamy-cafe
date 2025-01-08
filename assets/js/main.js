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

  // const lstOptionAccount = $("#server-1")
  // lstOptionAccount.click(() => {
  //   console.log(lstOptionAccount.text());
  //   $("#sel-account").text(lstOptionAccount.text())
  //   $(".dropdown-menu").removeClass("show");
  // })

});





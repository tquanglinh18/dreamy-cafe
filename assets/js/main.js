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

  autoPlaySlide();

  function autoPlaySlide() {
    const lstSlide = document.querySelectorAll('.noithat-item');
    console.log(typeof lstSlide);

    const slideCurrentElm = document.querySelector('.noithat-item.noithat-item--active');
    console.log(slideCurrentElm);

    const idxCurrentSlide = lstSlide.index(slideCurrentElm);
    console.log(idxCurrentSlide);
  }
});





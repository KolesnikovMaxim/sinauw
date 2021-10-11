$(function () {
  // slider
  var rev = $('.webinar__items');
  rev.on('init', function (event, slick, currentSlide) {
    var
      cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
      cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
      prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
  });

  rev.slick({
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function (slider, i) {
      return '';
    },
    /*infinite: false,*/
  });
  videojs(document.querySelector('.video-js'));

  //languge
  $('.header__button').on('click', function () {
    $('.header__languages').toggleClass('header__languages--active')
  });

})
 
//burger menu
$('.burger__items').on('click', () => {
  $('.burger__items').toggleClass('burger__items--active');
  $('.menu').toggleClass('menu--open');
  $('.menu__list').toggleClass('menu__list--show');
});
for (let a = 1; a <= $(".menu__item").length; a++) {
  $(".menu__list:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}
//close menu burger
$('.menu a').on("click", function () {
  $('.menu').removeClass('menu--open');
});

$('.menu a').on("click", function () {
  $('.menu__list').removeClass('menu__list--show');
});

//skroll animate
$("#menu, .footer, .header").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});

 





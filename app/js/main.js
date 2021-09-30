$(function () {

  // slider
  var rev = $('.webinar__inner');
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

})

//languge
$('.header__button').on('click', function () {
  $('.header__languages').toggleClass('header__languages--active')
});

//input type=rang
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

$(".webinar__video-item").click(function () {
  $(".webinar__play").toggle();
});



//video player
const video = document.querySelector('.webinar__video-item'),
  playBtn = document.querySelector('.webinar__play'),
  playBtnImg = document.querySelector('.webinar__play-icon'),
  progress = document.querySelector('.webinar__progress-bar'),
  time = document.querySelector('.webinar__min')


function toggleVideoStatus() {

  //Play and pause
  if (video.paused) {
    video.play()
    playBtnImg.src = '../images/svg/pause.svg'
    video = 'visible';
  } else {
    video.pause()
    playBtnImg.src = '../images/svg/play.svg'
    video = 'visible';
  }
}
playBtn.addEventListener('click', toggleVideoStatus)
video.addEventListener('click', toggleVideoStatus)

//Time
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100

  //Minutes
  let minutes = Math.floor(video.currentTime / 60)
  if (minutes < 10) {
    minutes = '0' + String(minutes)
  }

  //Seconds
  let seconds = Math.floor(video.currentTime % 60)
  if (seconds < 10) {
    seconds = '0' + String(seconds)
  }

  time.innerHTML = `${minutes}:${seconds}`
}
video.addEventListener('timeupdate', updateProgress)

//set progress
function setProgress() {
  video.currentTime = (progress.value * video.duration) / 100
}
progress.addEventListener('change', setProgress);

// Opacity webinar__controls
var linc2 = $('.webinar__controls'),
  timeoutId;
$('.webinar__item').hover(function () {
  clearTimeout(timeoutId);
  linc2.show();
}, function () {
  timeoutId = setTimeout($.proxy(linc2, 'hide'), 500)
});
linc2.mouseenter(function () {
  clearTimeout(timeoutId);
}).mouseleave(function () {
  linc2.hide();
});

var xSeconds = 4000;
var timeOut = 0;
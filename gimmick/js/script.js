$('body').on('click', '.sender', scrollSmoothly);
$('body').on('click', '#send-me-to-polish', changeLanguageToPolish);
$('body').on('click', '#send-me-to-english', changeLanguageToEnglish);
$('body').on('click', '.right-arrow', slideRight);
$('body').on('click', '.left-arrow', slideLeft);
$('body').on('click', '#PSD', openModal);
$('body').on('click', '#close', closeModal);
$('body').on('mouseenter', '#picto', mouseOverPicto);
$('body').on('mouseenter', '#sonora', mouseOverSonora);
$('body').on('mouseenter', '#uflowers', mouseOverUflowers);
function unbindEventsBeforeAjaxGet () {
  $('body').off( 'click', '#send-me-to-polish', changeLanguageToPolish);
  $('body').off( 'click', '#send-me-to-english', changeLanguageToEnglish);
  $('body').off('click', '.sender', scrollSmoothly);
  $('body').off('click', '.right-arrow', slideRight);
  $('body').off('click', '.left-arrow', slideLeft);
  $('body').off('click', '#PSD', openModal);
  $('body').off('click', '#close', closeModal);
  $('body').off('mouseenter', '#picto', mouseOverPicto);
  $('body').off('mouseenter', '#sonora', mouseOverSonora);
  $('body').off('mouseenter', '#uflowers', mouseOverUflowers);
}
function changeLanguageToPolish () {
  $.get( 'pl.html', function( data ) {
    unbindEventsBeforeAjaxGet();
    $('body').html(data);
  });
}
function changeLanguageToEnglish () {
  $.get( 'en.html', function( data ) {
    unbindEventsBeforeAjaxGet();
    $('body').html(data);
  });
}
function scrollSmoothly () {
  $('html, body').animate({
    scrollTop: $( ('#')+this.id.slice(11, this.id.length) ).offset().top
  }, 500);
  return false;
}
function eventFire (el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
var moveBgImgBy = 0,
  sliderCount = 1;
function slideRight () {
  moveBgImgBy = moveBgImgBy - 180;
  $('.slider__img-container').css('background-position', moveBgImgBy + 'px');
  if (sliderCount === 1) {
    sliderCount = 2;
    $('.page-name').text('Picto');
    $('#slider-square-1').removeClass('slider__state-square--active');
    $('#slider-square-2').addClass('slider__state-square--active');
    $('#show-page').attr('href', 'https://bartekkwapisz.github.io/picto/index.html');
    $('#download-psd').attr('href', 'https://bartekkwapisz.github.io/picto/picto.psd');
  }
  else if (sliderCount === 2) {
    sliderCount = 3;
    $('.page-name').text('Sonora');
    $('#slider-square-2').removeClass('slider__state-square--active');
    $('#slider-square-3').addClass('slider__state-square--active');
    $('#show-page').attr('href', 'https://bartekkwapisz.github.io/sonora/index.html');
    $('#download-psd').attr('href', 'https://bartekkwapisz.github.io/sonora/Sonor-home1.psd');
  }
  else if (sliderCount === 3) {
    sliderCount = 1;
    $('.page-name').text('U.Flowers');
    $('#slider-square-3').removeClass('slider__state-square--active');
    $('#slider-square-1').addClass('slider__state-square--active');
    $('#show-page').attr('href', 'https://bartekkwapisz.github.io/utopic-flowers/index.html');
    $('#download-psd').attr('href', 'https://bartekkwapisz.github.io/utopic-flowers/utopic-flowers.psd');
  }
}
function slideLeft () {
  moveBgImgBy = moveBgImgBy + 180;
  $('.slider__img-container').css('background-position', moveBgImgBy + 'px');
  if (sliderCount === 1) {
    sliderCount = 3;
    $('.page-name').text('Sonora');
    $('#slider-square-1').removeClass('slider__state-square--active');
    $('#slider-square-3').addClass('slider__state-square--active');
    $('#show-page').attr('href', 'https://bartekkwapisz.github.io/sonora/index.html');
    $('#download-psd').attr('href', 'https://bartekkwapisz.github.io/sonora/Sonor-home1.psd');
  }
  else if (sliderCount === 2) {
    sliderCount = 1;
    $('.page-name').text('U.Flowers');
    $('#slider-square-2').removeClass('slider__state-square--active');
    $('#slider-square-1').addClass('slider__state-square--active');
    $('#show-page').attr('href', 'https://bartekkwapisz.github.io/utopic-flowers/index.html');
    $('#download-psd').attr('href', 'https://bartekkwapisz.github.io/utopic-flowers/utopic-flowers.psd');
  }
  else if (sliderCount === 3) {
    sliderCount = 2;
    $('.page-name').text('Picto');
    $('#slider-square-3').removeClass('slider__state-square--active');
    $('#slider-square-2').addClass('slider__state-square--active');
    $('#show-page').attr('href', 'https://bartekkwapisz.github.io/picto/index.html');
    $('#download-psd').attr('href', 'https://bartekkwapisz.github.io/picto/picto.psd');
  }
}
function openModal () {
  $('#modal').removeClass('no-display');
  $('#shadow').removeClass('no-display');
  setTimeout(function () {
    $('#modal').removeClass('hidden');
    $('#shadow').removeClass('hidden');
  }, 20);
  activateSliderSwipeOnTouch();
}
function closeModal () {
  $('#modal').addClass('hidden');
  $('#shadow').addClass('hidden');
  setTimeout(function () {
    $('#modal').addClass('no-display');
    $('#shadow').addClass('no-display');
  }, 400);
  deactivateSliderSwipeOnTouch ();
}
function activateSliderSwipeOnTouch (){
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
}
function deactivateSliderSwipeOnTouch (){
  document.removeEventListener('touchstart', handleTouchStart, false);
  document.removeEventListener('touchmove', handleTouchMove, false);
}
var xDown = null;
var yDown = null;
function handleTouchStart (evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}
function handleTouchMove (evt) {
  var sliderLeftArrow = document.querySelector('.left-arrow'),
    sliderRightArrow = document.querySelector('.right-arrow');

  if ( ! xDown || ! yDown ) {
    return;
  }
  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
    if ( xDiff > 0 ) {
        /* left swipe */
      eventFire(sliderRightArrow, 'click');
    } else {
        /* right swipe */
      eventFire(sliderLeftArrow, 'click');
    }
  }
    // else {
    //     if ( yDiff > 0 ) {
    //         /* up swipe */
    //     } else {
    //         /* down swipe */
    //     }
    // }
    /* reset values */
  xDown = null;
  yDown = null;
}

function mouseOverPicto () {
  downloadWithD('picto');
}
function mouseOverSonora () {
  downloadWithD('sonora');
}
function mouseOverUflowers () {
  downloadWithD('uflowers');
}
function downloadWithD (mouseIsOver) {
  document.addEventListener('keyup', function (ev) {
    if(ev.keyCode === 68) {
      if(mouseIsOver === 'uflowers') window.location = 'https://bartekkwapisz.github.io/utopic-flowers/utopic-flowers.psd';
      else if(mouseIsOver === 'picto') window.location = 'https://bartekkwapisz.github.io/picto/picto.psd';
      else if(mouseIsOver === 'sonora') window.location = 'https://bartekkwapisz.github.io/sonora/Sonor-home1.psd';
    }
  }, false);
}

window.onload = function () {
  $('html,body').scrollTop(0);
};

var typing = document.querySelector('.typing'),
  currentIndex = 0,
  breakPoint1 = 3,
  breakPoint2 = 14,
  breakPoint3 = 26,
  breakPoint4 = 36,
  textToType = "Hi! I'm Bartek and this is my online resume.";

if ( typing.id === 'polish-greetings' ) {
  breakPoint1 = 6;
  breakPoint2 = 13;
  breakPoint3 = 21;
  breakPoint4 = 31;
  textToType = 'Witam! Jestem Bartek, a to moje internetowe CV.';
}

var interval = setInterval(function () {
  if(textToType.length > currentIndex) {
    typing.innerHTML += textToType[currentIndex];
    if(currentIndex === breakPoint1) {
      typing.innerHTML += textToType[currentIndex] +'<br/>';
    }
    if(currentIndex === breakPoint2) {
      typing.innerHTML += textToType[currentIndex] +'<br/>';
    }
    if(currentIndex === breakPoint3) {
      typing.innerHTML += textToType[currentIndex] +'<br/>';
    }
    if(currentIndex === breakPoint4) {
      typing.innerHTML += textToType[currentIndex] +'<br/>';
    }
    currentIndex++;
  } else {
    clearInterval(interval);
  }
}, 50 + (Math.random() * 400));

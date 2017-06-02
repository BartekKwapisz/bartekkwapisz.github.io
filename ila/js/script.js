$( document ).ready(function() {

    $('body').on('click', '#header__navigation li a span', underline);
    function underline() {
       $('.underlined').removeClass('underlined');
       $(this).addClass('underlined');
    }

    $('body').on('click', '.image-container', stepForward);

    function stepForward() {
      if(!$('.step1').hasClass('no-display')) {
          $('.step1').addClass('no-display');
          $('.step2').removeClass('no-display');
          $('.back').removeClass('no-display');
          $('#step').text('Krok 2 – Wybierz piętro');
      }
      else if(!$('.step2').hasClass('no-display')) {
          $('.step2').addClass('no-display');
          $('.step3').removeClass('no-display');
          $('#step').text('Krok 3 – Wybierz mieszkanie');
      }
      else if(!$('.step3').hasClass('no-display')) {
          $('.step3').addClass('no-display');
          $('.step4').removeClass('no-display');
          $('main').addClass('fix-main-height-in-step-4');
          $('#step').text('Mieszkanie P5.K3.M1');
      }
      else if(!$('.step4').hasClass('no-display')) {
          $('#myModal').modal('show');
      }
    }

    $('body').on('click', '.back', stepBackward);
    
    function stepBackward() {
      if(!$('.step2').hasClass('no-display')) {
          $('.step2').addClass('no-display');
          $('.step1').removeClass('no-display');
          $('.back').addClass('no-display');
          $('#step').text('Krok 1 – Wybierz budynek');
      }
      else if(!$('.step3').hasClass('no-display')) {
          $('.step3').addClass('no-display');
          $('.step2').removeClass('no-display');
          $('#step').text('Krok 2 – Wybierz piętro');
      }
      else if(!$('.step4').hasClass('no-display')) {
          $('.step4').addClass('no-display');
          $('.step3').removeClass('no-display');
          $('main').removeClass('fix-main-height-in-step-4');
          $('#step').text('Krok 3 – Wybierz mieszkanie');
      }
    }

});

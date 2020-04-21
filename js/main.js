$(function () {
  'use strict';

  //Adjustt Slider Height
  var widowHeight = $(window).height(),
      upperH = $('#upper-bar').innerHeight(),
      navH = $('.navbar').innerHeight();

  $('#slider, .carousel-item').height(widowHeight - upperH - navH);

  //Featured Work
  $('#work ul li').on('click',function() {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') == 'all') {
      $('.shuffle-images .item').css('opacity','1');
    }else {
      $('.shuffle-images .item').css('opacity','0.08');
      $($(this).data('class')).parent().css('opacity','1');
    }

  });



});

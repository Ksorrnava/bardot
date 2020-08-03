var $ = require('jquery');
require('webpack-jquery-ui');
require ('jquery-ui-touch-punch');
// require ('./jGravity.js');
(function ($, window, document, undefined) {

  'use strict';

  function toggleDrag() {
    let isDraggable = false;
    if ( $(window).width() < 768) {
      if(isDraggable) {
        $('.sheet').draggable("destroy").attr('style','');
      }
    }
    else {
      isDraggable = true;
      $('.sheet').draggable({stack: ".sheet"})
      $('.sheet').click(function () {
        $('.sheet').css('z-index', '4').removeClass('changeCursor');
        $(this).css('z-index', '5').addClass('changeCursor');
      });
    }
  }
  function calcVH() {
    if ($(window).width() < 768) {
      $('body.page-home').height(window.innerHeight + 'px');
    } else {
        $('body.page-home').attr('style','');
    }
  }
  function menuScroll() {
    if ( $(window).width() < 768 && $('body').hasClass('page-menu')) {
      let starter = $('.sheet-starter').offset().top;
      let main = $('.sheet-main').offset().top;
      let wine = $('.sheet-wine').offset().top;
      let wrapper = $('.page-menu .main');

      $(window).on('load scroll', function() {
        if($(this).scrollTop() <= starter) {
          wrapper.removeClass('starter-top');
          wrapper.addClass('main-bottom wine-bottom');
        } else if($(this).scrollTop() >= main && $(this).scrollTop() < wine-1) {
          wrapper.addClass('starter-top');
          wrapper.removeClass('main-bottom');
          wrapper.removeClass('main-top');
          if(!wrapper.hasClass('wine-bottom')) {
            wrapper.addClass('wine-bottom')
          }
        } else if($(this).scrollTop() >= wine-1) {
          wrapper.addClass('main-top');
          if(!wrapper.hasClass('starter-top')) {
            wrapper.addClass('starter-top')
          }
          wrapper.removeClass('wine-bottom');
          wrapper.removeClass('main-bottom');
        }
      })

      $('.page-menu .sheet-link').click( function() {
        let el = $(this).data("elem")
        let pos = $(`.${el}`).offset().top;
        if (el == 'sheet-starter') {
          pos = 0
        }
        $("html, body").animate({ scrollTop: pos }, 1000);
      });
    }
  }

  $(function () {
    $( document ).ready(function() {

    $(".various" + new Date().getTime() % 3).css("display", "block");
    $(".layout-block").click( function() {
      $(this).addClass('mixed');
      let that = $(this)
      setTimeout(function() {
        that.find( ".draggable" ).addClass('notransition').draggable({
          stack: ".draggable"
      });
      }, 1000);
    });
    $(".page-home .refresh-button").click( function() {
      $('.mixed').find('.draggable').removeClass('notransition').draggable("destroy");
      $('.draggable').attr('style','');
      $('.mixed').removeClass('mixed');
    });

    $(".page-menu .refresh-button").click( function() {
      $('.sheet').draggable("destroy").attr('style','');
    });
    toggleDrag();
    menuScroll();
    calcVH();
    });
    $(window).resize(function() {
        toggleDrag();
        menuScroll();
        calcVH();
    });
  });

})(jQuery, window, document);

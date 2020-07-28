var $ = require('jquery');
require('webpack-jquery-ui');
require ('jquery-ui-touch-punch');
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

    });
    $(window).resize(function() {
        toggleDrag();
    });
  });

})(jQuery, window, document);

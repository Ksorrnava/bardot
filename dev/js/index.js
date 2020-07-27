var $ = require('jquery');
require('webpack-jquery-ui');
require ('jquery-ui-touch-punch');
(function ($, window, document, undefined) {

  'use strict';

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
    $(".refresh-button").click( function() {
      $('.mixed').find('.draggable').removeClass('notransition').draggable("destroy");
      $('.draggable').attr('style','');
      $('.mixed').removeClass('mixed');

    });
    });
  });

})(jQuery, window, document);

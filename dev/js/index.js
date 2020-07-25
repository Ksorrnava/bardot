(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $( document ).ready(function() {
    $(".various" + new Date().getTime() % 3).css("display", "block");
    $(".layout-block").click( function() {
      $(this).addClass('mixed');
    });
    $(".refresh-button").click( function() {
      $('.mixed').removeClass('mixed');
    });
    });
  });

})(jQuery, window, document);

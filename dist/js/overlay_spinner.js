(function() {
  var $spinner = $('<div class="overlay-spinner"></div>').hide();
  // must add the script after creating the body tag
  $('body').append($spinner);

  window.toggleOverlaySpinner = function(show) {
    $spinner[show ? 'show' : 'hide']();
  };
})();

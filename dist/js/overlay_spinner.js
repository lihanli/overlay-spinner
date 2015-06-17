(function() {
  var $spinner = $('<div class="overlay-spinner"></div>');

  $(function() {
    $('body').append($spinner);
  });

  window.toggleOverlaySpinner = function(show) {
    $spinner[show ? 'show' : 'hide']();
  };
})();

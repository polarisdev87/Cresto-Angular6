$(document).ready(function() {
  var clock;

  clock = $('.clock').FlipClock({
    autoStart: false,
    callbacks: {
      stop: function() {
        $('.message').html('The clock has stopped!')
      }
    }
  });

  clock.setTime(600);
  clock.setCountdown(true);
  clock.start();

});

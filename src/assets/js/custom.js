$(document).ready(function () {

  // ICO CountDown
  // var diff = (1543219200000 - (new Date()).getTime() )/1000;
  // $('.ico-countdown').FlipClock(diff, {
  //   clockFace: 'DailyCounter',
	// 	countdown: true,
  //   autoStart: false
  // });
  var countDownDate = 1543219200000;
  // Update the count down every 1 second
  var timer = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = '0' + days;
    }
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = '0' + hours;
    }
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    
    // If the count down is over, write some text 
    if (distance < 0) {
      days = hours = minutes = seconds = '00';
      clearInterval(timer);
    }
    
    // Output the result in an element with id="demo"
    $('.ico-countdown .days').html(days);
    $('.ico-countdown .hours').html(hours);
    $('.ico-countdown .minutes').html(minutes);
    $('.ico-countdown .seconds').html(seconds);
  }, 1000);

  /// Cache selectors
  let lastId,
    topMenu = $(".main-nav");
  navMobile = $(".navigation-wrapper");
  mobileNav = $(".hamburger-icon");
  topMenuHeight = topMenu.outerHeight() + 15;
  // All list items
  menuItems = topMenu.find(".scroll");
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    let href = $(this).attr("href");
    if (href.indexOf('#') === 0) {
      let item = $(href);
      if (item.length) {
        return item;
      }
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    let href = $(this).attr("href");
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    navMobile.removeClass('open');
    mobileNav.removeClass('active');
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    let fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  // Whitepaper dropdown
  $('.main-nav .whitepaper').hover(function() {
    $(this).find('.submenu').show();
  }, function() {
    $(this).find('.submenu').hide();
  })

  if ($('.slick-slider').length) {
    let options = {
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 360,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
    $('.slick-slider.prototypes').slick(options);
    options.centerPadding = '300px';
    $('.slick-slider.videos').slick(options);
  }

  $('.faq-wr li').click(function() {
    if ($(this).hasClass('open')) {
      $(this).find('.text').slideUp();
      $(this).find('.sign').html('+');
      $(this).removeClass('open');
    }
    else {
      $(this).find('.text').slideDown();
      $(this).find('.sign').html('-');
      $(this).addClass('open');
    }
  })
});

$(document).ready(function () {

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

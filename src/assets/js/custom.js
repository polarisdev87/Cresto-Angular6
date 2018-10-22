$(document).ready(function () {

  /*
  let clock;
  let clock2;
  const options = {
    autoStart: false,
    callbacks: {
      stop: function () {
        $('.message').html('The clock has stopped!');
      }
    }
  }

  clock = $('.clock').FlipClock(options);
  clock2 = $('.clock2').FlipClock(options);

  clock.setTime(1600);
  clock.setCountdown(true);
  clock.start();

  clock2.setTime(1600);
  clock2.setCountdown(true);
  clock2.start();
  */

  const particlesOptionsTeam = {
    "particles": {
      "number": {
        "value": 65,
        "density": {
          "enable": true,
          "value_area": 473.4885849793636
        }
      },
      "color": {
        "value": "#585858"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 26.79854800594439,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#585858",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 40.603860615067255,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  const particlesOptions = {
    "particles": {
      "number": {
        "value": 65,
        "density": {
          "enable": true,
          "value_area": 473.4885849793636
        }
      },
      "color": {
        "value": "#585858"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 26.79854800594439,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#585858",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 40.603860615067255,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  // if ($('#particles-js').length) {
  //   particlesJS("particles-js", particlesOptions);
  // }
  // if ($('#particles-token').length) {
  //   particlesJS("particles-token", particlesOptions);
  // }
  // if ($('#particles-team').length) {
  //   particlesJS("particles-team", particlesOptionsTeam);
  // }

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
});

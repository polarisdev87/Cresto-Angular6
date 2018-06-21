/* Template	:	ICO Crypto v1.1.3 */


(function($){
	'use strict';
	var $win = $(window), $body_m = $('body'), $navbar = $('.sidebar');

	// Touch Class
	if (!("ontouchstart" in document.documentElement)) {
		$body_m.addClass("no-touch");
	}
	// Get Window Width
	function winwidth () {
		return $win.width();
	}
	var wwCurrent = winwidth();
	$win.on('resize', function () {
		wwCurrent = winwidth();
	});



	$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('#gototop').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 800);
});

	// Sticky
	var $is_sticky = $('.is-sticky');
	if ($is_sticky.length > 0 ) {
		var $navm = $('#mainnav').offset();
		$win.scroll(function(){
			var $scroll = $win.scrollTop();
			if ($win.width() > 991) {
				if($scroll > $navm.top ){
					if(!$is_sticky.hasClass('has-fixed')) {$is_sticky.addClass('has-fixed');}
				} else {
					if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
				}
			} else {
				if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
			}
		});
	}


	// OnePage Scrolling
	$('a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var toHash = $(this.hash), toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false, nbar = (wwCurrent >= 992) ? $navbar.height() - 1 : 0;

			toHash = toHash.length ? toHash : toHashN;
			if (toHash.length) {
				$('html, body').animate({
					scrollTop: (toHash.offset().top - nbar)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Active page menu when click
	/// Cache selectors
      var lastId,
        topMenu = $(".sidebar-nav"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find(".scroll-link"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
      menuItems.click(function(e){
        var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
          scrollTop: offsetTop
        }, 300);
        e.preventDefault();
      });

    // Bind to scroll
      $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
          if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
      });


	// Bootstrap Dropdown
	var $dropdown_menu = $('.dropdown');
	if ($dropdown_menu.length > 0 ) {
		$dropdown_menu.on("mouseover",function(){
			if ($win.width() > 991) {
				$('.dropdown-menu', this).not('.in .dropdown-menu').stop().fadeIn("400");
				$(this).addClass('open');
			}
		});
		$dropdown_menu.on("mouseleave",function(){
			if ($win.width() > 991) {
				$('.dropdown-menu', this).not('.in .dropdown-menu').stop().fadeOut("400");
				$(this).removeClass('open');
			}
		});
		$dropdown_menu.on("click",function(){
			if ($win.width() < 991) {
				$(this).children('.dropdown-menu').fadeToggle(400);
				$(this).toggleClass('open');
				return false;
			}
		});

	}
	$win.on('resize', function() {
		$('.sidebar-collapse').removeClass('in');
		$dropdown_menu.children('.dropdown-menu').fadeOut("400");
	});

	// remove ani
	var $navtoggler = $('.sidebar-toggler'), $trannav =$('.is-transparent');
	if ($navtoggler.length > 0) {
		$navtoggler.on("click",function(){
			$('.remove-animation').removeClass('animated');
			if (!$trannav.hasClass('active')) {
				$trannav.addClass('active');
			}else{
				$trannav.removeClass('active');
			}
		});
	}

	// Select
	var $selectbox = $('select');
	if ($selectbox.length > 0) {
		$selectbox.select2();
	}

	// Nav collapse
	$('.menu-link').on("click",function() {
		$('.sidebar-collapse').collapse('hide');
		$trannav.removeClass('active');
	});

	//Carousel
	var $timeline_carousel = $('.timeline-carousel');
	if ($timeline_carousel.length > 0 ) {
		var c_rtl = ($body_m.hasClass('is-rtl')) ? true : false;
		$timeline_carousel.addClass('owl-carousel').owlCarousel({
			navText: ["<i class='ti ti-angle-left'></i>","<i class='ti ti-angle-right'></i>"],
			items:6,
			nav:true,
			margin:30,
			rtl: c_rtl,
			responsive:{
				0 : {
					items:1,
				},
				400 : {
					items:2,
					center:false,
				},
				599 : {
					items:3,
				},
				1024 : {
					items:5,
				},
				1170 : {
					items:6,
				}
			}
		});
	}

	//POPUP - Content
	var $content_popup = $('.content-popup');
	if ($content_popup.length > 0 ) {
		$content_popup.magnificPopup({
			type: 'inline',
			preloader: true,
			removalDelay: 400,
			mainClass: 'mfp-fade bg-team-exp'
		});
	}

	//POPUP - Video
	var $video_play = $('.video-play');
	if ($video_play.length > 0 ) {
		$video_play.magnificPopup({
			type: 'iframe',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false,
			callbacks: {
			beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
		});
	}

	//ImageBG
	var $imageBG = $('.imagebg');
	if ($imageBG.length > 0) {
		$imageBG.each(function(){
			var $this = $(this),
				$that = $this.parent(),
				overlay = $this.data('overlay'),
				image = $this.children('img').attr('src');
			var olaytyp = (typeof overlay!=='undefined' && overlay!=='') ? overlay.split('-') : false;

			// If image found
			if (typeof image!=='undefined' && image !==''){
				if (!$that.hasClass('has-bg-image')) {
					$that.addClass('has-bg-image');
				}
				if ( olaytyp!=='' && (olaytyp[0]==='dark') ) {
					if (!$that.hasClass('light')) {
						$that.addClass('light');
					}
				}
				$this.css("background-image", 'url("'+ image +'")').addClass('bg-image-loaded');
			}
		});
	}
	// Mask Class add
	var $maskOV = $('[class*="mask-ov"]');
	if ($maskOV.length > 0) {
		$maskOV.each(function(){
			var $this = $(this), $that = $this.parent();
			if (!$that.hasClass('has-maskbg')) {
				$that.addClass('has-maskbg');
			}
		});
	}


	// On Scroll Animation
	var $aniKey = $('.animated');
	if($().waypoint && $aniKey.length > 0){
		$win.on('load', function() {
			$aniKey.each(function(){
			var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
			aniWay.waypoint(function(){
				aniWay.addClass("animated "+typ).css("visibility", "visible");
				if(dur){
					aniWay.css('animation-duration', dur+'s');
				}
				if(dly){
					aniWay.css('animation-delay', dly+'s');
				}
				}, { offset: '93%' });
			});
		});
	}

	// // Preloader
	// var $preload = $('#preloader'), $loader = $('#loader');
	// if ($preload.length > 0) {
	// 	$win.on('load', function() {
	// 		$loader.fadeOut(300);
	// 		$body_m.addClass("loaded");
	// 		$preload.delay(700).fadeOut(300);
	// 	});
	// }




	// // particlesJS
	// var $particles_js = $('#particles-js');
	// if ($particles_js.length > 0 ) {
	// 	particlesJS('particles-js',
	// 	// Update your personal code.
     //    {
	// 	"particles": {
	// 		"number": {
	// 			"value": 150,
	// 			"density": {
	// 				"enable": true,
	// 				"value_area": 800
	// 			}
	// 		},
	// 		"color": {
	// 			//"value": "#00c0fa"
	// 			"value": "#ffffff"
	// 		},
	// 		"shape": {
	// 			"type": "circle",
	// 		//	"opacity": 0.20,
	// 		"opacity": 1,
	// 			"stroke": {
	// 				"width": 0,
	// 				//"color": "#ff0000"
	// 				"color": "#ffffff"
	// 			},
	// 			"polygon": {
	// 				"nb_sides": 5
	// 			},
	// 			"image": {
	// 				"src": "img/github.svg",
	// 				"width": 100,
	// 				"height": 100
	// 			}
	// 		},
	// 		"opacity": {
	// 		//	"value": 0.30,
	// 			"value": 1,
	// 			"random": false,
	// 			"anim": {
	// 				"enable": false,
	// 				"speed": 1,
	// 				"opacity_min": 0.12,
	// 				"sync": false
	// 			}
	// 		},
	// 		"size": {
	// 			"value": 6,
	// 			"random": true,
	// 			"anim": {
	// 				"enable": false,
	// 				"speed": 40,
	// 				"size_min": 0.08,
	// 				"sync": false
	// 			}
	// 		},
	// 		"line_linked": {
	// 			"enable": true,
	// 			"distance": 150,
	// 		//	"color": "#2b56f5",
	// 		"color": "#ffffff",
	// 			"opacity": 1,
	// 			"width": 1.3
	// 		},
	// 		"move": {
	// 			"enable": true,
	// 			"speed": 6,
	// 			"direction": "none",
	// 			"random": false,
	// 			"straight": false,
	// 			"out_mode": "out",
	// 			"bounce": false,
	// 			"attract": {
	// 				"enable": false,
	// 				"rotateX": 600,
	// 				"rotateY": 1200
	// 			}
	// 		}
	// 	},
	// 	"interactivity": {
	// 		"detect_on": "canvas",
	// 		"events": {
	// 			"onhover": {
	// 				"enable": true,
	// 				"mode": "repulse"
	// 			},
	// 			"onclick": {
	// 				"enable": true,
	// 				"mode": "push"
	// 			},
	// 			"resize": true
	// 		},
	// 		"modes": {
	// 			"grab": {
	// 			"distance": 400,
	// 				"line_linked": {
	// 					"opacity": 1
	// 				}
	// 			},
	// 			"bubble": {
	// 				"distance": 400,
	// 				"size": 40,
	// 				"duration": 2,
	// 				"opacity": 8,
	// 				"speed": 3
	// 			},
	// 			"repulse": {
	// 				"distance": 200,
	// 				"duration": 0.4
	// 			},
	// 			"push": {
	// 				"particles_nb": 4
	// 			},
	// 			"remove": {
	// 				"particles_nb": 2
	// 			}
	// 		}
	// 	},
	// 		"retina_detect": true
	// 	}
	// 	// Stop here.
     //  );
	// }
})(jQuery);

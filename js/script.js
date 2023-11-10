// Carousel code from http://preview.uipro.net/iCard-v1.0-Demo/iCard-demo1/index.html
/*========== Start load ==========*/
$(window).on("load", function (e){
// LIGHTBOX VIDEO
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
//PRELOADER
		var loader = $(".loader");
		var wHeight = $(window).height();
		var wWidth = $(window).width();
		var o = 0;

		loader.css({
				top: wHeight / 2 - 2.5,
				left: wWidth / 2 - 200
		})

		do {
				loader.animate({
						width: o
				}, 10)
				o += 3;
		} while (o <= 400)
		if (o === 402) {
				loader.animate({
						left: 0,
						width: '100%'
				})
				loader.animate({
						top: '0',
						height: '100vh'
				})
		}
		setTimeout(function() {
				$(".loader-wrapper").fadeOut('fast');
				(loader).fadeOut('fast');
		}, 3000);
// PORTFOLIO ISOTOPE
if ($('.isotope_items').length) {
		$('.portfolio_filter ul li').on("click", function(){
				$(".portfolio_filter ul li").removeClass("select-cat");
				$(this).addClass("select-cat");
				var selector = $(this).attr('data-filter');
				$(".isotope_items").isotope({
						filter: selector,
						animationOptions: {
								duration: 750,
								// easing: 'linear',
								queue: false,
						}
		});
				return false;
		});
}
});
/*========== End loader ==========*/
$(function() {
	'use strict';

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 50) {
			$('#back-to-top').addClass('show');
		} else {
			$('#back-to-top').removeClass('show');
		}
	});

	$('body').scrollspy({
		offset: 80
	});
  /*========== Start Timeline ==========*/
  $(function () {
  var stickyTop = 0,
  scrollTarget = false;

  var timeline = $('.timeline__nav'),
  items = $('li', timeline),
  milestones = $('.timeline__section .milestone'),
  offsetTop = parseInt(timeline.css('top'));

  var TIMELINE_VALUES = {
    start: 190,
    step: 30 };

  $(window).resize(function () {
    timeline.removeClass('fixed');

    // stickyTop = timeline.offset().top - offsetTop;

    $(window).trigger('scroll');
  }).trigger('resize');

  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyTop) {
      timeline.addClass('fixed');
    } else {
      timeline.removeClass('fixed');
    }
  }).trigger('scroll');

  items.find('span').click(function () {
    var li = $(this).parent(),
    index = li.index(),
    milestone = milestones.eq(index);

    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index;

      var scrollTargetTop = milestone.offset().top - 80;

      $('html, body').animate({ scrollTop: scrollTargetTop }, {
        duration: 400,
        complete: function complete() {
          scrollTarget = false;
        } });
    }
  });

  $(window).scroll(function () {
    var viewLine = $(window).scrollTop() + $(window).height() / 3,
    active = -1;

    if (scrollTarget === false) {
      milestones.each(function () {
        if ($(this).offset().top - viewLine > 0) {
          return false;
        }
        active++;
      });
    } else {
      active = scrollTarget;
    }
    timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');

    items.filter('.active').removeClass('active');

    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
  });
  /*========== End Timeline ==========*/
	/*========== Start Smooth Scroll ==========*/

	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 0
		}, 1200, 'easeInOutCubic');
	});

	/*========== End Smooth Scroll ==========*/
	/*========== Start Typed Text ==========*/

	var proff = {
		strings: ['UI/UX Designer.','Product Designer.','Visual Storyteller!'],
		typeSpeed: 50,
		// backSpeed:50,
		startDelay: 100,
		backDelay: 1500,
		fadeOut: true,
		loop: true
	}

	var typed = new Typed('.proff', proff);

	/*========== End Typed Text ==========*/

	$(window).on('scroll', function () {
		$(".progress-bar").each(function () {
			var bottom_of_object =
			$(this).offset().top + $(this).outerHeight();
			var bottom_of_window =
			$(window).scrollTop() + $(window).height();
			var myVal = $(this).attr('data-value');
			if(bottom_of_window > bottom_of_object) {
				$(this).css({
					width : myVal
				});
			}
		});
	});

	////////
	/*========== Start Magnific Popup ==========*/

	$('.portfolio-item a').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			gallery: {
				enabled: true,
				preload: [0, 1]
			},
		});

	/*========== End Magnific Popup ==========*/

});

/*========== Start activate WOW.js ==========*/

$(function() {
	'use strict';

	new WOW().init();

});

/*========== End activate WOW.js ==========*/
/*========== Start Persona carousel ==========*/

	var personaOne = new Swiper('.persona-one', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
		dynamicBullets: true,
      },
	  spaceBetween: 50,
	  speed: 500,
	  loop:false,
	  autoplay:false,
	  centeredSlides: true,
      breakpoints: {
        3000: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        2400: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        }
      }
    });
/*========== End Persona carousel ==========*/
/*========== Start UI carousel ==========*/

var uiOne = new Swiper('.ui-one', {
      pagination: {
        // el: '.swiper-pagination',
        clickable: true,
		  dynamicBullets: true,
      },
	  spaceBetween: 50,
	  speed: 1000,
	  loop:true,
	  autoplay:true,
	  centeredSlides: true,
      breakpoints: {
        3000: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        2400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });
/*========== End UI carousel ==========*/

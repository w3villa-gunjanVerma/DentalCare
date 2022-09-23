
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".fix-header").addClass("darkHeader");
		} else {
			$(".fix-header").removeClass("darkHeader");
		}
	});
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 600,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 800,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 350,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 200,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 50,duration: 2500});
$(document).ready(function () {
    // Hero section
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

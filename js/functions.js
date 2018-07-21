/*
 * FUNCTIONS.JS
*/

/* JQUERY */

$(window).scroll(
	function() {
    if($(window).scrollTop() > 200) {
        $('.menuTop').removeClass('hidden');
        // add animation
    } else {
        $('.menuTop').addClass('hidden');
        // add animation
    }
	}
);

$(document).ready(
	function(){
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').animate({
				'scrollTop': $target.offset().top - 200
			}, 1000, 'swing');
		});
	}
);

$(document).ready(function() {
	if ($(window).width() >= 1200) {
		$('.triangleDescubrenos').css('border-left-width', '600px');
	  $('.triangleDescubrenos').css('border-right-width', '600px');
	  $('.quadratDescubrenos').css('height', 0);
	} else {
		$('.triangleDescubrenos').css('border-left-width', $(window).width() / 2);
	  $('.triangleDescubrenos').css('border-right-width', $(window).width() / 2);
	  $('.quadratDescubrenos').css('height', 700 - $(window).width());
	  $('.triangleDescubrenos').css('border-top-width', 550 - $('.quadratDescubrenos').height());
	}

	if ($(window).width() <= 2000) {
	  $('.trianglesBlog__dre').css('border-right-width', $(window).width() * 0.6);
	  $('.trianglesBlog__dre').css('border-top-width', $(window).width() * 0.4);
	  $('.trianglesBlog__dre').css('border-bottom-width', $(window).width() * 0.4);
	  $('.trianglesBlog__esq').css('border-left-width', $(window).width() * 0.6);
	  $('.trianglesBlog__esq').css('border-top-width', $(window).width() * 0.4);
	  $('.trianglesBlog__esq').css('border-bottom-width', $(window).width() * 0.4);
	  $('.trianglesBlog__esq').css('margin-top', -($(window).width() * 0.62));
	} else {
	}
});

$(window).on('resize', function () {
	if ($(window).width() >= 1200) {
		$('.triangleDescubrenos').css('border-left-width', '600px');
	  $('.triangleDescubrenos').css('border-right-width', '600px');
	  $('.quadratDescubrenos').css('height', 0);
	} else {
	  $('.triangleDescubrenos').css('border-left-width', $(window).width() / 2);
	  $('.triangleDescubrenos').css('border-right-width', $(window).width() / 2);
	  $('.quadratDescubrenos').css('height', 700 - $(window).width());
	  $('.triangleDescubrenos').css('border-top-width', 550 - $('.quadratDescubrenos').height());
	}

	if ($(window).width() <= 2000) {
	  $('.trianglesBlog__dre').css('border-right-width', $(window).width() * 0.6);
	  $('.trianglesBlog__dre').css('border-top-width', $(window).width() * 0.4);
	  $('.trianglesBlog__dre').css('border-bottom-width', $(window).width() * 0.4);
	  $('.trianglesBlog__esq').css('border-left-width', $(window).width() * 0.6);
	  $('.trianglesBlog__esq').css('border-top-width', $(window).width() * 0.4);
	  $('.trianglesBlog__esq').css('border-bottom-width', $(window).width() * 0.4);
	  $('.trianglesBlog__esq').css('margin-top', -($(window).width() * 0.62));
	} else {
	}
}).resize();



/* FUNCTIONS */

function menu (num) {
	if (num === 1) {
		$('.menuMobile').removeClass('hidden');
	} else {
		$('.menuMobile').addClass('hidden');
	}
}
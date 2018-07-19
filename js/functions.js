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
				'scrollTop': $target.offset().top
			}, 1000, 'swing');
		});
	}
);

$(document).ready(function() {
	if ($(window).width() < 1200) {
		$('.triangleDescubrenos').css('border-left-width', $(window).width() / 2);
	  $('.triangleDescubrenos').css('border-right-width', $(window).width() / 2);
	} else {
		$('.triangleDescubrenos').css('border-left-width', '600px');
	  $('.triangleDescubrenos').css('border-right-width', '600px');
	}
});

$(window).on('resize', function () {
	if ($(window).width() < 1200) {
	  $('.triangleDescubrenos').css('border-left-width', $(window).width() / 2);
	  $('.triangleDescubrenos').css('border-right-width', $(window).width() / 2);
	} else {
		$('.triangleDescubrenos').css('border-left-width', '600px');
	  $('.triangleDescubrenos').css('border-right-width', '600px');
	}
}).resize();



/* FUNCTIONS */

function menu(num) {
	if (num === 1) {
		$('.menuMobile').removeClass('hidden');
	} else {
		$('.menuMobile').addClass('hidden');
	}
}
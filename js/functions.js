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

$(window).on( 'resize', function () {
    $('.triangleDescubrenos').border-left($(this).width() / 2);
    $('.triangleDescubrenos').border-right($(this).width() / 2);
}).resize();



/* FUNCTIONS */

function menu(num) {
	if (num === 1) {
		$('.menuMobile').removeClass('hidden');
	} else {
		$('.menuMobile').addClass('hidden');
	}
}
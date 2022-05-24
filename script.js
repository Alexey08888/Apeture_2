document.addEventListener("DOMContentLoaded", function() {
	$('body').removeClass('lock');
});


$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		
		$('body').addClass('lock');
	});
	$('.close-icon-menu,.menu__item,.button').click(function (event) {
		
		$('body').removeClass('lock');
	});
})








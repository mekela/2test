$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//placeholder
	$('input[placeholder], textarea[placeholder]').placeholder();

	//bxslider
	$('.slider_wrapper ul').bxSlider();
});
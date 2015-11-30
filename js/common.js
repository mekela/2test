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

	//show menu mobile
	$( ".js_show_menu" ).click(function() {
	  $( ".head_menu" ).slideToggle( "slow");
	});
});
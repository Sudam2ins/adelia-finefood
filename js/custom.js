$(function(){
	$mobileNav = jQuery('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content ');
	$mobileNav.append(jQuery('.header .mynav-logo .mynav-right, .mynav > ul, .header .mynav-logo .mynav-left, .mynav > ul').clone());
	jQuery('.toggle a').click(function(e) {
		jQuery('.offcanvas').addClass('show-offcanvas');
		jQuery('body').addClass('pushed');
		jQuery('.body-inactive').fadeIn(350);
		e.preventDefault();
	});
	jQuery('.body-inactive, .coff a').click(function(e) {
		jQuery('.offcanvas').removeClass('show-offcanvas');
		jQuery('.body-inactive').fadeOut(350);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();
})
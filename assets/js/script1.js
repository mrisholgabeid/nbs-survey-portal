jQuery(document).ready(function() {
	
	// define our variables
	var fullHeightMinusHeader = 0;
	
	// create function to calculate ideal height values
	function calcHeights() {
		
		// set height of main columns
		fullHeightMinusHeader = jQuery(window).height() - jQuery("header").outerHeight();
		jQuery(".log").height(fullHeightMinusHeader);
		
		// set height of sidebar scroll content
		//sideScrollHeight = fullHeightMinusHeader - jQuery(".nav-menu").outerHeight() - jQuery(".buttons").outerHeight();
		//jQuery(".side-scroll").height(sideScrollHeight);
					
	} // end calcHeights function
	
	// run on page load
	calcHeights();
	
	// run on window resize event
	jQuery(window).resize(function() {
		calcHeights();
	});
	
});
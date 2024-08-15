/* eslint-env jquery */

(function($) {
	"use strict";
  
	// Adjust the height of elements with the class 'js-fullheight' to fill the screen height
	var fullHeight = function() {
	  $('.js-fullheight').css('height', $(window).height());
	  $(window).resize(function(){
		$('.js-fullheight').css('height', $(window).height());
	  });
	};
	fullHeight();
  
	// Sidebar toggle functionality
	$('#sidebarCollapse').on('click', function () {
	  $('#sidebar').toggleClass('active');
	  $('#content').toggleClass('active-content'); // Adjusts content width
	});
  
  })(jQuery);
  
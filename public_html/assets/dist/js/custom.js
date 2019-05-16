// Enable all tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Responsive navigation bar
function responsiveNav(){
	var topNav = document.getElementById("topNav");
	if (topNav.className === "topNav") {
		topNav.className += " responsive";
	} else {
		topNav.className = "topNav";
	}
}

$(window).on('load', function() {
	if($(window).width() < 852) {
		// logo
		$('#logo').addClass('col-12')
		$('#logo').removeClass('col-3')
		// Main navigation
		$('#mainNav').addClass('col-12');
		$('#mainNav').removeClass('col-8');
	}else{
		// logo
		$('#logo').addClass('col-3')
		$('#logo').removeClass('col-12')
		// Main navigation
		$('#mainNav').addClass('col-8');
		$('#mainNav').removeClass('col-12');
	}
})

$(window).on('resize', function() {
	if($(window).width() < 852) {
		// logo
		$('#logo').addClass('col-12')
		$('#logo').removeClass('col-3')
		// Main navigation
		$('#mainNav').addClass('col-12');
		$('#mainNav').removeClass('col-8');
	}else{
		// logo
		$('#logo').addClass('col-3')
		$('#logo').removeClass('col-12')
		// Main navigation
		$('#mainNav').addClass('col-8');
		$('#mainNav').removeClass('col-12');
	}
})

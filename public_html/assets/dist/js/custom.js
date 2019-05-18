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
		// Contact Form
		$('#contactForm').addClass('col-12');
		$('#contactForm').removeClass('col-4');
	}else{
		// logo
		$('#logo').addClass('col-3')
		$('#logo').removeClass('col-12')
		// Main navigation
		$('#mainNav').addClass('col-8');
		$('#mainNav').removeClass('col-12');
		// Contact Form
		$('#contactForm').addClass('col-4');
		$('#contactForm').removeClass('col-12');
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
		// Contact Form
		$('#contactForm').addClass('col-12');
		$('#contactForm').removeClass('col-4');
	}else{
		// logo
		$('#logo').addClass('col-3')
		$('#logo').removeClass('col-12')
		// Main navigation
		$('#mainNav').addClass('col-8');
		$('#mainNav').removeClass('col-12');
		// Contact Form
		$('#contactForm').addClass('col-4');
		$('#contactForm').removeClass('col-12');
	}
})

// slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-black", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-gray";
}

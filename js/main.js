$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
    	autoplayTimeout:3000,
    	autoplaySpeed:false,
    	dots:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        769:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	});




})
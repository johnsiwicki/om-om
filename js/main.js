$(document).foundation();

$(window).scroll(function(){
 	var length = '300';
 	$(".hotel-left").stop().animate({"right": (length) + "px"}, 600);
  	$(".hotel-right").stop().animate({"left": (length) + "px"}, 600 );
});

 
$( document ).ready(function() {
	$( ".animsition-link" ).click(function(event) {
	 event.preventDefault();
 	 $(this).velocity("transition.fadeOut", 250);
 	 $('.fullscreen_show').velocity({ height: 0 }, 1250);
 	 //$(".fullscreen_show").stop().velocity({"height": (length) + "px"}, 2000 );
 	 //$(".fullscreen_show").delay(1000).velocity("slideUp", 950);
});



});
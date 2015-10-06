$(document).foundation();

$(window).scroll(function(){
 	var length = '300';
 	$(".hotel-left").stop().animate({"right": (length) + "px"}, "fast" );
  	$(".hotel-right").stop().animate({"left": (length) + "px"}, "fast" );
});


 
           
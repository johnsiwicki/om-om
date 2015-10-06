$(document).foundation();

$(window).scroll(function(){
 	var length = '300';
 	$(".hotel-left").stop().animate({"right": (length) + "px"}, 500);
  	$(".hotel-right").stop().animate({"left": (length) + "px"}, 500 );
});


 
           
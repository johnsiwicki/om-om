$(document).foundation();

if (document.location.pathname === "/") {
   // do some special stuff on this page!
   $( document ).ready(function() {
   	//disable scrolling on loading 
   	$("body").css("overflow", "hidden");

	$( ".animsition-link" ).click(function(event) {
			 event.preventDefault();
		 	 $(this).velocity("transition.fadeOut", 250);
		 	 $('.fullscreen_show').velocity({ height: 0 }, 1250);
		 	 //reset to 
		 	 $("body").css("overflow", "auto");
		});

});

}


$(window).scroll(function(){
 	var length = '300';
 	$(".hotel-left").stop().animate({"right": (length) + "px"}, 600);
  	$(".hotel-right").stop().animate({"left": (length) + "px"}, 600 );
});

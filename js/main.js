 $(window).scroll(function(){
 	var length = '300';
 	$(".hotel-left").stop().animate({"right": (length) + "px"}, "fast" );
  	$(".hotel-right").stop().animate({"left": (length) + "px"}, "fast" );
});


$(".homepage-slider .content-slides").width($(".homepage-slider .homepage-slides").children().size() * $(".homepage-slider .homepage-slides").width());
                
  function slideStart()
                {
                    curPage = ((index) % $(".homepage-slider .homepage-slides").children().size()) + 1;
                    $(".homepage-slider .homepage-slides").animate({
                        "left": -($(".homepage-slider .homepage-slides li:nth-child(" + curPage + ")").position().left)
                    });
                    $(".homepage-slider .homepage-pagination li").removeClass("active-marker");
                    $(".homepage-slider .homepage-pagination li:nth-child(" + curPage + ")").addClass("active-marker");
                    index++;
                    }        
                
                    $(".homepage-slider .homepage-pagination li a").click(function(){
                        index = $(this).attr("href");
                        clearInterval(islider);
                        slideStart();
                        islider = setInterval("slideStart()", 6500);
                        return false;
                });
                
                $(document).ready(function(){
                    index = 0;
                    islider = setInterval("slideStart()", 6500);
                });
                
           
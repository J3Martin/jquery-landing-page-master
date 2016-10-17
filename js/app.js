$(document).ready(function(){
	new WOW().init();
	$(window).on("scroll", function() {
 		var scrollDistance = $(window).scrollTop();
 		 if (scrollDistance > 50) {
 		 	$("#mainNav").removeClass("affix-top").addClass("affix");
 		 }
 		 else {
 		 	$("#mainNav").removeClass("affix").addClass("affix-top");
 		 }

 		});
 				$(document).on("click",".page-scroll",function(){
 					var kittens = $(this).attr("href");
 					$("body").animate({
 						scrollTop:$(kittens).offset().top
 					},2000);

 		  			// $('body').animate({
        // 				scrollTop: $("#about").offset().top
        // 			},2000);
        // 		// $(document).on("click",".page-scroll",function(){
 		  			// $('body').animate({
 		  			// scrollTop: $("#services").offset().top
        // 			},2000);
        // 		// $(document).on("click",".page-scroll",function(){
 		  			// $('body').animate({
 		  			// scrollTop: $("#portfolio").offset().top
        // 			},2000);
        // 		$(document).on("click",".page-scroll",function(){
 		  			// $('body').animate({
 		  			// scrollTop: $("#contact").offset().top
        // 			},2000);

 	
 	});

 	$("body").scrollspy({ target: "#mainNav" });	

 	
});
 
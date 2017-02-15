var colors=['#C95BA2','#943E81','#46286D','#725C8E','#D89CC5','#C6A8D0','#C2466C','#D37A62','#C45E28'];



$(document).ready(function() {
//letter.js
	$(".cinderella_text").lettering();
	$(".rapunzel_text").lettering();
	$(".sleeping_beauty_text").lettering();
	$(".snow_white_text").lettering();
	$(".title").lettering();
	$("span").addClass("characters");

//make colorful
	$(".characters").mouseenter(function(){
		$(this).css("color", colors[Math.floor(Math.random()*colors.length)]);
	});
	 // 	$(".characters").mouseleave(function(){
	 // 		$(this).animate({color: "black"}, 1000);
	 // });

	// $(".characters").mouseleave(function(){
	// 	$(this).animate({

	// 	});
	// });


	$(".clickable").mouseenter(function(){
		$(this).css("color", colors[Math.floor(Math.random()*colors.length)]);
	});

	$(".clickable").mouseleave(function(){
		$(this).css("color", "black");
	});


//navigation from homepage sentences
	$("#rapunzel_sentence").click(function(e){
		$(".homepage").hide();
		$(".rapunzel_page").show();
	});

	$("#cinderella_sentence").click(function(e){
		$(".homepage").hide();
		$(".cinderella").show();
	});

	$("#snow_white_sentence").click(function(e){
		$(".homepage").css("display", "none");
		$(".snow_white_page").css("display", "show");
	});

	$("#sleeping_beauty_sentence").click(function(e){
		$(".homepage").css("display", "none");
		$(".sleeping_beauty_page").css("display", "show");
	});

	$(".bookmark").click(function(e){
		$(".homepage").css("display", "show");
	})





	// $(".clickable").click(function(e) {
	// 	e.preventDefault();
	// 	console.log("the clicked-on target is: ", e.currentTarget.id);
	// 	if (e.currentTarget.id === "rapunzel_sentence") {
	// 		$(".rapunzel_page").css("display", "show");
	// 		$(".homepage").css("display", "hide")
	// 	}
	// });

	// $("#rapunzel_sentence").click(function(){
	// 	$(".rapunzel_page").css("display", "show");
	// 	$(".homepage").css("display", "hide");
	// });


	// $(".rapunzel_page").hide();
	// $(".sleeping_beauty_page").hide();
	// $(".snow_white_page").hide();
	// $(".cinderella_page").hide();
	


});





	

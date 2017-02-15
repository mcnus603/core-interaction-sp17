var colors: ['#C95BA2','#943E81','#46286D','#725C8E','#D89CC5','#C6A8D0','#C2466C','#D37A62','#C45E28']


$(document).ready(function() {
	$(".cinderella_text").lettering();
	$(".rapunzel_text").lettering();
	$(".sleeping_beauty_text").lettering();
	$(".snow_white_text").lettering();
	$("span").addClass("characters");
	$(".characters").mouseenter(function(){
		$(this).css("color", "pink");
	});
	
});







	
$(".rapunzel_page").hide();
	$(".sleeping_beauty_page").hide();
	$(".snow_white_page").hide();
	$(".cinderella_page").hide();
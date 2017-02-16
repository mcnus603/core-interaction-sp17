var colors=['#EF568E','#D25DA2','#D04527','#A8228C','#D67FB4','#BB83B9','#C2466C','#F48069','#4F2E8D'];
var back=[]

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

	$(".bookmark").mouseenter(function(){
		$(".bookmark").css("opacity",".8");
	});

	$(".bookmark").mouseleave(function(){
		$(".bookmark").css("opacity","1");
	});

	$(".characters").mouseleave(function(){
		$(this).animate({color: "black"}, 2000);
	});
	 // });

	// $(".characters").mouseleave(function(){
	// 	$(this).animate({

	// 	});
	// });

	$(".snow_white_text").css("display", "inline");
	$(".rapunzel_text").css("display", "inline");
	$(".sleeping_beauty_text").css("display", "inline");
	$(".cinderella_text").css("display", "inline");
	$(".line").css("display", "inline");


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
		$(".cinderella_page").show();
	});

	$("#snow_white_sentence").click(function(e){
		$(".homepage").hide();
		$(".snow_white_page").show();
	});

	$("#sleeping_beauty_sentence").click(function(e){
		$(".homepage").hide();
		$(".sleeping_beauty_page").show();
	});

//homepage return 
	$(".bookmark").click(function(e){
		$(".homepage").show();
		$(".sleeping_beauty_page").hide();
		$(".rapunzel_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();
		$(".snow_white_page").css("width","700px");
		$(".sleeping_beauty_page").css("width","700px");
		$(".cinderella_page").css("width","700px");
		$(".rapunzel_page").css("width","700px");

		$(".snow_white_page").css("top","100px");
		$(".sleeping_beauty_page").css("top","100px");
		$(".cinderella_page").css("top","100px");
		$(".rapunzel_page").css("top","100px");

		$(".snow_white_page").css("left","150px");
		$(".sleeping_beauty_page").css("left","150px");
		$(".cinderella_page").css("left","150px");
		$(".rapunzel_page").css("left","150px");
	
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","30px");
		});

		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","30px");
		});
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","30px");

		});

		$(".line").css("color", "black");
		$("a").css("color", "black");
		$("a").css("color", "black");
		
	});

	$(".once_upon_a_time").click(function(e){
		$(".homepage").show();
		$(".sleeping_beauty_page").hide();
		$(".rapunzel_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();
		$(".snow_white_page").css("width","700px");
		$(".sleeping_beauty_page").css("width","700px");
		$(".cinderella_page").css("width","700px");
		$(".rapunzel_page").css("width","700px");

		$(".snow_white_page").css("top","100px");
		$(".sleeping_beauty_page").css("top","100px");
		$(".cinderella_page").css("top","100px");
		$(".rapunzel_page").css("top","100px");

		$(".snow_white_page").css("left","150px");
		$(".sleeping_beauty_page").css("left","150px");
		$(".cinderella_page").css("left","150px");
		$(".rapunzel_page").css("left","150px");

		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","30px");
		});

		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","30px");
		});
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".line").css("color", "black");
		$("a").css("color", "black");

	});

	$(".line").mouseenter(function(){
		$(this).css("color", colors[Math.floor(Math.random()*colors.length)]);
	});
	$("a").mouseenter(function(){
		$(this).css("color", colors[Math.floor(Math.random()*colors.length)]);
	});

//toogle links 

//rapunzel
	$(".rapunzel_title").click(function(){
		$(".sleeping_beauty_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();

		$(".snow_white_page").css("width","700px");
		$(".sleeping_beauty_page").css("width","700px");
		$(".cinderella_page").css("width","700px");
		$(".rapunzel_page").css("width","700px");

		$(".snow_white_page").css("top","100px");
		$(".sleeping_beauty_page").css("top","100px");
		$(".cinderella_page").css("top","100px");
		$(".rapunzel_page").css("top","100px");

		$(".snow_white_page").css("left","150px");
		$(".sleeping_beauty_page").css("left","150px");
		$(".cinderella_page").css("left","150px");
		$(".rapunzel_page").css("left","150px");

		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","30px");
		});

		$(".line").css("color", "black");
		$("a").css("color", "black");

	});
//sleepingbeauty
	$(".sleeping_beauty_title").click(function(){
		$(".rapunzel_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();

		$(".snow_white_page").css("width","700px");
		$(".sleeping_beauty_page").css("width","700px");
		$(".cinderella_page").css("width","700px");
		$(".rapunzel_page").css("width","700px");

		$(".snow_white_page").css("top","100px");
		$(".sleeping_beauty_page").css("top","100px");
		$(".cinderella_page").css("top","100px");
		$(".rapunzel_page").css("top","100px");

		$(".snow_white_page").css("left","150px");
		$(".sleeping_beauty_page").css("left","150px");
		$(".cinderella_page").css("left","150px");
		$(".rapunzel_page").css("left","150px");

		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

		$(".line").css("color", "black");
		$("a").css("color", "black");

	});

	//cinderella

	$(".cinderella_title").click(function(){
		$(".rapunzel_page").hide();
		$(".sleeping_beauty_page").hide();
		$(".snow_white_page").hide();

		$(".snow_white_page").css("width","700px");
		$(".sleeping_beauty_page").css("width","700px");
		$(".cinderella_page").css("width","700px");
		$(".rapunzel_page").css("width","700px");

		$(".snow_white_page").css("top","100px");
		$(".sleeping_beauty_page").css("top","100px");
		$(".cinderella_page").css("top","100px");
		$(".rapunzel_page").css("top","100px");

		$(".snow_white_page").css("left","150px");
		$(".sleeping_beauty_page").css("left","150px");
		$(".cinderella_page").css("left","150px");
		$(".rapunzel_page").css("left","150px");

		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","30px");
		});

		$(".line").css("color", "black");
		$("a").css("color", "black");

	});

	//snow white
	$(".snow_white_title").click(function(){
		$(".rapunzel_page").hide();
		$(".sleeping_beauty_page").hide();
		$(".cinderella_page").hide();

		$(".snow_white_page").css("width","700px");
		$(".sleeping_beauty_page").css("width","700px");
		$(".cinderella_page").css("width","700px");
		$(".rapunzel_page").css("width","700px");

		$(".snow_white_page").css("top","100px");
		$(".sleeping_beauty_page").css("top","100px");
		$(".cinderella_page").css("top","100px");
		$(".rapunzel_page").css("top","100px");

		$(".snow_white_page").css("left","150px");
		$(".sleeping_beauty_page").css("left","150px");
		$(".cinderella_page").css("left","150px");
		$(".rapunzel_page").css("left","150px");

		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","30px");
		});

		$(".line").css("color", "black");
		$("a").css("color", "black");

	});


//childless sleeping beauty to rapunzel 

	$("#childless_sleeping_beauty").click(function(e){
		$(".rapunzel_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".rapunzel_page").css("width","350px");
		$(".rapunzel_page").css("left","600px");
		$("#childless_rapunzel").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","45px");
		});
		$(".rapunzel_page").mouseleave(function(){
			$(".rapunzel_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});



	});

//childless rapunzel to sleeping

	$("#childless_rapunzel").click(function(e){
		$(".sleeping_beauty_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".rapunzel_page").css("width","350px");
		$(".sleeping_beauty_page").css("left","600px");
		$("#childless_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","45px");
		});
		$(".rapunzel_page").mouseleave(function(){
			$(".rapunzel_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});
//seven sleeping beauty to snow white
	$("#seven_sleeping_beauty").click(function(e){
		$(".snow_white_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".snow_white_page").css("width","350px");
		$(".snow_white_page").css("left","600px");
		$("#seven_snow_white").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});

//seven snow white to sleeping beauty 
	$("#seven_snow_white").click(function(e){
		$(".sleeping_beauty_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".snow_white_page").css("width","350px");
		$(".sleeping_beauty_page").css("left","600px");
		$("#seven_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});
//happily from rapunzel to sleeping

	$("#happily_rapunzel").click(function(e){
		$(".sleeping_beauty_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".rapunzel_page").css("width","375px");
		$(".sleeping_beauty_page").css("left","625px");
		$("#happily_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","45px");
		});
		$(".rapunzel_page").mouseleave(function(){
			$(".rapunzel_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});

	//happily from sleeping to rapunzel

		$("#happily_sleeping_beauty").click(function(e){
		$(".rapunzel_page").show();
		$(".rapunzel_page").css("width","375px");
		$(".sleeping_beauty_page").css("width","350px");
		$(".rapunzel_page").css("left","625px");
		$("#happily_rapunzel").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".rapunzel_page").mouseenter(function(){
			$(".rapunzel_title").css("font-size","45px");
		});
		$(".rapunzel_page").mouseleave(function(){
			$(".rapunzel_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});

//pricked sleeping to snow 
	$("#pricked_sleeping_beauty").click(function(e){
		$(".snow_white_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".snow_white_page").css("width","350px");
		$(".snow_white_page").css("left","600px");
		$("#pricked_snow_white").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});

//pricked snow to sleeping

	$("#pricked_snow_white").click(function(e){
		$(".sleeping_beauty_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".snow_white_page").css("width","350px");
		$(".sleeping_beauty_page").css("left","600px");
		$("#pricked_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});


//karma cinderella to snow
	$("#karma_cinderella").click(function(e){
		$(".snow_white_page").show();
		$(".cinderella_page").css("width","306px");
		$(".snow_white_page").css("width","394px");
		$(".snow_white_page").css("left","600px");
		$("#karma_snow_white").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("a").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","45px");
		});
		$(".cinderella_page").mouseleave(function(){
			$(".cinderella_title").css("font-size","30px");
		});

	});

//karma snow to cinderella
	$("#karma_snow_white").click(function(e){
		$(".cinderella_page").show();
		$(".cinderella_page").css("width","306px");
		$(".snow_white_page").css("width","394px");
		$(".cinderella_page").css("left","600px");
		$("#karma_cinderella").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("a").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","45px");
		});
		$(".cinderella_page").mouseleave(function(){
			$(".cinderella_title").css("font-size","30px");
		});

	});

	//marriage snow white

	$("#marriage_snow_white").click(function(e){
		$(".cinderella_page").show();
		$(".sleeping_beauty_page").show();

		$(".cinderella_page").css("width","230px");
		$(".snow_white_page").css("width","230px");
		$(".sleeping_beauty_page").css("width","230px");

		$(".cinderella_page").css("left","750px");
		$(".sleeping_beauty_page").css("left","450px");

		$("#marriage_cinderella").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("#marriage_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("a").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","45px");
		});
		$(".cinderella_page").mouseleave(function(){
			$(".cinderella_title").css("font-size","30px");
		});

		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});

		$("#marriage_cinderella").click(function(e){
		$(".snow_white_page").show();
		$(".sleeping_beauty_page").show();

		$(".cinderella_page").css("width","230px");
		$(".snow_white_page").css("width","230px");
		$(".sleeping_beauty_page").css("width","230px");

		$(".snow_white_page").css("left","750px");
		$(".sleeping_beauty_page").css("left","450px");

		$("#marriage_snow_white").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("#marriage_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("a").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","45px");
		});
		$(".cinderella_page").mouseleave(function(){
			$(".cinderella_title").css("font-size","30px");
		});

		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});

	$("#marriage_sleeping_beauty").click(function(e){
		$(".cinderella_page").show();
		$(".snow_white_page").show();

		$(".cinderella_page").css("width","230px");
		$(".snow_white_page").css("width","230px");
		$(".sleeping_beauty_page").css("width","230px");

		$(".snow_white_page").css("left","750px");
		$(".sleeping_beauty_page").css("left","450px");

		$("#marriage_cinderella").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("#marriage_snow_white").css("color", colors[Math.floor(Math.random()*colors.length)]);
		$("a").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
		//hover state
		$(".snow_white_page").mouseenter(function(){
			$(".snow_white_title").css("font-size","45px");
		});
		$(".snow_white_page").mouseleave(function(){
			$(".snow_white_title").css("font-size","30px");
		});
		$(".cinderella_page").mouseenter(function(){
			$(".cinderella_title").css("font-size","45px");
		});
		$(".cinderella_page").mouseleave(function(){
			$(".cinderella_title").css("font-size","30px");
		});

		$(".sleeping_beauty_page").mouseenter(function(){
			$(".sleeping_beauty_title").css("font-size","45px");
		});
		$(".sleeping_beauty_page").mouseleave(function(){
			$(".sleeping_beauty_title").css("font-size","30px");
		});

	});



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





	

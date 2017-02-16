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
		$(".snow_white_page").css("width","500px");
		$(".sleeping_beauty_page").css("width","500px");
		$(".cinderella_page").css("width","500px");
		$(".rapunzel_page").css("width","500px");

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
		
	});

	$(".once_upon_a_time").click(function(e){
		$(".homepage").show();
		$(".sleeping_beauty_page").hide();
		$(".rapunzel_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();
		$(".snow_white_page").css("width","500px");
		$(".sleeping_beauty_page").css("width","500px");
		$(".cinderella_page").css("width","500px");
		$(".rapunzel_page").css("width","500px");

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


	});

	$(".line").mouseenter(function(){
		$(this).css("color", colors[Math.floor(Math.random()*colors.length)]);
	});

//toogle links 

//rapunzel
	$(".rapunzel_title").click(function(){
		$(".sleeping_beauty_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();

		$(".snow_white_page").css("width","500px");
		$(".sleeping_beauty_page").css("width","500px");
		$(".cinderella_page").css("width","500px");
		$(".rapunzel_page").css("width","500px");

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

	});
//sleepingbeauty
	$(".sleeping_beauty_title").click(function(){
		$(".rapunzel_page").hide();
		$(".cinderella_page").hide();
		$(".snow_white_page").hide();

		$(".snow_white_page").css("width","500px");
		$(".sleeping_beauty_page").css("width","500px");
		$(".cinderella_page").css("width","500px");
		$(".rapunzel_page").css("width","500px");

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

	});

	//cinderella

	$(".cinderella_title").click(function(){
		$(".rapunzel_page").hide();
		$(".sleeping_beauty_page").hide();
		$(".snow_white_page").hide();

		$(".snow_white_page").css("width","500px");
		$(".sleeping_beauty_page").css("width","500px");
		$(".cinderella_page").css("width","500px");
		$(".rapunzel_page").css("width","500px");

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

	});

	//snow white
	$(".snow_white_title").click(function(){
		$(".rapunzel_page").hide();
		$(".sleeping_beauty_page").hide();
		$(".cinderella_page").hide();

		$(".snow_white_page").css("width","500px");
		$(".sleeping_beauty_page").css("width","500px");
		$(".cinderella_page").css("width","500px");
		$(".rapunzel_page").css("width","500px");

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

	});


//childless sleeping beauty to rapunzel 

	$(".childless_sleeping_beauty").click(function(e){
		$(".rapunzel_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".rapunzel_page").css("width","350px");
		$(".rapunzel_page").css("left","600px");
		$(".childless_rapunzel").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
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

	$(".childless_rapunzel").click(function(e){
		$(".sleeping_beauty_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".rapunzel_page").css("width","350px");
		$(".sleeping_beauty_page").css("left","600px");
		$(".childless_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
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
	$(".seven_sleeping_beauty").click(function(e){
		$(".snow_white_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".snow_white_page").css("width","350px");
		$(".snow_white_page").css("left","600px");
		$(".seven_snow_white").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
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
	$(".seven_snow_white").click(function(e){
		$(".sleeping_beauty_page").show();
		$(".sleeping_beauty_page").css("width","350px");
		$(".snow_white_page").css("width","350px");
		$(".sleeping_beauty_page").css("left","600px");
		$(".seven_sleeping_beauty").css("color", colors[Math.floor(Math.random()*colors.length)]);
		
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





	

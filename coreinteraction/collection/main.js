var alphabet = ['A', 'B','C','D','E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D']
var container = document.getElementById("container");

for (var i = 1; i < 36; i++) {
	var divToInsert =  document.createElement("div");
	container.appendChild(divToInsert);
	divToInsert.className = "letterBox";
	divToInsert.id = i;
}



var allTheDivs = document.getElementsByClassName("letterBox");
var clones = 

_.each(allTheDivs, function(individual, index){
//APPLY TO ALL
	if (individual.id < 31) {
		individual.innerHTML = alphabet[index];
		individual.style.color = "black";
		individual.style.fontSize = "75px";
		individual.style.fontFamily = "Helvetica";
		individual.style.textAlign = "center";
		individual.addEventListener("mouseover", function(){
			individual.style.boxShadow = "4px 4px 2px #DDDDDD"; 
		});
	} else if (individual.id > 30) {
		individual.style.backgroundColor = "#F4F4F4";
	}

//COLUMN 1
	if (individual.id % 5 == 1) {
		individual.addEventListener("click", function(){
			$(individual).addClass ("growing");
			$(individual).removeClass ("shrinking");
		});
		individual.addEventListener("mouseleave", function(){
			$(individual).addClass ("shrinking");
			$(individual).removeClass ("growing");
			individual.style.boxShadow = "none";
		});
	}
//COLUMN 2
	
	if (individual.id % 5 == 2) {
		individual.addEventListener("click", function(){
			$(individual).addClass ("growing");
			$(individual).removeClass ("shrinking");
		});
		individual.addEventListener("mouseleave", function(){
			$(individual).addClass ("shrinking");
			$(individual).removeClass ("growing");
			individual.style.boxShadow = "none";
		});
	}

//COLUMN 3

	if (individual.id % 5 == 3) {
		individual.addEventListener("click", function(){
			$(individual).addClass ("growing");
			$(individual).removeClass ("shrinking");
		});
		individual.addEventListener("mouseleave", function(){
			$(individual).addClass ("shrinking");
			$(individual).removeClass ("growing");
			individual.style.boxShadow = "none";
		});
		
	}

//COLUMN 4


	if (individual.id % 5 == 4) {
		individual.addEventListener("click", function(){
			$(individual).addClass ("growing");
			$(individual).removeClass ("shrinking");
			var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
			var removed = $(searchselector).detach();
			removed.insertAfter($("#" + individual.id));
		});
		individual.addEventListener("mouseleave", function(){
			$(individual).addClass ("shrinking");
			$(individual).removeClass ("growing");
			var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
			var removed = $(searchselector).detach();
			removed.insertBefore($("#" + individual.id));
			var theOneToTheRight = "#" + (individual.id + 1);
			var putBack = $(individual.id).detach();
			individual.style.boxShadow = "none";

			putBack.insertBefore($("#" + theOneToTheRight)); 


		});

	}

//COLUMN 5

	if (individual.id % 5 == 0) {

		individual.addEventListener("click", function(){
			$(individual).addClass ("growing");
			$(individual).removeClass ("shrinking");
			var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
			var removed = $(searchselector).detach();
			removed.insertAfter($("#" + individual.id));
			if ($(".letterBox").hasClass("growing")) {
				individual.addEventListener("click", function(){
					
				});
	}


		});

		individual.addEventListener("mouseleave", function(){
			$(individual).addClass ("shrinking");
			$(individual).removeClass ("growing");

			var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
			var removed = $(searchselector).detach();
			removed.insertBefore($("#" + individual.id));

			var theOneToTheRight = "#" + (individual.id + 1);
			var putBack = $(individual.id).detach();
			individual.style.boxShadow = "none";

			putBack.insertBefore($("#" + theOneToTheRight)); 


		});

	}

	// if (individual.innerWidth == "56vw") {
	// 	console.log("hello");
	// }


});


	




//animation




// var filterSelect = document.getElementById ("filterSelect");
// console.log(collection);


//click, expansion, and unexpand 



// function goRight () {
// 	allTheDivs.
// }


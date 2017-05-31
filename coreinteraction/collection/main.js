var alphabet = ['A', 'B','C','D','E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D']
var container= document.getElementById("container");
var holder= document.getElementById("holder");
var extraSpace = document.getElementById("extraSpace");
var definitionPage = document.getElementById("definitionPage");
var home = document.getElementById("home");
var squares = document.getElementsByClassName("square"); 
var clones = document.getElementsByClassName("copy");
var allTheDivs = document.getElementsByClassName("letterBox");
var everything = document.getElementsByClassName("all"); 
var onloadContainer = document.getElementById("onloadContainer");



//ONLOAD FUNCTION 



setTimeout(homepageFade,5);


function homepageFade () {
	onloadContainer.style.display = "none";

}


//MAKING ORIGINALS AND CLONES AND SETTING IMAGES FOR ORIGINALS
for (var i = 1; i < 31; i++) {

	

	var divToInsert =  document.createElement("div");
	container.appendChild(divToInsert);
	divToInsert.className = "letterBox all";
	divToInsert.id = i;

	var copyDivToInsert =  document.createElement("div");
	container.appendChild(copyDivToInsert);
	copyDivToInsert.className = "copy all";
	copyDivToInsert.id = i + "copy";

	var image = document.createElement("img");
	image.src = collection[i-1].single;
	$(image).addClass("smallerImage");

	// console.log(image.src);
	var letterBox = document.querySelector(".letterBox"); 

	var one = document.getElementById(i); 
	one.appendChild(image);

}

//SETTING IMAGES FOR CLONES
for (var i = 1; i < 31; i++) {

	var image = document.createElement("img");
	image.src = collection[i-1].single;
	$(image).addClass("smallerImage");
	var two = document.getElementById(i + "copy"); 
	two.appendChild(image);
	// console.log(two);

}

//CLICKHANDLER

function clickhandler(whichcolumn, individual) {

	individual.addEventListener("mouseleave", mouseleavehandler);
	
	if ($(individual).hasClass("growing")) {

	var theoneyouclickedon =_.where(collection, {letternumber: individual.dataset.letternumber});
	linkout(theoneyouclickedon);
	addInfo(individual.id); 


	}

	//COLUMN 1
	if (individual.id % 5 == 1) {
		$(individual).addClass ("growing");
		$(individual).removeClass ("shrinking");
	}

	//COLUMN 2
	if (whichcolumn == 2) {
		$(individual).addClass ("growing");
		$(individual).removeClass ("shrinking");
	}

	//COLUMN 3

	if (whichcolumn == 3) {
		$(individual).addClass ("growing");
		$(individual).removeClass ("shrinking");

	}

	//COLUMN 4 

	if (whichcolumn == 4) {
		$(individual).addClass ("growing");
		$(individual).removeClass ("shrinking");

		var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) +", #" + (individual.id - 2) + "copy , #" + (individual.id - 1) +"copy" ;

		var removed = $(searchselector).detach();
		removed.insertAfter($("#" + individual.id));
	}

	//COLUMN 5

	if (whichcolumn==0) {
		individual.addEventListener("click", function(){
			$(individual).addClass ("growing");
			$(individual).removeClass ("shrinking");
			var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) + ", #" + (individual.id - 2) + "copy , #" + (individual.id - 1) + "copy";
			var removed = $(searchselector).detach();
			removed.insertAfter($("#" + individual.id));
		});

	}

}



//MOUSELEAVEHANDLER
function mouseleavehandler(e) { 

	var individual = e.target;
	var whichcolumn = individual.id % 5; 

	individual.removeEventListener("mouseleave", mouseleavehandler);
	individual.removeEventListener("click", linkout);

	//COLUMN 1
	if (whichcolumn == 1) {
		var theFirstSqaure = individual.id - (-3);

		for (var i = theFirstSqaure; i < 31; i += 5 ) {
			var firstCopies = document.getElementById(i + "copy");	
			$(firstCopies).addClass("show");
			$(firstCopies).addClass("aFirstCopy");

			var firstOriginals = document.getElementById(i); 
			$(firstOriginals).addClass("hide");
			$(firstOriginals).addClass("aFirstOriginal");
		}

		var theSecondSquare = individual.id -(-4); 

		for (var i = theSecondSquare; i < 29; i+= 5) {
			var secondCopies = document.getElementById(i + "copy");
			$(secondCopies).addClass("show");
			$(secondCopies).addClass("aSecondCopy");

			var secondOriginals = document.getElementById(i);
			$(secondOriginals).addClass("hide");
			$(secondOriginals).addClass("aSecondOriginal");
		}

		setTimeout(applyToFirstSquares, 5);
		setTimeout(applyToSecondSquares, 1200);


		$(individual).addClass("shrinking");
		$(individual).removeClass("growing");
		
		setTimeout(removeClasses, 3000);

	}

	//COLUMN 2
	if (whichcolumn == 2) {

		var theFirstSqaure = individual.id - (-2);

		for (var i = theFirstSqaure; i < 31; i += 5 ) {
			var firstCopies = document.getElementById(i + "copy");	
			$(firstCopies).addClass("show");
			$(firstCopies).addClass("aFirstCopy");

			var firstOriginals = document.getElementById(i); 
			$(firstOriginals).addClass("hide");
			$(firstOriginals).addClass("aFirstOriginal");
		}

		var theSecondSquare = individual.id -(-3); 

		for (var i = theSecondSquare; i < 29; i+= 5) {
			var secondCopies = document.getElementById(i + "copy");
			$(secondCopies).addClass("show");
			$(secondCopies).addClass("aSecondCopy");

			var secondOriginals = document.getElementById(i);
			$(secondOriginals).addClass("hide");
			$(secondOriginals).addClass("aSecondOriginal");
		}

		setTimeout(applyToFirstSquares, 5);
		setTimeout(applyToSecondSquares, 1200);

		$(individual).addClass("shrinking");
		$(individual).removeClass("growing");
		
		setTimeout(removeClasses, 3000);

	}

	//COLUMN 3
	if (whichcolumn == 3) {

		var theFirstSqaure = individual.id - (-1);

		for (var i = theFirstSqaure; i < 31; i += 5 ) {
			var firstCopies = document.getElementById(i + "copy");	
			$(firstCopies).addClass("show");
			$(firstCopies).addClass("aFirstCopy");

			var firstOriginals = document.getElementById(i); 
			$(firstOriginals).addClass("hide");
			$(firstOriginals).addClass("aFirstOriginal");
		}

		var theSecondSquare = individual.id -(-2); 

		for (var i = theSecondSquare; i < 29; i+= 5) {
			var secondCopies = document.getElementById(i + "copy");
			$(secondCopies).addClass("show");
			$(secondCopies).addClass("aSecondCopy");

			var secondOriginals = document.getElementById(i);
			$(secondOriginals).addClass("hide");
			$(secondOriginals).addClass("aSecondOriginal");
		}

		setTimeout(applyToFirstSquares, 5);
		setTimeout(applyToSecondSquares, 1200);

		setTimeout(removeClasses, 3000);



		$(individual).addClass("shrinking");
		$(individual).removeClass("growing");

	}

	//COLUMN 4

	if (whichcolumn == 4) {

		function individualShrink() {
			$(individual).addClass ("shrinking");
			$(individual).removeClass ("growing");
		}


		//detaching and shit

		var searchselectorOG = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
		var removedOG = $(searchselectorOG).detach();

		var theOneToTheRight = "#" + (individual.id - (-1));
		var putBack = $(individual.id).detach();

		putBack.insertBefore($(theOneToTheRight)); 
		removedOG.insertBefore($("#" + individual.id));
		
		var RemovedFirst =  "#" + (individual.id - 2) + "copy"; 
		var RemovedSecond =  "#" + (individual.id - 1) + "copy";

		//calling the copies 


		var theFirstSqaure = individual.id - 2;
		var theSecondSquare = individual.id - 1; 
		var theThirdSqaure = individual.id - (-1); 

		var firstCopy = document.getElementById(theFirstSqaure + "copy");
		var secondCopy = document.getElementById(theSecondSquare + "copy");
		var thirdCopy = document.getElementById(theThirdSqaure + "copy");

		var firstOriginal= document.getElementById(theFirstSqaure);
		var secondOriginal = document.getElementById(theSecondSquare);
		var thirdOriginal = document.getElementById(theThirdSqaure);

		$(firstCopy).addClass("aFirstCopy");
		$(secondCopy).addClass("aSecondCopy");
		$(thirdCopy).addClass("aThirdCopy");


		$(firstCopy).addClass("show");
		$(secondCopy).addClass("show");
		$(thirdCopy).addClass("show");

		$(firstOriginal).addClass("aFirstOriginal");
		$(secondOriginal).addClass("aSecondOriginal");
		$(thirdOriginal).addClass("aThirdOriginal");


		$(firstOriginal).addClass("hide");
		$(secondOriginal).addClass("hide");
		$(thirdOriginal).addClass("hide");

		var theNextOneInSecondLoop = document.getElementById(secondOriginal + 6);
		var theNextOneInThirdLoop = document.getElementById(thirdOriginal + 6);

		for (var i = theNextOneInSecondLoop; i < 31; i+= 5) {
			var secondCopies = document.getElementById(i + "copy");
			$(secondCopies).addClass("show");
			$(secondCopies).addClass("aThirdCopy");

			var secondOriginals = document.getElementById(i);
			$(secondOriginals).addClass("hide");
			$(secondOriginals).addClass("aThirdOriginal");
		}

		for (var i = theNextOneInThirdLoop; i < 29; i+= 5) {
			var thirdCopies = document.getElementById(i + "copy");
			$(thirdCopies).addClass("show");
			$(thirdCopies).addClass("aThirdCopy");

			var thirdOriginals = document.getElementById(i);
			$(thirdOriginals).addClass("hide");
			$(thirdOriginals).addClass("aThirdOriginal");
		}




		//timeouts
		setTimeout(individualShrink, 1200);
		setTimeout(applyToFirstSquares, 5);
		setTimeout(applyToSecondSquares, 1200);
		setTimeout(resetCopies, 4000);
		setTimeout(removeClasses, 4000);
		setTimeout(applyToThirdSquares, 2400);


		function resetCopies() {
			var removedFirstCopy= $(RemovedFirst).detach();
			removedFirstCopy.insertBefore($("#" + (individual.id - 2)));
			var removedSecondCopy= $(RemovedSecond).detach();
			removedFirstCopy.insertBefore($("#" + (individual.id - 1)));
 


		}
	}

	//COLUMN 5 


	if (whichcolumn == 0) {

		$(individual).addClass ("shrinking");
		$(individual).removeClass ("growing");

		//detaching and shit

		var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
		var removed = $(searchselectorOG).detach();

		var theOneToTheRight = "#" + (individual.id - (-1));
		var putBack = $(individual.id).detach();
		putBack.insertBefore($(theOneToTheRight)); 
		removedOG.insertBefore($("#" + individual.id));
		
		var removedFirst =  "#" + (individual.id - 2) + "copy"; 
		var removedSecond =  "#" + (individual.id - 1) + "copy";

		//calling the copies 


		var theFirstSqaure = individual.id - 2;
		var theSecondSquare = individual.id - 1; 
		// var theThirdSqaure = individual.id - (-1); 

		var firstCopy = document.getElementById(theFirstSqaure + "copy");
		var secondCopy = document.getElementById(theSecondSquare + "copy");


		var firstOriginal= document.getElementById(theFirstSqaure);
		var secondOriginal = document.getElementById(theSecondSquare);


		$(firstCopy).addClass("aFirstCopy");
		$(secondCopy).addClass("aSecondCopy");



		$(firstCopy).addClass("show");
		$(secondCopy).addClass("show");


		$(firstOriginal).addClass("aFirstOriginal");
		$(secondOriginal).addClass("aSecondOriginal");



		$(firstOriginal).addClass("hide");
		$(secondOriginal).addClass("hide");

		console.log(secondOriginal);


		var theNextOneInFirstLoop = document.getElementById(firstOriginal + 6);
		var theNextOneInSecondLoop = document.getElementById(secondOriginal + 6);

		for (var i = theNextOneInFirstLoop; i < 31; i+= 5) {
			var firstCopies = document.getElementById(i + "copy");
			$(firstCopies).addClass("show");
			$(firstCopies).addClass("aFirstCopy");

			var firstOriginals = document.getElementById(i);
			$(firstOriginals).addClass("hide");
			$(firstOriginals).addClass("aFirstOriginal");
		}

		for (var i = theNextOneInSecondLoop; i < 31; i+= 5) {
			var secondCopies = document.getElementById(i + "copy");
			$(secondCopies).addClass("show");
			$(secondCopies).addClass("aSecondCopy");

			var secondOriginals = document.getElementById(i);
			$(secondOriginals).addClass("hide");
			$(secondOriginals).addClass("aSecondOriginal");
		}




		//timeouts
		// setTimeout(individualShrink, 1200);
		setTimeout(applyToFirstSquares, 5);
		setTimeout(applyToSecondSquares, 1200);
		setTimeout(resetCopies, 2500);
		setTimeout(removeClasses, 2500);
		// setTimeout(applyToThirdSquares, 2400);


		function resetCopies() {
			var removedFirstCopy= $(removedFirst).detach();
			removedFirstCopy.insertAfter($("#" + (individual.id - (-3))));
			var removedSecondCopy= $(removedSecond).detach();
			removedFirstCopy.insertBefore($("#" + (individual.id)));
 


		}

	}




}




//where are the copies going



//EACH ALL THE DIVS


_.each(allTheDivs, function(individual, index) {
//SETTING STYLES FOR ORIGINALS

	if (individual.id < 31) {
		individual.addEventListener("mouseover", function(){
			individual.style.boxShadow = "4px 4px 2px #DDDDDD"; 
		});

	} else if (individual.id > 31) {
		individual.style.backgroundColor = "#F4F4F4";
	} 

	individual.addEventListener("click", function(){
		clickhandler(individual.id % 5, individual);
	});

	individual.dataset.letternumber = collection[index].letternumber;

});



//LINKOUT
function linkout(individual_datapoint) {
	var thething = individual_datapoint[0];

	var pron = document.querySelector(".pronunciation");
	pron.innerText = individual_datapoint[0].pronunciation;

	var def = document.querySelector(".definition");
	def.innerText = individual_datapoint[0].definition;

	var quote = document.querySelector(".quote");
	quote.innerText = individual_datapoint[0].quote;

	var definitionWordClass = document.querySelector(".wordClass");
	definitionWordClass.innerText = individual_datapoint[0].wordClass;

	var pictureOfWord = document.querySelector(".wordClass");
	definitionWordClass.innerText = individual_datapoint[0].wordClass;

	var pictureOfWord = document.querySelector(".word");
	pictureOfWord.innerHTML = "<img src = '" + individual_datapoint[0].whole + "' class = 'largerImage'></img>";

	container.style.display = "none";
	definitionPage.style.display = "inline-block";



	document.body.style.backgroundColor = "#" + thething.color; 
	var extraSpace = document.getElementById("extraSpace"); 
	extraSpace.style.backgroundColor = "#" + thething.color; 

		
}


//HOME BUTTON

home.addEventListener("click", function() {
	container.style.display = "inline-block";
	definitionPage.style.display = "none";
	document.body.style.backgroundColor = "#F4F4F4"; 
	extraSpace.style.backgroundColor = "#F4F4F4"; 

	

}); 


//FUNCTIONZZZZ


function removeClasses() {
	$(".aFirstCopy").removeClass("squareshrink show aFirstCopy");
	$(".aFirstOriginal").removeClass("squaregrow hide aFirstOriginal");
	$(".aSecondOriginal").removeClass("squaregrow hide aSecondOriginal");
	$(".aSecondCopy").removeClass("squareshrink show aSecondCopy");
	$(".athirdOriginal").removeClass("squaregrow hide aThirdOriginal");
	$(".athirdCopy").removeClass("squareshrink show aThirdCopy");
	// $(individual).removeClass ("shrinking");
	// $(individual).removeClass ("growing");
	$(".shrinking").removeClass ("shrinking");
}

function applyToFirstSquares() {
	$(".aFirstCopy").addClass("squareshrink");
	$(".aFirstOriginal").addClass("squaregrow");
}

function applyToSecondSquares() {
	$(".aSecondCopy").addClass("squareshrink");
	$(".aSecondOriginal").addClass("squaregrow");
	
}

function applyToThirdSquares() {
	$(".aThirdCopy").addClass("squareshrink");
	$(".aThirdOriginal").addClass("squaregrow");
	
}



var filterSelect = document.getElementById("filterSelect");
var filterMode = "all";

filterSelect.addEventListener("change", function(e){
	filterMode = filterSelect.value;
	update();
	// console.log(filterMode);
});


//FILTERING

function update () {


	if(filterMode != "all"){
		grabWordsByClass(filterMode);
	}

	if (filterMode == "all") {
		$(".all").removeClass("dim");
	}

	var filtered = _.filter(collection, function(p){
		return p.wordClass.includes(filterMode);
		console.log(filtered);
		if (filtered = "adjective") {
			p.wordClass.index0f(filterSelect) >=0;
		}
		console.log() 

	});

}

function grabWordsByClass(whichclass) {
	var list = _.where(collection, {wordClass:whichclass});
	addWordClassClasses(list);	
}



function addWordClassClasses (filteredList) {
	$(".all").addClass("dim"); 

	_.each(filteredList, function(el, ix) {
	var filteredWordClasses = $('*[data-letternumber="'+ el.letternumber + '"]').addClass(el.wordClass);
	filteredWordClasses.removeClass("dim");

	});
}


update();

function addInfo(id) {
	var example = _.where(collection, {letternumber: id});

}







//for individual look for if class list has that letternumber 
// _(ELEMENT.classList).contains(letternumber);

var alphabet = ['A', 'B','C','D','E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D']
var container= document.getElementById("container");
var holder= document.getElementById("holder");
var extraSpace = document.getElementById("extraSpace");
var definitionPage = document.getElementById("definitionPage");
var home = document.getElementById("home");
var squares = document.getElementsByClassName("square"); 

// home.addEventListener("mouseover", function(){

// 	// $(".square").style.boxShadow = "10px 10px 5px #black";
// 	// squares.style.boxShadow = "10px 10px 5px #black";
// });

//MAKING ORIGINALS AND CLONES
for (var i = 1; i < 31; i++) {

	

	var divToInsert =  document.createElement("div");
	container.appendChild(divToInsert);
	divToInsert.className = "letterBox all";
	divToInsert.id = i;
	// addImages(); 


	var copyDivToInsert =  document.createElement("div");
	container.appendChild(copyDivToInsert);
	copyDivToInsert.className = "copy all";
	copyDivToInsert.id = i + "copy";

	//this is where I am trying to append my image

	var image = document.createElement("img");
	image.src = collection[i-1].single;
	$(image).addClass("smallerImage");

	console.log(image.src);
	var letterBox = document.querySelector(".letterBox"); 

	var one = document.getElementById(i); 
	one.appendChild(image);


	// var two = document.getElementById(i + "copy"); 
	// two.appendChild(image);

	

	// img.style.width = "18vw";
	// img.style.height = "18vw";

}

	// var newDiv = document.createElement("div"); 
	// holders.appendChild(newDiv);







// var letterBox = document.querySelector(".letterBox");

// function addImages(individual_datapoint) {
// 	individual.dataset.letternumber = collection[index].letternumber;
// 	letterBox.innerHTML = '<img src =' + individual_datapoint[0].single + "/>";
// }


// var def = document.querySelector(".definition");
// 	def.innerText = individual_datapoint[0].definition;


 

var clones = document.getElementsByClassName("copy");
var allTheDivs = document.getElementsByClassName("letterBox");
var everything = document.getElementsByClassName("all"); 









function clickhandler(whichcolumn, individual) {

	// console.log("click handler:", whichcolumn);

	// var pictureOfWord = document.querySelector(".wordClass");
	// individual.innerText = individual_datapoint[0].wordClass;



	individual.addEventListener("mouseleave", mouseleavehandler);
	// extraSpace.width = "54vw";s

	if ($(individual).hasClass("growing")) {

	var theoneyouclickedon =_.where(collection, {letternumber: individual.dataset.letternumber});
	console.log(theoneyouclickedon);


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
		console.log(searchselector);
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




function mouseleavehandler(e) {


	// console.log("mouse leave handler");

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

				// var firstSquaresToAnimate = "#" + (individual.id - (-3)) + ", #" + (individual.id - (-8)) + ", #" + (individual.id - (-13)) + ", #" + (individual.id - (-18)) + ", #" + (individual.id - (-23));
					// console.log(firstSquaresToAnimate);
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

	//Reset/remove classes



	//COLUMN 4

	if (whichcolumn == 4) {
		$(individual).addClass ("shrinking");
		$(individual).removeClass ("growing");



		var searchselectorOG = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
		var RemovedFirst =  "#" + (individual.id - 2) + "copy"; 


		var removedOG = $(searchselectorOG).detach();
		var theOneToTheRight = "#" + (individual.id - (-1));
		var putBack = $(individual.id).detach();
		putBack.insertBefore($(theOneToTheRight)); 


		removedOG.insertBefore($("#" + individual.id));
		var removedFirstCopy= $(RemovedFirst).detach();
		removedFirstCopy.insertBefore($("#" + (individual.id - 2)));

		var RemovedSecond =  "#" + (individual.id - 1) + "copy";
		var removedSecondCopy= $(RemovedSecond).detach();
		removedFirstCopy.insertBefore($("#" + (individual.id - 1)));
 

		individual.style.boxShadow = "none";


		var theFirstSqaure = individual.id -2;
		var theSecondSquare = individual.id -1; 

		var firstCopy = document.getElementById(theFirstSqaure + "copy");
		var SecondCopy = document.getElementById(theSecondSquare + "copy");
		$(firstCopy).addClass("aFirstCopy");
		$(SecondCopy).addClass("aSecondCopy");
		$(firstCopy).addClass("show");
		$(SecondCopy).addClass("show");


		var firstOriginal= document.getElementById(theFirstSqaure);
		var SecondOriginal = document.getElementById(theSecondSquare);
		$(firstOriginal).addClass("aFirstOriginal");
		$(firstOriginal).addClass("aSecondOriginal");
		$(firstOriginal).addClass("hide");
		$(SecondOriginal).addClass("hide");



		setTimeout(applyToFirstSquares, 5);
		setTimeout(applyToSecondSquares, 1200);

		setTimeout(removeClasses, 3000);
	}

	//COLUMN 5 


	if (whichcolumn == 0) {
		var firstToClose = "#" + (individual.id - 2);
		var secondToClose = "#" + (individual.id - 1);

		console.log(firstToClose, secondToClose);

		$(individual).addClass ("shrinking");
		$(individual).removeClass ("growing");

		var searchselector = "#" + (individual.id - 2) + ", #" + (individual.id - 1) ;
		var removed = $(searchselector).detach();
		removed.insertBefore($("#" + individual.id));

		var theOneToTheRight = "#" + (individual.id + 1);
		var putBack = $(individual.id).detach();
		individual.style.boxShadow = "none";
		putBack.insertBefore($("#" + theOneToTheRight)); 

	}


}




//EACH ALL THE DIVS

// _.each(clones, function(individual, index){
// 	// individual.innerHTML = alphabet[index];
// });

_.each(allTheDivs, function(individual, index) {
//SETTING STYLES FOR ORIGINALS

	if (individual.id < 31) {
		//individual.innerHTML = alphabet[index];
		// image.src = "images/" + individual.id + ".jpg"
		// individual.innerHTML = image.src



		individual.addEventListener("mouseover", function(){
			individual.style.boxShadow = "4px 4px 2px #DDDDDD"; 
		});

	} else if (individual.id > 31) {
		individual.style.backgroundColor = "#F4F4F4";
	} 

	individual.addEventListener("click", function(){
		clickhandler(individual.id % 5, individual);
		// console.log(clickhandler);
	});

	//MOUSELEAVE

	individual.dataset.letternumber = collection[index].letternumber;

});

//link out function

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


	// var theWordText = document.querySelector(".theWordText");
	// theWordText.innerText = individual_datapoint[0].word;

	// var image = document.createElement("img");
	// image.src = collection[i-1].whole; 


		var pictureOfWord = document.querySelector(".word");
		pictureOfWord.innerHTML = "<img src = '" + individual_datapoint[0].whole + "' class = 'largerImager'></img>";
		// pictureOfWord.style.height = "18vw";
		// pictureOfWord

		// img.style.width = "56vw";
		// img.style.height = "18vw";



	

	// pictureOfWord.appendChild(image);


	container.style.display = "none";
	definitionPage.style.display = "inline-block";


		
}

home.addEventListener("click", function() {
	container.style.display = "inline-block";
	definitionPage.style.display = "none";

}); 



//contains 
//if my collection contains adjectives give me the id of that







		// console.log("FROM THE EVENT", event.target.dataset.letternumber);
function removeClasses() {
	// document.querySelector("copy").width = "0";
	$(".aFirstCopy").removeClass("squareshrink show aFirstCopy");
	$(".aFirstOriginal").removeClass("squaregrow hide aFirstOriginal");
	$(".aSecondOriginal").removeClass("squaregrow hide aSecondOriginal");
	$(".aSecondCopy").removeClass("squareshrink show aSecondCopy");
}

function applyToFirstSquares() {
	$(".aFirstCopy").addClass("squareshrink");
	$(".aFirstOriginal").addClass("squaregrow");
}

function applyToSecondSquares() {
	$(".aSecondCopy").addClass("squareshrink");
	$(".aSecondOriginal").addClass("squaregrow");
	
}

var filterSelect = document.getElementById("filterSelect");
var filterMode = "all";

filterSelect.addEventListener("change", function(e){
	filterMode = filterSelect.value;
	update();
	console.log(filterMode);
});

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

// var allTheAdjectives = 
// var allTheNouns = _.where(collection, {wordClass:"noun"});
// var allTheVerbs = _.where(collection, {wordClass:"verb"});

// console.log(allTheAdjectives);


function addWordClassClasses (filteredList) {
	$(".all").addClass("dim"); 


	console.log(filteredList);
	_.each(filteredList, function(el, ix) {
	var filteredWordClasses = $('*[data-letternumber="'+ el.letternumber + '"]').addClass(el.wordClass);
	filteredWordClasses.removeClass("dim");

	});


	// $(allTheVerbs).addClass("verbs");
	// $(allTheAdjectives).addClass("adjectives");
	// $(allTheNouns).addClass("nouns");
}


update();

function addInfo(id) {
	//earse out with ""
	//where?
	var example = _.where(collection, {letternumber: id});
	//in t

}

// var found = _.where(collection,)

//use if statements then letternumber as id to target the different squares




// var url = "definition" + event.target.dataset.letternumber + ".html"
//run definition based on letter number and link out to definition.html 

// console.log(event.currentTarget.id);
// if ($(individual).hasClass("growing")) {

// console.log("hello");
// }




//passing counterthru function 





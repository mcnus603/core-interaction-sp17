var blindfold = document.getElementById("blindfold");
var donkey = document.getElementById("donkey");
var final = document.getElementById("final");
var spinning = document.getElementById("spinning");
var tail = document.getElementById("tail");
var dot = document.getElementById("dot");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var wagging = document.getElementById("wagging");

var x = 0;
var y = 0;

var width = window.innerWidth;
var height = window.innerHeight;

var horizontal = dot.offsetLeft; 
var vertical = dot.offsetTop;

var finalHorizontal = 0;
var finalVertical = 0;


var c = Math.abs(horizontal - finalHorizontal);
var d = Math.abs(vertical - finalVertical); 
var finalDistance = c + d;



var a = Math.abs(x - horizontal);
var b = Math.abs (y - vertical);
var distance = a + b;

var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var instructions = document.getElementById("instructions");
var restart = document.getElementById("restart");

var boo = new Audio ();
boo.src = "img/boo.mp3"
var yay = new Audio ();
yay.src = "img/yay.mp3"
var whirl = new Audio ();
whirl.src = "img/whirl.mp3"
var toPin = document.getElementById("toPin");

var winner = document.getElementById("winner");
var loser = document.getElementById("loser");


window.addEventListener("mousemove", function(e){
	x = e.clientX;
	y = e.clientY;

	tail.style.top = e.clientY - 12 + "px";
    tail.style.left = e.clientX - 24 + "px";

    // console.log(x, y);

})


//tail as mouse 


 if (tail.style.display = "none") {
 	blue.style.display = "none";
 	red.style.display = "none";
 	blindfold.style.backgroundColor = "black";
 }

function tailAndColor(e) {

    x = e.clientX;
	y = e.clientY;

	a = Math.abs(x - horizontal);
	b = Math.abs (y - vertical);
	distance = a + b;

    tail.style.top = e.clientY - 12 + "px";
    tail.style.left = e.clientX - 24 + "px";

    	if (distance > 255) {	
    		blindfold.style.backgroundColor = "rgb(" + Math.abs(510-distance) + "," + Math.abs(510-distance) + ", 255)";
    		blue.style.display = "inline";
   		 } else {
    		blue.style.display = "none";
    	}

    	if (distance < 255) {
    		red.style.display = "inline";
    		blindfold.style.backgroundColor = "rgb(255," + distance + "," + distance + ")";
    	} else {
    		red.style.display = "none";
    	}

    	if (distance > 510) {
    		blindfold.style.backgroundColor = "rgb(0, 0, 255)";

    }
    

};

//resizing

function onResize(e){

	width = window.innerWidth;
	height = window.innerHeight;

	horizontal = dot.offsetLeft; 
	vertical = dot.offsetTop;

	vxdif = (width - horizontal) / 2; 
	ydif = (height - vertical) / 2; 

	redLeft = horizontal - xdif;
	redRight = horizontal + xdif;
	redUp = vertical - ydif; 
	redDown = vertical + xdif;

	// if clientX is between redLeft and redRight, show red
	//if clientY is between redUp and redDown show red

}

//pressing spacebar

window.addEventListener("keydown", function(e) {
	if(e.keyCode == 32){
		spinning.style.display = "inline";
		instructions.style.display = "none";
		whirl.play();
	}


});

window.addEventListener("keyup", function(e) {
	if(e.keyCode == 32){

		spinning.style.display = "none";
		easy.style.display = "inline";
		hard.style.display = "inline";
		whirl.pause();


	}

});

easy.addEventListener("click", function(e){

	window.addEventListener("mousemove",tailAndColor);
	tail.style.display = "inline";

	easy.style.display = "none";
	hard.style.display = "none";

	toPin.style.display = "inline";
		setTimeout(function(){

		toPin.style.display = "none"; 

}, 2000)
})

hard.addEventListener("click", function(e){

	tail.style.display = "inline";
	easy.style.display = "none";
	hard.style.display = "none";

	toPin.style.display = "inline";
	setTimeout(function(){

		toPin.style.display = "none"; 

}, 1500)
})



if (donkey.style.display == "block") {
	tail.style.display = "none";
	spinning.style.display = "none";
}

if (donkey.style.display == "inline") {
	tail.style.display = "none";
	spinning.style.display = "none";
}





//donkey disappears

setTimeout(function(){

	donkey.style.display = "none"; 
 	blindfold.style.display = "inline";
 	instructions.style.display = "inline";
 	// document.body.backgroundColor = "black";

}, 1000)


//when the tail is pined

	tail.addEventListener("click", function(e){

	tail.style.display = "none";

	wagging.style.display = "block";
	wagging.style.top = e.y + "px";
 	wagging.style.left = e.x - 200 + "px";
 	// wagging.load();

 	setTimeout(function(){
 		tailX = e.clientX -20;
 		tailY = e.clientY + 9;

 		wagging.style.display = "none";
 		final.style.display = "inline";
 		final.style.top = tailY + "px";
 		final.style.left = tailX +"px";

 		restart.style.display = "inline";


 	},2340)

	donkey.style.display = "inline"; 
	blindfold.style.display="none";

	horizontal = dot.offsetLeft; 
 	vertical = dot.offsetTop;

	spinning.style.display = "none";

	finalHorizontal = e.clientX
	finalVertical = e.clientY

	c = Math.abs(finalHorizontal - horizontal);
	d = Math.abs(finalVertical - vertical); 
	finalDistance = c + d;

	// console.log(finalDistance);

	if (c < 20 && d < 40) {
		yay.play();
		winner.style.display = "inline";
	}

	else {
		boo.play();
		loser.style.display = "inline";
	}

	

	console.log(finalHorizontal , finalVertical);
	console.log(horizontal , vertical);
	console.log(c, d);


});


restart.addEventListener("click", function(e){

	window.location.reload();
});



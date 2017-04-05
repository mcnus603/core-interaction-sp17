var wrapper = document.querySelector(".saranwrap");
var box = document.getElementById("box");
var width = window.innerWidth;
var height = window.innerHeight;


// for (i = 0; i < 4; i++) {
// 	console.log(i);
// 	var divtoinsert = document.createElement("div");
// 	divtoinsert.classList.add("box", "divnumber" + i);
	

// 	// if (i % 2 === 0) {
// 	// 	divtoinsert.classList.add("hovered");
// 	// } 

// 	wrapper.appendChild(divtoinsert);
// }

// window.onload = function(e) {

// box.style.top = height / 10 + "px";
// box.style.left = width / 10 +"px";

// }

window.addEventListener("keydown", function(e){
	if (e.keyCode == "32") {
		box.style.border = "100px solid black";
		console.log("hello");
		box.style.width = "20px";
	}
});

box.addEventListener("click", function(e){
	box.style.width = "300px";
	box.style.border = "10px solid white";
})


window.addEventListener("mousemove", function(e){
	x = e.clientX; 
	y = e.clientY;

	document.body.style.backgroundColor = "rgb( 150, " + x + "," + y + ")";
	box.style.backgroundColor = "rgb(" + x + ", 120," + y + ")";


});





window.addEventListener("resize", function(e){
	width = window.innerWidth;
	height = window.innerHeight;
	box.style.top = height / 2 + "px";
	box.style.left = width / 2 +"px";




});


// allthedivs.forEach(addlisteners);

// window.addEventListener("click", function(e){
// 	// var divtoinsert = document.createElement("div");
// 	// divtoinsert.classList.add("box", "divnumber" + i);
// 	// wrapper.appendChild(divtoinsert);
// 	console.log(e);
// });

// function addlisteners(thething, itsindex) {

// 	// console.log(thething);

// 	thething.addEventListener("click", toggle_state);
// 	thething.addEventListener("mouseenter", addhover);
// 	thething.addEventListener("mouseleave", removehover);

// } 

// window.addEventListener("keydown", function(e){
// 	if (e.keyCode == "32") {
// 		allthedivs.classList.add("radius");
// 		console.log("hello");
// 	}

// });


// function toggle_state(theevent) {
// 	if (this.classList.contains("active")) {
// 		this.classList.remove("active");
// 	}
// 	else this.classList.add("active");
// }

// function addhover(e) {
// 	this.classList.add("hovered");
// }

// function removehover(e) {
// 	this.classList.remove("hovered");
// }






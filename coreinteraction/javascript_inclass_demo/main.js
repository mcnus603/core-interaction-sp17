//mad libs fortune teller
//eg [name], you will live to be [??] years old, living in [???] with [?] kids and a [?]

//validation if the number is greator than 6 then nope try again

var Living = ['in a large, crazy city', 'in a suburb', 'on a farm', 'on a ranch', 'in the White House', 'in a mid-sized city'];
var Car = ['a fancy sportscar', 'a Subaru', 'a Ford F150', 'a vintage pickup truck', 'a Cadillac', 'a Toyota Camry'];
var Kids = ['twins', 'seven children', 'two children and twenty cows', 'four children, all of whom are girls', 'one child', 'three kids and a dog'];

var fortune = prompt("enter a number between 0 and 5");
teller(fortune);


function teller(message){



	console.log(message);

	var final = "You will live in " + Living[message] + " and drive " + Car[message] + " and have " + Kids[message] + ".";

	var answer_paragraph = document.querySelector(".answer");

	answer_paragraph.textContent = final;




	// var final_result = thing_to_multiply * 3;

	// var output = "you will have " + thing_to_multiply + "and the result is";
 
	// var something_new = final_result * 4000 / 3 + 10;

	// var answer_paragraph = document.querySelector(".answer");

	// answer_paragraph.textContent = final_result;

	// console.log(output + final_result);

}





// NOTES:

//varriable types:
//numbers, strings, boolean, undefined, null

//varriables typically written in camelCase

//javascript 0-index programing language 
//written like theArray[3]--to find the fourth thing in a list

//conditionals]
//if (something===true) {
// 		do stuff
// }
// else {
// 	don't do stuff
// }
//one equal sign--assigning a value, three equal signs, assigning value



//DEMO IN CLASS


//  console.log("It Works!!!");

// var user_input = prompt("enter a number");
// multiply_by_three(user_input);




// function multiply_by_three(thing_to_multiply){

// 	var final_result = thing_to_multiply * 3;

// 	var output = "i got: " + thing_to_multiply + "and the result is";
 
// 	var something_new = final_result * 4000 / 3 + 10;

// 	var answer_paragraph = document.querySelector(".answer");

// 	answer_paragraph.textContent = final_result;

// 	console.log(output + final_result);

// }



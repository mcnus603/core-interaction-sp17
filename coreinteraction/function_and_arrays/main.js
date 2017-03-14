var names = [
"sam", 
"aditi", 
"someone else", 
"third person"
]; 



// var numbers = [];
//would make 30 then 35

console.log(make_array(30));
console.log(make_array(5));




function make_array(howmany) {
	var numbers = [];

	for(var i = 0; i < howmany; i ++) {
		numbers.push(random_round(0,100));
	}

	return(numbers);
}

//specific name
// function get_a_name(whichone) {
// 	var result = names[whichone];
// 	return	[result, Math.random(), "hello"]; 
// 	console.log("this will never happen")
// }

//random name

function get_a_name(whichone) {
	var result = names[random_round(0,names.length)];
	return	[result, "hello"]; 
	console.log("this will never happen")
}



//random number within a range

function random_round(min, max) {
	var range = max - min;
	var offset = min;
	return Math.floor(Math.random()*range) + offset;
}






//logging to console the string in an array, making array into a function
//just assigning to a result

// function bogus(whichone) {
// 	var result = names[whichone];
// 	console.log(result);
// };


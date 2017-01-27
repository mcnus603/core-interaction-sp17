$("body").css ("background-color", "blue");

//when you see parens typically that deals with functions and functions have arguments
console.log("hello world")
var clicks = 0;
$("button").click(function(){
    clicks++;
    console.log(clicks)
    $("body").css("background-color", "yellow")
})



//loop is code that is going to run over and over again a specified number of times
//var i = 0 is where the counting starts 
//i plus plus
//the loop doesnt do anythng until you add something like that divs

var counter = 0;
for (var i = 0; i<50; i++) {
    counter ++;
    console.log(counter);
    $("body").append("<div class='dot'></div>")
}

//target each div using each--each is finding every instance, keeping track of each 
//individual dots thru the dom/on the page--allows you to set some particular properties 
//for them using "this"

var counter = 0;

$(".dot").each(function(){
    counter++;
   console.log("found a dot"); 
   $(this).html(counter);
   $(this).css("opacity", counter/50)
});

//$(".dot").click(function(){
  // $(this).css("background-color", "lime") 
//});

//whats going on above, targeting class dot and says change THIS particular .dot to have a lime background


//how to make the squares go back to red???
//green as a css class

$(".dot").click(function(){
    $(this).toggleClass("whatever");
});







//if statement?? couls use with has class

//(".dot").click(function(){
  //  if($(this).hasClass("whatever")) {
    //    $(this).removeClass("whatever"); 
   // } else {
     //   $(this).addClass("whatever");
 //   }
//});
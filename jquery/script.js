$("h1").click(function() {
    console.log("You clicked it");
    $("h1").addClass("active");
});

$("body").css("background-color","blue");

for(var i=0; i < 100; i++) {
    $("body").append("<div class ='dot'></div>");
}


var visibility = 0;
var mycounter = 1;

$(".dot"). each(function (){
    
    $(this).css("opacity", visibility/100);
    visibility++;
    $(this).css("left", Math.floor(Math.random()*$(window).width());
    mycounter++;
    visibility++;
});
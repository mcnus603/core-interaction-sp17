for (var increment = 0; increment < 100; increment ++) {
    $("body").append("<div class='box'> </div>")
}


var rounding = 0;


$(".box").each(function(){
    console.log("I found class box");
    console.log(rounding);
    var radius = rounding + "px";
    $(this).css("border-radius", radius);
    rounding ++;
})


$(".box").click (function(){
    $(this).css("background-color", "blue");
});

//var incrament or i
//what box each does is find each instance of .box in dom 
//could I do something where if clicked is evem then something happens and if clicked is odd it could be something else
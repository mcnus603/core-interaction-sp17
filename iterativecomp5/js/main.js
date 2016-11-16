//background color black
$("body").css("background-color","black");

//to make grid
for (var i=0; i < 96; i++) {
    $(".container").append("<div class='box'></div>");
}


//hex varriables and function

    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b',  'c', 'd', 'e', 'f'];
    var pos = [];
 
    function hexGen() {
    for (i = 0 ; i < 6 ; i++){
        pos[i] = hex[Math.floor(Math.random() * 16)];
    };
}
    
    function hexCode() {
    hexGen();
    var output = "#"    
    for (i = 0 ; i < pos.length ; i++){
        output += pos[i];
    };
    return output;
}



//when moused over, each box different color

$(".box").each(function() {
    $(".box").mouseover(function(){
    var color = hexCode();
    $(this).css("background-color", color);
    });
    
});
//when left button clicked, changes the background color
$(".left").click(function() {
    var color = hexCode();
    $("body").css("background-color", color);
    });

//click for black

$(".box").each(function() {
    $(".box").click(function(){
    $(this).css("background-color", "transparent");
    });
    
});

//restart
$(".right").click(function(){
    $(".box").css("background-color", "white")
    $("body").css("background-color", "black")
})


//make a boolean--if clicked = false then do the color randomizine 
//if clicked = true then bakcground-color =black
//for a box if background color is black, when its hovered on it stays black adn when its clicked it goes white

//to change the colors back--if using toggle class need of important 

if$.css 

//animation of color for set interval--runs code every x mil sec 
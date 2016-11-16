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



//makes it so each book is a color? and where the click functi

$(".box").each(function() {
    $(".box").mouseover(function(){
    var color = hexCode();
    $(this).css("background-color", color);
    });
    
});

$(".box").each(function() {
    $(".box").click(function(){
    $(this).css("background-color", "black");
    });
    
});

$(".right").click(function(){
    $(".box").css("background-color", "white")
})


//make a boolean--if clicked = false then do the color randomizine 
//if clicked = true then bakcground-color =black


z
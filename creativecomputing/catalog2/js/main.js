var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B',  'C', 'D', 'E', 'F'];
var pos = [];
 
function hexGen() {
    for (var i = 0 ; i < 6 ; i++){
        pos[i] = hex[Math.floor(Math.random() * 16)];
    };
}
    
function hexCode() {
    hexGen();
    var output = "#"    
    for (var i = 0 ; i < pos.length ; i++){
        output += pos[i];
    };
    return output;
}



    
//comp1

$(".comp1 span").mouseenter(function(){
    $("body").css("background-color",$(this).html());
    $(this).css("opacity", ".3");

});

$(".comp1 span").mouseleave(function(){
    $("body").css("background-color","transparent");
    $(this).css("opacity", "1");
});

    $(".comp1").append("<a href='../csscomposition/index.html'>" + "</a>");




//comp2
$(".comp2 span").mouseenter(function(){
    $("body").css("background-color",$(this).html());
    $(this).css("opacity", ".3");
});

$(".comp2 span").mouseleave(function(){
    $("body").css("background-color","white");
    $(this).css("opacity", "1");
});

//comp3
$(".comp3 span").mouseenter(function(){
    $("body").css("background-color",$(this).html());
    $(this).css("opacity", ".3");
});

$(".comp3 span").mouseleave(function(){
    $("body").css("background-color","white");
    $(this).css("opacity", "1");
});

//comp4

$(".comp4 span").mouseenter(function(){
    $("body").css("background-color",$(this).html());
    $(this).css("opacity", ".3");
});

$(".comp4 span").mouseleave(function(){
    $("body").css("background-color","white");
    $(this).css("opacity", "1");
});


//comp 5

   
for (var i=0; i < 120; i++) {
    $(".comp5").append("<span>" + "<a href='../iterativecomp5/index.html'>" + hexCode().toUpperCase() +  "</a>" + "</span>"+"<br>");
}


function changecolor5 () {
    $(".comp5 span").each(function(){
    $(this).html(hexCode());
        
    })
}
 
 function startcolor5 () {
     setInterval("changecolor5()", 2000)
 };
 
 window.onload = startcolor5();

$(".comp5 span").mouseenter(function(){
    $("body").css("background-color",$(this).html());
    $(this).css("opacity", ".3");
});



$(".comp5 span").mouseleave(function(){
    $(".body").css("background-color","white");
    $(this).css("opacity", "1");
});

        



//comp 6
for (var i=0; i < 120; i++) {
    $(".comp6").append("<span>" + "<a href='../iterativecomp6/index.html'>" + hexCode().toUpperCase() +  "</a>" + "</span>"+"<br>");
}


$(".comp6 span").mouseenter(function(){
    $("body").css("background-color",$(this).html());
    $(this).css("opacity", ".3");
});

function changecolor6 () {
    $(".comp6 span").each(function(){
    $(this).html(hexCode());
        
    })
}
 
 function startcolor6 () {
     setInterval("changecolor6()", 2000)
 };
 
 window.onload = startcolor6();

$(".comp6 span").mouseleave(function(){
    $(".body").css("background-color","white");
    $(this).css("opacity", "1");
    

});
  
$("span").each(function(){
   $(this).css("color", "black");
   $(this).css("text-decoration", "none");
});



//loop
//keep in mind order for set interval
//design 
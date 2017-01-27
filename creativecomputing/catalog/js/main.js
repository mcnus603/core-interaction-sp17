$("body").click(function() {
   console.log("hello");
});

$(function(){
    $(document).bind("mousemove", function(){
        $(".Div1").html("x Position")
        
    });
    
    
});




//first attempt
//function readMouseMove (e) {
 //   var result_x = $("document").getElementById("x-result");
   // var result_y = $("document").getElementById("y-result");
    //$("#y-result").html(e.clientY);
    //$("#x-result").html(e.clientX);
//}

//$(document).onmousemove = readMouseMove
$(".image-link").hover(function(){
        $(this).siblings().css("color", "#006764")
        console.log("hi")
    }, function(){
        $(this).siblings().css("color", "#2a2a2a")
    }
);
$("#adopt-button").click(function(){
    $(".donate-form").addClass("hidden");
    $("#donate-button").removeClass("contact-button-active");
    $(this).addClass("contact-button-active");
    $(".adopt-form").removeClass("hidden");
})

$("#donate-button").click(function(){
    $(".adopt-form").addClass("hidden");
    $("#adopt-button").removeClass("contact-button-active");
    $(this).addClass("contact-button-active");
    $(".donate-form").removeClass("hidden");
})
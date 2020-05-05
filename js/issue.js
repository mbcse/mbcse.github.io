$(document).ready(function () {

    $(".issues1").click(function () {

        $(".disappear1").fadeIn("fast");
        $(".disappear2").fadeOut("fast");
        
    });
    
    $(".issues2").click(function () {

        $(".disappear1").fadeIn("fast");
        $(".disappear2").fadeOut("fast");
        
    });
    $(".pr1").click(function () {
        $(".disappear2").fadeIn("fast");
        $(".disappear1").fadeOut("fast");
        
    });
    $(".pr2").click(function () {
        $(".disappear2").fadeIn("fast");
        $(".disappear1").fadeOut("fast");
        
    });
    
})
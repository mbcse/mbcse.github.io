$(document).ready(function () {

    $(".email-button").click(function (e) {
        e.preventDefault();
        $(".sign-in-buttons").slideUp("fast");
        $(".email-section").slideDown("fast");
    })

    $(".email-next").click(function (e) {
        e.preventDefault();

        if (validateEmail($(".email-input")[0])) {

            $(".email-next").hide("fast");
            $(".email-input").attr("disabled", true);
            $(".email-input").css("color", "black");
            $(".email-submit").show("fast");
            $(".password-input").show("fast");
            $(".name-fname").show("fast");
            $(".name-lname").show();
        }

    });

    $(".email-input").keypress(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $(".email-next").click();
        }
    });

    $(".email-cancel").click(function (e) {
        e.preventDefault();
        $(".email-input").attr("disabled", false);

        $(".email-section").slideUp("fast");

        $(".password-input").hide("fast");
        $(".password-input").val("");
        $(".email-submit").hide("fast");
        $(".email-next").show();
        $(".name-fname").hide("fast");
        $(".name-lname").hide("fast");
        $(".name-fname").val("");
        $(".name-lname").val("");
        $(".email-input").show();
        $(".email-input")[0].value = "";
        $(".email-input")[0].style.borderBottom = "0.5px solid #3498db";
        $(".sign-in-buttons").slideDown("fast");
    });
})


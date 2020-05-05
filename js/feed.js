$(document).ready(function () {

    // dropdown opening and closing

    $(".dropdown-label-sort").click(function (e) {
        $(".dropdown-list-sort").toggleClass("display-none");
    });
    $(".dropdown-label-languages").click(function (e) {
        $(".dropdown-list-languages").toggleClass("display-none");
    });
    $(".dropdown-label-organisations").click(function (e) {
        $(".dropdown-list-organisations").toggleClass("display-none");
    });
    $(".filter-mobile").click(function (e) {
        console.log("j");
        $(".filter-mobile-dropdown").slideToggle();
    });

    $(document).click(function (event) {
        $target = $(event.target);
        if (!$target.closest('.dropdown-label-sort').length &&
            $('.dropdown-list-sort').is(":visible")) {
            $('.dropdown-list-sort').toggleClass("display-none");
        }
    });
    $(document).click(function (event) {
        $target = $(event.target);
        if (!$target.closest('.dropdown-label-languages').length &&
            $('.dropdown-list-languages').is(":visible")) {
            $('.dropdown-list-languages').toggleClass("display-none");
        }
    });
    $(document).click(function (event) {
        $target = $(event.target);
        if (!$target.closest('.dropdown-label-organisations').length &&
            $('.dropdown-list-organisations').is(":visible")) {
            $('.dropdown-list-organisations').toggleClass("display-none");
        }
    });

    $(".top-dropdown-organisations").click(function () {
        $(".organisations-list").slideToggle("fast");
    });

    $(".top-dropdown-languages").click(function () {
        $(".language-list").slideToggle("fast");
    });




});
function letsChange() {
    alert('Its Work');
};

$(function () {

    $("table").addClass("tableClass");
    $("html").addClass("htmlClass");
    $("#main").addClass("divClass")

    // Everything below this Show be in this function only!!!
    // Make class for every css.
    $("button").css("font-size", "20px");
    $("button").hover(function () {
        $(this).css("font-size", "30px")
    }, function () { $(this).css("font-size", "20px") }
    );
})
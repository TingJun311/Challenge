

$(document).ready(function () {
    $(".btn").click(function () {
        $(this).css("background", "red");
    });
    $(document).keypress(function (e) {
        $("h1").text(e.key);
        $("h1").attr("class", "heading")
    });
});


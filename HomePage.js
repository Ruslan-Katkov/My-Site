function onProjectsClick() {
    if ($(".projects_bar").css("display") == "none") {
        $(".mars").addClass("marsMove");
        $(".mars").removeClass("marsMoveReverse");
        $(".projects_bar").css({
            display: "block"
        });
    }else{
        $(".mars").removeClass("marsMove");
        $(".mars").addClass("marsMoveReverse");
        $(".projects_bar").css({
            display: "none"
        });
    }
}

$(document).ready(function () {
    $(".projects_key").click(function () {
        onProjectsClick();
    });
});




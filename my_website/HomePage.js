function onProjectsClick() {
    if ($(".projects_bar").css("display") == "none") {
        $(".projects_bar").css({
            display: "block"
        });
    }else{
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
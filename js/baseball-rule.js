$(document).ready(function() {
    var $toggle = $(".bb-qa-all>div");

    $toggle.click(function() {

        $(this).find(".target").fadeToggle(100), console.log("1213");
    })
    var $h2 = $(".bb-qa-all>h2"),
        $h2target = $(".bb-qa-all>div");
    $h2.click(function() {

        $(this).parent(".bb-qa-all").find("div").find("div:first-child").fadeToggle(100), console.log("777");
    })
    var $sbh2 = $(".sb-rule>h2");
    $sbh2.click(function() {

        $(this).parent(".sb-rule").find("img").fadeToggle(100), console.log("777");
    })


});

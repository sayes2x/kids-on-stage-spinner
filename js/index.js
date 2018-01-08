// Put number of slices in a var in case I want to use other spinner backgrounds for other games
var slices = 6;

function removeClass(final) {
    console.log("Removing class");
    setTimeout(function () {
        console.log("Timeout");
        $(".isSpinning").removeClass("isSpinning");
        $("#spinner").text(".spinner{transition:transform 0s;transform:rotate(" + (final - 7200) + "deg)}")
    }, 3000)

}

$("body").click(function () {
    if ($(".isSpinning").length === 0) {

        var slice = Math.floor(Math.random() * slices) + 1;
        var deg = 7200 + (360 / slices * slice) - 18;
        $("#spinner").text(".isSpinning{transform:rotate(" + deg + "deg)}")
        $(".spinner").addClass("isSpinning");
        removeClass(deg);
        console.log(deg);
    } else {
        console.log("busy");
    }
})

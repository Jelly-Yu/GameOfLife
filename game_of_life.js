$(document).ready(function () {
    var c_canvas = document.getElementById("canvas");
    var context = c_canvas.getContext("2d");

    for (var x = 0.5; x < 901; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, 581);
    }

    for (var y = 0.5; y < 581; y += 10) {
        context.moveTo(0, y);
        context.lineTo(900, y);
    }
    context.strokeStyle = "#ddd";
    context.stroke();


});

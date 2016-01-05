$(document).ready(function () {
    var c_canvas = document.getElementById("canvas");
    c_canvas.addEventListener('click', clickHandler);
    var context = c_canvas.getContext("2d");
    var row = 90;
    var column = 60;
    var board = new Array();
    for (i = 0; i < row; i++) {
        board[i] = new Array();
        for (j = 0; j < column ; j++) {
            board[i][j] = 0;
        }
    }
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
    function clickHandler(e) {
        context.fillStyle = "yellow";
        context.fillRect(Math.floor(e.offsetX/ 10) * 10+0.5, Math.floor(e.offsetY / 10) * 10+0.5, 10, 10);
    }

});

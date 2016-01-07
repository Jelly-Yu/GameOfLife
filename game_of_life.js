$(document).ready(function () {
    var c_canvas = document.getElementById("canvas");
    c_canvas.addEventListener('click', clickHandler);
    var context = c_canvas.getContext("2d");
    var row = 90;
    var column = 58;
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
        
        var offsetX = Math.floor(e.offsetX / 10);
        var offsetY = Math.floor(e.offsetY / 10);
        if (board[offsetX][offsetY]) {
            context.fillStyle = "gray";           
            board[offsetX][offsetY] = 0;

        } else {
            context.fillStyle = "yellow";
            board[offsetX][offsetY] = 1;
        }
        context.fillRect(offsetX * 10 +1, offsetY * 10 +1, 9, 9);
        console.log("X:" + Math.floor(e.offsetX / 10));
        console.log("Y:" + Math.floor(e.offsetY / 10));
    }

    function draw() {
        for (i = 0; i < row; i++) {
            for (j = 0; j < column ; j++) {
                context.fillStyle = board[i][j] == 0?"yellow":"gray";
                context.fillRect(i * 10 + 1, j * 10 + 1, 9, 9);
            }
        }
    }
    function clear() {
        for (i = 0; i < row; i++) {
            for (j = 0; j < column ; j++) {
                board[i][j] = 0;
            }
        }
    }
});

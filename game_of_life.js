$(document).ready(function () {
    var c_canvas = document.getElementById("canvas");
    var btn_start = document.getElementById("start");
    btn_start.addEventListener('click', start);
    var btn_next = document.getElementById("next");
    var btn_clear = document.getElementById("clear");
    btn_next.addEventListener('click', nextGeneration);
    btn_clear.addEventListener('click', clear);
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

    function nextGeneration(){
        console.log("next button is clicked");
        var result = [], i, j, k, liveNum;
        for (i = 0; i< row; ++i){
            result.push([]);
        }
        for (i = 0; i < row; ++i){
            for (j = 0; j <column; ++j){
                liveNum = visit(i, j);
                //console.log("cells alive: " + liveNum);
                if (board[i][j] == 1 && liveNum < 2) result[i][j] = 0;
                if (board[i][j] == 1 && liveNum > 3) result[i][j] = 0;
                if (board[i][j] == 1 && (liveNum == 2 || liveNum == 3)) result[i][j] = 1;
                if (board[i][j] == 0 && liveNum == 3) result[i][j] = 1;
            }
        }
        for (i = 0; i < row; ++i){
            for(j = 0; j < column; ++j){
                board[i][j] = result[i][j] === undefined ? board[i][j]: result[i][j];
            }
        }
        draw();

    }
    function visit(x, y){
        var count = 0;
        for(k = x - 1; k <= x+1; ++k){
            if(board[k] && board[k][y-1] == 1) ++count;
            if(board[k] && board[k][y+1] == 1) ++count;
        }
        if (board[x - 1] && board[x - 1][y] == 1) ++count;
        if (board[x + 1] && board[x + 1][y] == 1) ++count;
        return count;
    }

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
                context.fillStyle = board[i][j] === 1?"yellow":"gray";
                //console.log("i:" + i + " j: " + j + " " + board[i][j]);
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
        draw();
    }

    function start() {
        setInterval(nextGeneration, 1000);
    }
});

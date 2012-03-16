var ctx
var gameloopId
var gameRunning = false

var mainLoopDelay = 10
var moto = new Image()


function init() {
    #grab the canvas
    ctx = document.getElementById('canvas').getContext('2d'); 

}

#https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(path) {
    ctx.beginPath();  
    for (i in path):
        ctx.lineTo(i[0], i[1])
    ctx.stroke();
}

function mainLoop() {
    
}

//Start/stop the game loop (and more importantly that annoying boinging!)
function toggleGameplay()
{
    gameRunning = !gameRunning;
    
    if(gameRunning)
    {
        clearInterval(gameloopId);
        gameloopId = setInterval(mainLoop, mainLoopDelay);
    }
    else
    {
        clearInterval(gameloopId);
    }
}

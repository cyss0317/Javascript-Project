const MovingObject = require("./scripts/moving_object.js");
const Game = require("./scripts/game.js");
const Util = require("./scripts/util.js")

document.addEventListener("DOMContentLoaded", function() {
    // const canvas_background = document.getElementById('game-canvas');
    // const ctx = canvas_background.getContext('2D');
    // const BACKGROUND_WIDTH = canvas_background.width = 600;
    // const BACKGROUND_height = canvas_background.height = 600;
    // const canvas_background = new Image();
    // canvas_background.src ='./Main-map.jpg'
    
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const CANVAS_WIDTH = canvas.width = 600;
    const CANVAS_HEIGHT = canvas.height = 600;
    
    const wolf_right = new Image();
    wolf_right.src = './img/Wolf-right.png'

    
    //wolf_right from left to right
    
    // function randomPosition() {
    //     result = Math.random() * (600 - 150) + 150;
    //     return result;
    // }
    let x = 0;
    function moveRight(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // ctx.fillRect(100, 50, 100, 100);
        //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)
        ctx.drawImage(wolf_right, x, 0, 50, 50);
        x++;
        requestAnimationFrame(moveRight);
    }
    moveRight();
    

    // const canvas = document.querySelector("#game-canvas");
    // canvas.height = Game.DIM_X;
    // canvas.width = Game.DIM_Y;
 

    
    // const my_chicken = new MovingObject();
    // const chicken = document.querySelector("#chicken");
    // chicken.width = 50;
    // chicken.wid = 50;
    

})


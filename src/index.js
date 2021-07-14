// const MovingObject = require("./scripts/moving_object.js");
const Game = require("./scripts/game.js");
const Util = require("./scripts/util.js")
const GameView = require('./scripts/game_view.js');
const Chicken = require("./scripts/chicken.js");

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    ctx.canvas.height = 550;
    ctx.canvas.width = 450;


    const game = new Game();
    new GameView(game, ctx).start();
    // const chicken = new Chicken();
    // chicken.draw(ctx);
    // ctx.rect(0, 0, 50, 50);
    // ctx.stroke();

    // function move(e){
    //     if (e.keyCode == 39){
    //         chicken.pos[0] += 3;
    //     } else if (e.keyCode == 37) {
    //         chicken.pos[0] -= 3;
    //     } else if (e.keyCode == 38){
    //         chicken.pos[1] -= 3;
    //     } else if (e.keyCode == 40){
    //         chicken.pos[1] += 3;
    //     }
    // }
    // document.onkeydown = move;


})


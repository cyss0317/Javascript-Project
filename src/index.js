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
    const gameView = new GameView(game, ctx);

    const start = document.querySelector("#start-button");
    start.addEventListener("click", function(){
        gameView.start();
    })

})


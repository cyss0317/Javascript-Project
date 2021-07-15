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

 

    const start = document.querySelector("#start-button");
    start.addEventListener("click", function(){
        let game = new Game(20);
        let gameView = new GameView(game, ctx);
        gameView.start();
    })

    const easy = document.querySelector('#easy');
    easy.addEventListener("click", function() {
        let game = new Game(20);
        let gameView = new GameView(game, ctx);
        gameView.start();
    })

    const medium = document.querySelector('#medium');
    medium.addEventListener("click", function () {
        let game = new Game(40);
        let gameView = new GameView(game, ctx);
        gameView.start();
    })

    const hard = document.querySelector('#hard');
    hard.addEventListener("click", function () {
        let game = new Game(70);
        let gameView = new GameView(game, ctx);
        gameView.start();
    })
})


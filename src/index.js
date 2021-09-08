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
    //difficulty buttons
    const easy = document.querySelector('#easy');
    const medium = document.querySelector('#medium');
    const hard = document.querySelector('#hard');
    const music = document.querySelector("#audio")


    easy.addEventListener("click", function() {
        let game = new Game(20);
        let gameView = new GameView(game, ctx);
        gameView.start();
        easy.disabled = true;
        medium.disabled = true;
        hard.disabled = true;
        music.play
    })

    medium.addEventListener("click", function () {
        let game = new Game(50);
        let gameView = new GameView(game, ctx);
        gameView.start();
        easy.disabled = true;
        medium.disabled = true;
        hard.disabled = true;
    })

    hard.addEventListener("click", function () {
        let game = new Game(80);
        let gameView = new GameView(game, ctx);
        gameView.start();
        easy.disabled = true;
        medium.disabled = true;
        hard.disabled = true;
    })
})


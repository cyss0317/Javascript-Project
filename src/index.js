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
    const playAgain = document.querySelector("#play-again")
    const modal = document.querySelector("#modal-background")
    const won = document.querySelector("#won")
    const gameover = document.querySelector("#gameover")
    const choose = document.querySelector("#choose")

    playAgain.addEventListener("click", function(){
        easy.disabled = false;
        medium.disabled = false;
        hard.disabled = false;
        playAgain.style.display = "none"
        choose.style.display = "block"
    })
    
    easy.addEventListener("click", function() {
        let game = new Game(25);
        let gameView = new GameView(game, ctx);
        gameView.start();
        easy.disabled = true;
        medium.disabled = true;
        hard.disabled = true;
        if(modal.style.display === "block"){
            modal.style.display = "none"
        } 
        won.style.display = "block"
        gameover.style.display = "block"
        music.play
        // else {
            //     modal.style.display = "none"
            // }
            
        })
        
        medium.addEventListener("click", function () {
            let game = new Game(50);
            let gameView = new GameView(game, ctx);
            gameView.start();
            easy.disabled = true;
            medium.disabled = true;
            hard.disabled = true;
            if (modal.style.display === "block") {
                modal.style.display = "none"
            }
            won.style.display = "block"
            gameover.style.display = "block"
        })
        
        hard.addEventListener("click", function () {
            let game = new Game(80);
            let gameView = new GameView(game, ctx);
            gameView.start();
            easy.disabled = true;
            medium.disabled = true;
            hard.disabled = true;
            if (modal.style.display === "block") {
                modal.style.display = "none"
            }
            won.style.display = "block"
            gameover.style.display = "block"
        })
    })


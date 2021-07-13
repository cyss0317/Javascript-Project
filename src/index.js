const MovingObject = require("./scripts/moving_object.js");
const Game = require("./scripts/game.js");
const Util = require("./scripts/util.js")

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    const can

    const mo = new MovingObject({
        url: './img/Wolf-right.png',
        pos: [100, 100],
        vel: [10, 10]
    });
   mo.draw(ctx);

})


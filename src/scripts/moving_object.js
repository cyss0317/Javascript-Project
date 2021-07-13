const Util = require('./script/util.js');

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const randomY = Util.randomPostion();
const randomX = [-50, 650][Math.floor(Math.random() * this.length)];


class MovingObject {
    constructor(options) {
        this.width = 100;
        this.height = 100;
        this.pos = options.pos;
        this.game = options.game;
        // this.

    }
}

function moveRight(animal) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // console.log(animal);
    //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)

    // ctx.drawImage(animal, x, 50, 50, 50 );
    if (x < 650) {
        ctx.drawImage(animal, x, y, 50, 50);
        x++;
        requestAnimationFrame(() => moveRight(animal))
    }
    console.log(animal);
}

module.exports = MovingObject;
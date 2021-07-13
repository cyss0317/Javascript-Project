const Util = require('./util.js');

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2D');
//wolf img
const wolf_right = new Image();
wolf_right.src = './img/Wolf-right.png'
const wolf_left = new Image();
wolf_left.src = './img/Wolf-left2.png'
//bear img
const bear_right = new Image();
bear_right.src = './img/Bear_right.png'
const bear_left = new Image();
bear_left.src = './img/Bear_left.png'
//chicken img
const bear_right = new Image();
bear_right.src = './img/Bear_right.png'
const bear_left = new Image();
bear_left.src = './img/Bear_left.png


class MovingObject {
    constructor(options) {
        this.width = 100;
        this.height = 100;
        this.pos = options.pos;
        this.game = options.game;
        // this.
        
    }
}

function move(animal) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const randomY = Util.randomPostion();
    const randomX = Util.randomX();
    // console.log(animal);
    //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)
    // ctx.drawImage(animal, x, 50, 50, 50 );

    //move right to left   
    if ( randomX === 650 ) {
        for (let x = randomX; x > -50; x--) {
            ctx.drawImage(animal, randomX, randomY, 50, 50);
            x--;
            requestAnimationFrame(() => move(animal));        
        }
    } else {
        //move left to right
        for (let x = randomX; x < 650; x++) {
            ctx.drawImage(animal, randomX, randomY, 50, 50);
            x++;
            requestAnimationFrame(() => move(animal));
        }
    }
}

module.exports = MovingObject;
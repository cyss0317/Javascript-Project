const Util = require('./util.js');
const canvas = document.getElementById('game-canvas');
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

class MovingObject {
    constructor(url) {
        
        this.animal = new Image();
        this.animal.src = url;
        // //wolf imgs
        // const wolfRight = new Image();
        // wolfRight.src = './img/Wolf-right.png'
        // const wolfLeft = new Image();
        // wolfLeft.src = './img/Wolf-left2.png'
        // //bear imgs
        // const bearRight = new Image();
        // bearRight.src = './img/Bear_right.png'
        // const bearLeft = new Image();
        // bearLeft.src = './img/Bear_left.png'
        // //chicken imgs
        // const chickenFront = new Image();
        // chickenFront.src = './img/Chicken-front.png'
        // const chickenLeft = new Image();
        // chickenLeft.src = './img/Chicken_left.png'
        // const chickenLeftMove = new Image();
        // chickenLeftMove.src = './img/Chicken_left_move.png'
        // const chickenRight = new Image();
        // chickenRight.src = './img/Chicken_right.png'
        // const chickenRightMove = new Image();
        // chickenRightMove.src = './img/Chicken_right_move.png'
        
    }


    movingRightImg(){
        let characters = [bearRight, wolfRight];
        return characters[Math.floor(Math.random * characters.length)];
    }
    movingLeftImg() {
        let characters = [bearLeft, wolfLeft];
        return characters[Math.floor(Math.random * characters.length)];
    }
    
    
    move(ctx) {
        
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        const randomY = Util.randomPosition();
        const randomX = Util.randomX();
        // console.log(animal);
        //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)
        // ctx.drawImage(animal, x, 50, 50, 50 );
    
        //move right to left   
        if ( randomX === 650 ) {

            ctx.drawImage(this.animal, randomX, randomY, 50, 50);
            x--;      
            requestAnimationFrame(() => this.move(ctx));  
            }
        } else {
            //move left to right
            for (let x = randomX; x < 650; x++) {
                ctx.drawImage(this.animal, randomX, randomY, 50, 50);
                requestAnimationFrame(() => this.move(ctx));
            }
        }
    }
    
}



//random images moving to the right

module.exports = MovingObject;
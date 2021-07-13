const Util = require('./util.js');

function MovingObject(options) {
        this.animal = new Image();
        this.animal.src = options.url;
        this.vel = options.vel;
        this.pos = options.pos;
        this.game = options.game
}

MovingObject.prototype.collideWith = function(otherObject){

};

MovingObject.prototype.draw = function(ctx){
     ctx.drawImage(this.animal, this.pos[0], this.pos[1], 50, 50);
};

//same as requestAnimationFrame();
const NORMAL_FRAME_TIME_DELTA = 1000/60;
MovingObject.prototype.move = function(timeDelta){
    const velocityScale = timeDelta/ NORMAL_FRAME_TIME_DELTA,

    this.pos[0] = this.pos[0] + this.vel[0] * velocityScale;
    this.pos[1] = this.pos[1] + this.vel[1] * velocityScale;
        
}

MovingObject.prototype.remove = function(){
    this.game.remove();
}

module.exports = MovingObject;


    // movingRightImg(){
    //     let characters = [bearRight, wolfRight];
    //     return characters[Math.floor(Math.random * characters.length)];
    // }
    // movingLeftImg() {
    //     let characters = [bearLeft, wolfLeft];
    //     return characters[Math.floor(Math.random * characters.length)];
    // }
    
    
    // move(ctx) {
        
    //     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //     const randomY = Util.randomPosition();
    //     const randomX = Util.randomX();
    //     // console.log(animal);
    //     //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)
    //     // ctx.drawImage(animal, x, 50, 50, 50 );
    
    //     //move right to left   
    //     if ( randomX === 650 ) {

    //         ctx.drawImage(this.animal, randomX, randomY, 50, 50);
    //         x--;      
    //         requestAnimationFrame(() => this.move(ctx));  
    //         }
    //     } else {
    //         //move left to right
    //         for (let x = randomX; x < 650; x++) {
    //             ctx.drawImage(this.animal, randomX, randomY, 50, 50);
    //             requestAnimationFrame(() => this.move(ctx));
    //         }
    //     }
    // }
    




//random images moving to the right


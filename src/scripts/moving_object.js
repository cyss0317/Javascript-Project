const Util = require('./util.js');

function MovingObject(options) {
        this.animal = new Image();
        // this.animal.src = options.url;
        // this.dir = options.dir;
        this.radius = 14;
        this.pos =  Util.randomPosition();
        this.game = options.game
        
}

MovingObject.prototype.randomLeftCharacter = function() {
    let characters = ['./img/Bear_left.png', './img/Wolf_left.png', './img/Lion_left.png'];
    return characters[Math.floor(Math.random() * characters.length)];
}


MovingObject.prototype.randomRightCharacter = function () {
    let characters = ['./img/Bear_right.png', './img/Wolf_right.png', './img/Lion_right.png'];
    return characters[Math.floor(Math.random() * characters.length)];
}

MovingObject.prototype.draw = function(ctx){


    // this.animal.onload = () => ctx.drawImage(this.animal, this.pos[0], this.pos[1], 50, 50);
    ctx.drawImage(this.animal, this.pos[0], this.pos[1], 50, 50);

};



MovingObject.prototype.move = function(){
    this.pos = [this.pos[0] + this.dir[0] ,this.pos[1] + this.dir[1] ];

    if (this.game.isOutOfBound(this.pos)){
        this.pos = this.game.wrap(this.pos);
    } 
}


MovingObject.prototype.isCollidedWith = function(otherObject){
    // posotion, width 50, height 50

    let distance = Util.distance(this, otherObject);
    return distance < (this.radius + otherObject.radius)
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


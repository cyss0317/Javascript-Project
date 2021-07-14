const Util = require("./util.js");
const MovingObject = require('./moving_object');

function Chicken(options) {
    this.pos = [300 ,400];
    this.animal = new Image();
    this.animal.src = './img/Chicken_front.png'
    this.radius = 25;
}

Util.inherits(Chicken, MovingObject);


Chicken.prototype.move = function() {
    if ( this.pos[0] -= 1 ){
        this.animal.src = './img/Chicken_left_move.png'
    } else if ( this.pos[0] += 1){
        this.animal.src = './img/Chicken_right_move.png'
    } else if (this.pos[1] -= 1) {
        this.animal.src = './img/Chicken_front.png'
    }
}



module.exports = Chicken;
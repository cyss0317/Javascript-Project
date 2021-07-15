const Util = require("./util.js");
const MovingObject = require('./moving_object');

function Chicken(options) {
    this.pos = [210 ,500];
    this.animal = new Image();
    this.animal.src = './img/Chicken_front.png'
    this.radius = 25;
}

Util.inherits(Chicken, MovingObject);


Chicken.prototype.moves = function(move) {
    //update position
    let prePos = this.pos;
    this.pos[0] += move[0];
    this.pos[1] += move[1];

    if ( prePos[0] > this.pos[0] ){
        this.animal.src = './img/Chicken_left_move.png'
    } else if ( prePos[0] < this.pos[0] ){
        this.animal.src = './img/Chicken_right_move.png'
    } else if ( prePos[1] > this.pos[1] ) {
        //move step forward
        this.animal.src = './img/Chicken_front.png'
    } else if ( prePos[1] < this.pos[1] ) {
        this.animal.src = './img/Chicken_back.png'
    }
}



module.exports = Chicken;
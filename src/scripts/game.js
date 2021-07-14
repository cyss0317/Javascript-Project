const Chicken = require("./chicken.js");
const MovingObject = require("./moving_object.js");
const Util = require('./util');

function Game() {
    this.movingObjects = [];
    this.addMovingObject();
    this.chicken = new Chicken();
}

Game.DIM_X = 450;
Game.DIM_Y = 550;
Game.NUM_MOVINGOBJECTS = 30;



Game.prototype.addMovingObject = function(){
    for (let i = 0; i < Game.NUM_MOVINGOBJECTS; i++) {   
        let character = new MovingObject({game: this});

        if( character.pos[0] === 650) {
            character.animal.src = character.randomLeftCharacter();
            character.dir = [-(Util.randomSpeed()), 0];
        } else {
            character.animal.src = character.randomRightCharacter();
            character.dir = [Util.randomSpeed(), 0];
        }
        this.movingObjects.push(character);
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect( 0, 0, Game.DIM_X, Game.DIM_Y);
    for (let i = 0; i < this.movingObjects.length; i++) {
        this.movingObjects[i].draw(ctx);
    }
    this.chicken.draw(ctx);
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.movingObjects.length; i++) {
        this.movingObjects[i].move();
    }
}

Game.prototype.wrap = function(pos) {
    return [
        Util.wrap(pos[0], Game.DIM_X), pos[1]
    ];
}

Game.prototype.isOutOfBound = function(pos) {
    return (pos[0] < -50 || pos[0] > 650);
}


module.exports = Game;
const Chicken = require("./chicken.js");
const MovingObject = require("./moving_object.js");
const Util = require('./util');
const Croco = require('./croco.js');

function Game() {
    this.movingObjects = [];
    this.addMovingObject();
    this.chicken = new Chicken();
    this.croco = new Croco();
}

Game.DIM_X = 450;
Game.DIM_Y = 550;
Game.NUM_MOVINGOBJECTS = 45;

Game.prototype.win = function() {
    if ( this.chicken.pos[1] < -20 ){
        alert("YOU DID IT!!!, refresh the page to play again");
        
    }
}

Game.prototype.checkCollisions = function () {
    this.MovingObjects.forEach((object) => {
        if (object.isCollidedwith(this.chicken)) {
            window.alert("RIP..... refresh the page to play again");
        }
    })
}

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
    // this.croco.draw(ctx);
    
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
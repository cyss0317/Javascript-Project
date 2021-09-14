const Chicken = require("./chicken.js");
const MovingObject = require("./moving_object.js");
const Util = require('./util');
const Croco = require('./croco.js');

function Game(num_movingObjects = 20) {
    
    this.movingObjects = [];
    this.num_movingObjects = num_movingObjects;
    this.addMovingObject();
    this.chicken = new Chicken();
}

Game.DIM_X = 450;
Game.DIM_Y = 550;
// Game.NUM_MOVINGOBJECTS = 50;

Game.prototype.win = function(interval) {
    const modal = document.getElementById("modal-background")
    const playAgain = document.getElementById("play-again")
    const message = document.getElementById("gameover")
    if ( this.chicken.pos[1] < 5 &&  this.chicken.pos[0] < 250 && this.chicken.pos[0] > 200 ){
        clearInterval(interval);
        modal.style.display = "block"
        playAgain.style.display = "block"
        message.style.display = "none"
    }
}
Game.prototype.end = function (interval) {
    const modal = document.getElementById("modal-background")
    const playAgain = document.getElementById("play-again")
    const message = document.getElementById("won")
    clearInterval(interval);
    // if( modal.style.display === "block"){
        modal.style.display = "block"
        playAgain.style.display = "block"
        message.style.display = "none"
    // } else {
        // modal.style.display = "none"
    // }
    // alert("RIP..... press 'okay' to play again");
    // window.location.reload();
}

Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.movingObjects.length; i++) {
        // this.movingObjects[i].isCollidedWith(this.chicken);
        if (this.movingObjects[i].isCollidedWith(this.chicken) === true) {
            return true;
        } 
    }return false;

}

Game.prototype.addMovingObject = function(){

    for (let i = 0; i < this.num_movingObjects; i++) {
        let character = new MovingObject({game: this});
        if( character.pos[0] === 500) {
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
// pausePlatform = this.add.sprite(player.x - 5, player.y + 13); 
// pausePlatform.body.immovable = true; 
// pausePlatform.collideWorldBounds = true; 
// pausePlatform.allowGravity = false;

//invisible wall
// Game.prototype.draw = function (ctx) {
//     ctx.clearRect(0, 0, 200, 250);
//     for (let i = 0; i < this.movingObjects.length; i++) {
//         this.movingObjects[i].draw(ctx);
//     }
//     this.chicken.draw(ctx);
//     // this.croco.draw(ctx);

// }

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
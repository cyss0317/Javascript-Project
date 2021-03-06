const Util = require("./util.js");
const MovingObject = require("./moving_object");
const Game = require("./game.js");

function Chicken(options) {
  this.pos = [210, 500];
  this.animal = new Image();
  this.animal.src = "./img/Chicken_front.png";
  this.radius = 14;
}

Util.inherits(Chicken, MovingObject);

Chicken.prototype.moves = function (move) {
  //update position

  if (move[0] < 0) {
    this.animal.src = "./img/Chicken_left_move.png";
  } else if (move[0] > 0) {
    this.animal.src = "./img/Chicken_right_move.png";
  } else if (move[1] < 0) {
    //move step forward
    this.animal.src = "./img/Chicken_front.png";
  } else if (move[1] > 0) {
    this.animal.src = "./img/Chicken_back.png";
  }

  //left wall
  if (this.pos[0] + move[0] < 0) {
    this.pos[0] = 0;
    //right wall
  } else if (this.pos[0] + move[0] > 400) {
    this.pos[0] = 400;
  } else {
    this.pos[0] += move[0];
  }

  //top wall
  // if (this.pos[1] + move[1] < 0) {
  //     this.pos[1] = 0;
  if (this.pos[1] + move[1] < 0 && this.pos[0] < 200) {
    this.pos[1] = 25;
  } else if (this.pos[1] + move[1] < 0 && this.pos[0] > 250) {
    this.pos[1] = 25;
  }
  //bottom wallddd
  if (this.pos[1] + move[1] > 500) {
    this.pos[1] = 500;
  } else {
    this.pos[1] += move[1];
  }

  // if ( this.pos[1] < -40 ){
  //     alert("YOU WON!!! Press 'okay' to play again")
  //     window.location.reload();
  // }
  //bottom water wall

  // top water wall of the bottom
  // if (150 > this.pos[1] + move[1] && this.pos[1] + move[1] > 100 && this.pos[0] < 200) {
  //     this.pos[1] = 150;
  // }
  //  if ( this.pos[1] + move[1] < 150 &&  ) {
  //     this.pos[1] = 150;
  // }
};

module.exports = Chicken;

const MovingObject = require("./moving_object");
const Util = require("./util");

function Croco(options) {
  this.pos = [80, 100];
}

Util.inherits(Croco, MovingObject);

module.exports = Croco;

const Chicken = require('./chicken.js');
const Game = require('./game.js');

function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
}


GameView.prototype.start = function() {
    this.bindKeyHandlers();
    const interval = setInterval( () => { 
        this.game.moveObjects();
        this.game.draw(this.ctx);
        if (this.game.checkCollisions()) {
            this.end(interval);
        }
        // this.game.win();
        
    }, 10);


    // this.game.moveObjects();
    // requestAnimationFrame(this.game.draw(this.ctx)

};
GameView.prototype.end = function(interval){
    alert("RIP..... press 'okay' to play again");
    // window.location.reload();
    clearInterval(interval);
}

GameView.MOVES = {
    w: [0, -25],
    a: [-25, 0],
    s: [0, 25],
    d: [25, 0],
};


GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const chicken = this.game.chicken;

    Object.keys(GameView.MOVES).forEach(function (k) {
        const move = GameView.MOVES[k];
        key(k, function () { chicken.moves(move); });
    });
};

module.exports = GameView;
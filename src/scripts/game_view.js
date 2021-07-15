const Chicken = require('./chicken.js')

function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
}


GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval( () => { 
        this.game.moveObjects();
        this.game.draw(this.ctx);
        // this.game.checkCollisions();
        // this.game.win();
        
    }, 10);
    // this.game.moveObjects();
    // requestAnimationFrame(this.game.draw(this.ctx)

};

GameView.MOVES = {
    w: [0, -20],
    a: [-20, 0],
    s: [0, 20],
    d: [20, 0],
};


GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const chicken = this.game.chicken;

    Object.keys(GameView.MOVES).forEach(function (k) {
        const move = GameView.MOVES[k];
        key(k, function () { chicken.moves(move); });
    });
};

module.exports = GameView;
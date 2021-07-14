function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
}


GameView.prototype.start = function() {
    setInterval( () => { 
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }, 10);
    
};

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};


GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const chicken = this.chicken;

    Object.keys(GameView.MOVES).forEach(function (k) {
        const move = GameView.MOVES[k];
        key(k, function () { chicken.move(move); });
    });
};

module.exports = GameView;
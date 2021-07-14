function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
}


GameView.prototype.start = function() {
    setInterval( () => { 
        this.game.moveObjects();
        this.game.chicken.move();
        this.game.draw(this.ctx);
    }, 10);

};

module.exports = GameView;
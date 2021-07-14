function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.chicken = this.game.addChicken();
}


GameView.prototype.start = function() {
    setInterval(this.game.moveObjects(), 20);
    setInterval(this.game.draw(this.ctx), 20);
};

module.exports = GameView;
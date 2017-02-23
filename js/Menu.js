/**
 * Menu state.
 */

var Mar10 = Mar10 || {};

Mar10.Menu = function () {
    Phaser.State.call(this);
    this.music = null;
    this.playButton = null;
};

Mar10.Menu.prototype = {
    create: function () {
        // Play music and display image
        this.music = this.add.audio('titleMusic', 1, true, true);
        this.music.play();

        this.add.sprite(0, 0, 'title');

        this.playButton = this.add.button(
            this.game.world.centerX - 90,
            this.game.world.centerY - 25,
            'buttonStart',
            this.startGame, 
            this);
    },

    update: function () {

    },

    startGame: function () { // Start game button clicked
        this.music.stop();
        this.game.add.audio('mario-yippee').play();

        // Fade out button
        this.game.time.events.add(0, function () {
            this.game.add.tween(this.playButton).to({y: 0}, 1000, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.playButton).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
        }, this);
        this.game.time.events.add(1000, function () {
            this.state.start('GameLogic', true, false)
        }, this);
    }
};
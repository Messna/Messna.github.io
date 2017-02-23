/**
 * Loading screen
 */

var Mar10 = Mar10 || {};

Mar10.Preloader = function (game) {
    Phaser.State.call(this);
    this.background = null;
    this.preloadBar = null;

    this.ready = false;
};

Mar10.Preloader.prototype = {
    preload: function () {
        // Get loaded assets
        this.background = this.add.sprite(0, 0, 'title');
        this.preloadBar = this.add.sprite(250, this.game.world.centerY, 'preloadbar');

        this.load.setPreloadSprite(this.preloadBar);

        this.load.pack('level', 'assets/assets-pack.json');
        this.load.audio('titleMusic', ['assets/audios/titlemusic.mp3']);
    },

    create: function () {
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        // Wait until music decoded
        if (this.cache.isSoundDecoded('titleMusic') && this.ready == false) {
            this.ready = true;
            this.state.start('Menu');
        }
    }
};
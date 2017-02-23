/**
 * Preload loading screen.
 */

var Mar10 = Mar10 || {}; // Namespace

Mar10.Boot = function () {
    Phaser.State.call(this); // Call parent constructor
};

Mar10.Boot.prototype = {
    init: function () {
        this.input.maxPointers = 1; // No Multitouch
        this.stage.disableVisibilityChange = true; // Pause if focus lost
        this.scale.pageAlignHorizontally = true;
    },

    preload: function () {
        // Load content for loading screen
        this.load.image('title', 'assets/images/titlescreen.png');
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },

    create: function () {
        // Show loading screen
        this.state.start('Preloader');
    }
};
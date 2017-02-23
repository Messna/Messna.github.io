window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)

    var game = new Phaser.Game(768, 672, Phaser.AUTO, 'gameContainer');

    game.global = {
        lives : 5,
        currLevel : 0
    };

    game.state.add('Boot', Mar10.Boot);
    game.state.add('Preloader', Mar10.Preloader);
    game.state.add('Menu', Mar10.Menu);
    game.state.add('GameLogic', Mar10.GameLogic);

    game.state.start('Boot');
};

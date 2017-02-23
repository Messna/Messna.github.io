/**
 * Created by Anon on 10.02.2017.
 */

var Mar10 = Mar10 || {};

Mar10.Player = function (context, x, y) {
    Phaser.Sprite.call(this, context.game, x, y, 'mario_small', 0, this);
    this.scale.setTo(-1.0, 1.0);
    this.animations.add('walk', [0, 1], 10, true);
    this.animations.add('idle', [1], 60, false);
    this.animations.add('jump', [3, 2], 2, true);
    this.animations.add('die', [4], 1, true);
    context.game.add.existing(this);
    context.game.physics.arcade.enable(this);
    this.body.setSize(45.85009765625, 57.3162841796875, 2.5082244873046875, 38.6837158203125);

    if (this.game.global["currLevel"] == 0)
        this.tint = 0xa6a6a6;


    this.context = context;
    this.killed = false;
    this.bigMario = false;
    this.immunity = false;

    this.soundSmall = context.game.add.audio('smw_pipe');
};
Mar10.Player.prototype = Object.create(Phaser.Sprite.prototype);
Mar10.Player.prototype.constructor = Mar10.Player;

Mar10.Player.prototype.growMario = function () {
    this.loadTexture('mario_big', 0, false);
    this.body.setSize(46.5, 84, 3, 12);
    this.bigMario = true;
};

Mar10.Player.prototype.getDamaged = function () {
    if (this.immunity) return; // 3 seconds grace time

    if (this.bigMario) { // Make him small again
        this.soundSmall.play();
        this.loadTexture('mario_small', 0, false);
        this.body.setSize(45.85009765625, 57.3162841796875, 2.5082244873046875, 38.6837158203125);
        this.bigMario = false;
        this.immunity = true;
        this.game.time.events.add(3000, function () {
            this.immunity = false;
        }, this);
    } else
        this.kill();
};

Mar10.Player.prototype.kill = function () {
    if (this.killed) // Dont get killed if dead already
        return;
    this.killed = true;

    var lives = this.game.global["lives"]--;

    // Change music
    this.context.musicLevel.stop();
    this.context.game.add.audio('smw_lost_a_life').play();

    var dieString = (lives > 0 ? "You died. Sad." : "Game over. So sad.");
    var dieText = this.game.add.text(
        this.game.camera.width / 2 - dieString.length * 9,
        this.game.camera.height / 2 - 24,
        dieString,
        {
            font: "48px Arial",
            fill: "#ff0044",
            align: "left"
        }
    );
    dieText.fixedToCamera = true;

    // Stop player
    this.game.input.enabled = false;
    this.body.velocity.x = 0;
    this.animations.stop();

    // Die animation
    this.body.velocity.y = -1800;
    this.animations.play('die', 0.3, false);
    this.events.onAnimationComplete.addOnce(function() { // Animation completed
        this.exists = false;
        this.visible = false;
        this.game.input.enabled = true;
        this.events.destroy();

        if (lives > 0)
            this.game.state.restart(true, false); // Reload level with keeping cache
        else
            window.location.reload(false);
    }, this);

    if (this.events) {
        this.events.onKilled$dispatch(this);
    }

    return this;
};

/**
 * Contains the general Gamelogic.
 */

var Mar10 = Mar10 || {};

Mar10.GameLogic = function () {
	Phaser.State.call(this);
	this.speed = 200;
	this.coins = 0;
	this.levelFinished = false;
};

Mar10.GameLogic.prototype.preload = function() {
    this.soundJump = this.game.add.audio('smw_jump');
    this.soundCoin = this.game.add.audio('smw_coin');
    this.soundStomp = this.game.add.audio('smw_stomp');
    this.soundPowerUpSpawn = this.game.add.audio('smw_power-up_appears');
    this.soundPowerUp = this.game.add.audio('smw_power-up');
    this.soundJumpBlock = this.game.add.audio('smw_spring_jump');
    this.soundLevelEnd = this.game.add.audio('sm64_here_we_go');
};

Mar10.GameLogic.prototype.init = function() {
    this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.setMinMax(256, 224, 768, 672);

	this.physics.startSystem(Phaser.Physics.Arcade);
	this.physics.arcade.gravity.y = 5000;
};

Mar10.GameLogic.prototype.create = function() {
    // Load current level/scene
    // TODO So much boilerplate...
    switch (this.game.global['currLevel']) {
        case 0:
            this.scene = new Scene1(this.game);
            break;
        case 1:
            this.scene = new Scene2(this.game);
            break;
        default:
            this.scene = new Scene1(this.game);
            break;
    }

	// Setup camera following player
	this.game.world.setBounds(0, 0, 7000, 1200);
    this.game.camera.follow(this.scene.fPlayer, Phaser.Camera.FOLLOW_PLATFORMER);
    this.scene.fBackground_stars.fixedToCamera = true;

	// Physics of collision sprites
	this.scene.fCollisions.setAllChildren('body.immovable', true);
	this.scene.fCollisions.setAllChildren('body.allowGravity', false);
	// Hide invisible wall
	this.scene.fCollisionLayer.setAll('renderable', false);

	this.scene.fCoins.setAll('body.immovable', false);

    this.scene.fCollisionBlocks.setAll('body.checkCollision.left', false);
    this.scene.fCollisionBlocks.setAll('body.checkCollision.right', false);
    this.scene.fCollisionBlocks.setAll('body.checkCollision.down', false);

    this.scene.fGoombas.setAll('body.immovable', false);
    this.scene.fGoombas.setAll('body.allowGravity', true);

	this.cursor = this.input.keyboard.createCursorKeys();
	this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);

	// Kill player when out of bounds
	this.scene.fPlayer.checkWorldBounds = true;
	this.scene.fPlayer.outOfBoundsKill = true;

    this.game.physics.arcade.enable(this.scene.fPlayer);

    // Setup UI
    var liveText = this.game.add.text(32, 32, 'Lives: ' + this.game.global['lives'], {
        font: '32px Arial',
        fill: '#ff0044',
        align: 'left'
    });
    liveText.fixedToCamera = true;

    this.coinText = this.game.add.text(300, 32, 'Coins: ' + this.coins, {
        font: '32px Arial',
        fill: '#ff0044',
        align: 'left'
    });
    this.coinText.fixedToCamera = true;
};

Mar10.GameLogic.prototype.update = function() {
    // this.game.debug.cameraInfo(this.game.camera, 32, 32);
    // this.game.debug.spriteCoords(this.scene.fPlayer, 32, 500);
    // this.game.debug.text(this.game.time.fps, 120, 32, '#00ff00');

    if (this.scene.fPlayer.killed) // Skip checks if dead already
        return;

    setupCollisions(this.physics.arcade, this.scene, this);

    setupMovement(this.scene.fPlayer, this);

    // Mushrooms will turn around when hitting walls
	this.scene.fPowerups.forEachAlive(function(item) {
	    if (item.body.touching.left)
	        item.body.velocity.x = 300;
	    else if (item.body.touching.right)
	        item.body.velocity.x = -300;
    });

	// Goombas will turn around when hitting walls
    this.scene.fGoombas.forEachAlive(function(goomba) {
        if (goomba.body.touching.left) {
            goomba.body.velocity.x = 100;
            goomba.scale.setTo(-1.0, 1.0);
            goomba.x = goomba.x + 50; // Fix pos for scaling
        } else if (goomba.body.touching.right) {
            goomba.body.velocity.x = -100;
            goomba.scale.setTo(1.0, 1.0);
            goomba.x = goomba.x - 50; // Fix pos for scaling
        }
    });
};

Mar10.GameLogic.prototype.collectCoin = function (player, coin) {
    coin.body.enable = false;

    // Animate and remove collected coin
    this.add.tween(coin).to({
        y : coin.y - 50
    }, 600, 'Expo.easeOut', true);

    this.add.tween(coin.scale).to({
        x : 2,
        y : 2
    }, 600, 'Linear', true);

    this.add.tween(coin).to({
        alpha : 0.2
    }, 600, 'Linear', true).onComplete.add(coin.kill, coin);

    this.soundCoin.play();

    this.coins++;
    this.coinText.setText('Coins: ' + this.coins);
};

Mar10.GameLogic.prototype.magicBlockPressed = function (player, oldBlock) {
    if (player.body.touching.up) {
        // Exchange block with pressed one
        var pressedBlock = this.add.sprite(oldBlock.x, oldBlock.y, oldBlock.key, 'tileOut258.png');
        this.game.physics.arcade.enable(pressedBlock);
        pressedBlock.body.immovable = true;
        pressedBlock.body.allowGravity = false;
        this.scene.fCollisions.add(pressedBlock);

        oldBlock.kill();

        // Spawn magic mushroom
        this.soundPowerUpSpawn.play();
        var shroom = this.add.sprite(oldBlock.x, oldBlock.y - 48, 'mushroom');
        this.game.physics.arcade.enable(shroom);
        shroom.body.velocity.x = 300;
        this.scene.fPowerups.add(shroom);
        this.game.world.bringToTop(this.scene.fPowerups);
    }
};

Mar10.GameLogic.prototype.collectPowerUp = function (player, powerUp) {
    this.soundPowerUp.play();
    powerUp.kill();

    this.scene.fPlayer.growMario();
};

Mar10.GameLogic.prototype.marioVsEnemy = function (player, enemy) {
    if (!enemy.alive) return; // If enemy dead already ignore collision

    if (player.y < enemy.y) { // If player is higher than enemy kill it
        this.soundStomp.play();
        player.body.velocity.y = -1800;
        enemy.animations.play('die', 0.8, false);
        enemy.alive = false;
        enemy.body.velocity.x = 0;
        enemy.events.onAnimationComplete.addOnce(function() {
            enemy.kill();
        }, this);
    } else
        player.getDamaged();
};

Mar10.GameLogic.prototype.loadNextLevel = function (player) {
    if (this.levelFinished)
        return;
    this.levelFinished = true;

    this.game.global['currLevel']++;

    this.scene.musicLevel.stop();

    // Stop player
    this.game.input.enabled = false;
    player.animations.stop();

    // Hooray animation
    this.soundLevelEnd.play();
    player.body.velocity.x = 300;
    player.body.velocity.y = -1800;
    this.game.add.tween(player).to( { angle: 360 }, 1000, Phaser.Easing.Linear.None, true);
    this.game.time.events.add(4000, function () {
        this.game.input.enabled = true;
        this.game.state.start('GameLogic', true, false);
        this.levelFinished = false;
    }, this);
};

function setupCollisions(phys, scene, context) {
    var colls = [scene.fCollisionLayer, scene.fCollisionFullBlocks,
        scene.fCollisionBlocks, scene.fCollisions];
    var collsSpecial = [scene.fMagicBlock, scene.fMuncher, scene.fJumpBlock, scene.fCloudBlock];

    // Set player to collide with most sprite-groups
    phys.collide(scene.fPlayer, colls);
    phys.collide(scene.fPlayer, scene.fMagicBlock, context.magicBlockPressed, null, context);
    phys.collide(scene.fPlayer, scene.fMuncher, scene.fPlayer.getDamaged, null, scene.fPlayer);
    phys.overlap(scene.fPlayer, scene.fGoombas, context.marioVsEnemy, null, context);
    phys.collide(scene.fPlayer, scene.fCloudBlock, function (player, block) {
        // Cloud blocks disappear after 1 second
        this.game.time.events.add(1000, function () {
            block.kill();
        }, this);
    }, null, context);
    phys.collide(scene.fPlayer, scene.fJumpBlock, function (player) {
        if (player.body.touching.down) {
            this.soundJumpBlock.play();
            player.body.velocity.y = -2200;
        }
    }, null, context);

    // If player touches collectibles
    phys.overlap(scene.fPlayer, scene.fCoins, context.collectCoin, null, context);
    phys.overlap(scene.fPlayer, scene.fPowerups, context.collectPowerUp, null, context);
    /* TODO Overlap seems to set touching so you can jump from coins
     http://www.html5gamedevs.com/topic/3354-overlap-sets-touching-properties-correct-behavior-or-bug/
     */

    // Powerups need to collide too with the sprites
    phys.collide(scene.fPowerups, colls);
    phys.collide(scene.fPowerups, collsSpecial);

    // Goombas
    phys.collide(scene.fGoombas, colls);
    phys.collide(scene.fGoombas, collsSpecial);

    if (!this.levelFinished) // Only call once
        phys.overlap(scene.fPlayer, scene.fFinishLine, context.loadNextLevel, null, context);
}

function setupMovement(player, context) {
    if (player.killed || this.levelFinished) return;

    var touching = player.body.touching.down;

    if (touching)
        if (context.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT))
            context.speed = 600; // Run with Shift
        else
            context.speed = 400;

    if (context.cursor.left.isDown) {
        player.body.velocity.x = -context.speed;
        if (player.scale.x == -1)
            player.x = player.x - 50; // Fix pos for scaling
        player.scale.x = 1;

    } else if (context.cursor.right.isDown) {
        player.body.velocity.x = context.speed;
        if (player.scale.x == 1)
            player.x = player.x + 50; // Fix pos for scaling
        player.scale.x = -1; // Turn sprite to right
    } else { // Stand still
        if (player.body.velocity.x > 50 || player.body.velocity.x < -50) {
            player.body.velocity.x *= 0.8;
        } else
            player.body.velocity.x = 0;
    }

    if (touching && context.cursor.up.isDown) {
        player.body.velocity.y = -1500; // Jump
        context.soundJump.play();
    }

    // Set correct animations
    if (touching) {
        if (player.body.velocity.x == 0) {
            player.play('idle');
        } else {
            player.play('walk');
        }
    } else {
        player.play('jump');
    }
}
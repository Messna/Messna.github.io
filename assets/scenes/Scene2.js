// Generated by Phaser Editor v1.2.1

/**
 * Scene2.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function Scene2(aGame, aParent) {
    Phaser.Group.call(this, aGame, aParent);

    /* --- pre-init-begin --- */

    // you can insert code here
    this.musicLevel = this.game.add.audio("level2", 0.2, true, true);
    this.musicLevel.play();

    /* --- pre-init-end --- */

    var background_stars = this.game.add.sprite(0, 0, 'background_normal', null, this);
    background_stars.scale.setTo(1.5, 1.5);

    var deco = this.game.add.group(this);

    var tileOut163_png = this.game.add.sprite(2784, 336, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png.tint = 0xa6a6a6;

    var tileOut163_png1 = this.game.add.sprite(2832, 384, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png1.tint = 0xa6a6a6;

    var tileOut163_png2 = this.game.add.sprite(2880, 432, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png2.tint = 0xa6a6a6;

    var tileOut163_png21 = this.game.add.sprite(2928, 480, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png21.tint = 0xa6a6a6;

    var tileOut163_png22 = this.game.add.sprite(2976, 528, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png22.tint = 0xa6a6a6;

    var tileOut163_png23 = this.game.add.sprite(3024, 576, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png23.tint = 0xa6a6a6;

    var tileOut166_png = this.game.add.sprite(2976, 336, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png.tint = 0xa6a6a6;

    var tileOut166_png1 = this.game.add.sprite(3024, 384, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png1.tint = 0xa6a6a6;

    var tileOut166_png2 = this.game.add.sprite(3072, 432, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png2.tint = 0xa6a6a6;

    var tileOut166_png3 = this.game.add.sprite(3120, 480, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png3.tint = 0xa6a6a6;

    var tileOut63_png1111 = this.game.add.tileSprite(2832, 336, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png1111.tint = 0xa6a6a6;

    var tileOut63_png11111 = this.game.add.tileSprite(2880, 384, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11111.tint = 0xa6a6a6;

    var tileOut63_png11112 = this.game.add.tileSprite(2928, 432, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11112.tint = 0xa6a6a6;

    var tileOut63_png11113 = this.game.add.tileSprite(2976, 480, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11113.tint = 0xa6a6a6;

    var tileOut63_png11114 = this.game.add.tileSprite(3024, 528, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11114.tint = 0xa6a6a6;

    this.game.add.tileSprite(3216, 432, 144, 48, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(3168, 432, 48, 288, 'tilesSmw', 'tileOut64.png', deco);

    this.game.add.tileSprite(3360, 432, 48, 288, 'tilesSmw', 'tileOut65.png', deco);

    var tileOut63_png111141 = this.game.add.tileSprite(3072, 576, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111141.tint = 0xa6a6a6;

    this.game.add.tileSprite(48, 1104, 1488, 96, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut63_png111143 = this.game.add.tileSprite(3552, 432, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111143.tint = 0xa6a6a6;

    var tileOut63_png111144 = this.game.add.tileSprite(3504, 480, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111144.tint = 0xa6a6a6;

    var tileOut63_png111145 = this.game.add.tileSprite(3456, 528, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111145.tint = 0xa6a6a6;

    var tileOut63_png111146 = this.game.add.tileSprite(3408, 576, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111146.tint = 0xa6a6a6;

    var tileOut172_png1 = this.game.add.sprite(3456, 624, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png1.tint = 0xa6a6a6;

    var tileOut172_png11 = this.game.add.sprite(3504, 576, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png11.tint = 0xa6a6a6;

    var tileOut172_png111 = this.game.add.sprite(3552, 528, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png111.tint = 0xa6a6a6;

    var tileOut172_png112 = this.game.add.sprite(3600, 480, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png112.tint = 0xa6a6a6;

    var tileOut172_png113 = this.game.add.sprite(3648, 432, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png113.tint = 0xa6a6a6;

    var tileOut63_png1111451 = this.game.add.tileSprite(3408, 624, 48, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png1111451.tint = 0xa6a6a6;

    var tileOut172_png = this.game.add.sprite(3408, 672, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png.tint = 0xa6a6a6;

    var tileOut169_png = this.game.add.sprite(3408, 528, 'tilesSmw', 'tileOut169.png', deco);
    tileOut169_png.tint = 0xa6a6a6;

    var tileOut169_png1 = this.game.add.sprite(3456, 480, 'tilesSmw', 'tileOut169.png', deco);
    tileOut169_png1.tint = 0xa6a6a6;

    var tileOut169_png2 = this.game.add.sprite(3504, 432, 'tilesSmw', 'tileOut169.png', deco);
    tileOut169_png2.tint = 0xa6a6a6;

    this.game.add.tileSprite(4800, 768, 1728, 432, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.sprite(4992, 672, 'tilesSmw', 'tileOut116.png', deco);

    this.game.add.sprite(5040, 672, 'tilesSmw', 'tileOut120.png', deco);

    this.game.add.sprite(4944, 672, 'tilesSmw', 'tileOut115.png', deco);

    this.game.add.sprite(5088, 672, 'tilesSmw', 'tileOut121.png', deco);

    this.game.add.sprite(192, 1008, 'tilesSmw', 'tileOut104.png', deco);

    this.game.add.sprite(240, 1008, 'tilesSmw', 'tileOut105.png', deco);

    this.game.add.sprite(240, 960, 'tilesSmw', 'tileOut103.png', deco);

    this.game.add.sprite(192, 960, 'tilesSmw', 'tileOut102.png', deco);

    this.game.add.sprite(5904, 336, 'tilesSmw', 'tileOut60.png', deco);

    this.game.add.tileSprite(5904, 384, 48, 288, 'tilesSmw', 'tileOut61.png', deco);

    this.game.add.tileSprite(5760, 384, 48, 288, 'tilesSmw', 'tileOut58.png', deco);

    this.game.add.sprite(5760, 336, 'tilesSmw', 'tileOut57.png', deco);

    this.game.add.sprite(5760, 672, 'tilesSmw', 'tileOut59.png', deco);

    this.game.add.sprite(5904, 672, 'tilesSmw', 'tileOut62.png', deco);

    this.game.add.tileSprite(0, 1104, 48, 96, 'tilesSmw', 'tileOut288.png', deco);

    this.game.add.sprite(720, 1008, 'tilesSmw', 'tileOut116.png', deco);

    this.game.add.sprite(672, 1008, 'tilesSmw', 'tileOut115.png', deco);

    this.game.add.sprite(912, 1008, 'tilesSmw', 'tileOut121.png', deco);

    var tileOut63_png1111411 = this.game.add.tileSprite(3120, 624, 48, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png1111411.tint = 0xa6a6a6;

    var tileOut163_png231 = this.game.add.sprite(3072, 624, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png231.tint = 0xa6a6a6;

    var tileOut163_png232 = this.game.add.sprite(3120, 672, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png232.tint = 0xa6a6a6;

    this.game.add.sprite(5520, 768, 'tilesSmw', 'tileOut198.png', deco);

    this.game.add.sprite(5280, 816, 'tilesSmw', 'tileOut198.png', deco);

    this.game.add.sprite(4896, 816, 'tilesSmw', 'tileOut198.png', deco);

    this.game.add.sprite(816, 1008, 'tilesSmw', 'tileOut116.png', deco);

    this.game.add.sprite(768, 1008, 'tilesSmw', 'tileOut120.png', deco);

    this.game.add.sprite(864, 1008, 'tilesSmw', 'tileOut120.png', deco);

    this.game.add.tileSprite(3072, 912, 480, 288, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.sprite(3168, 768, 'tilesSmw', 'tileOut172.png', deco);

    this.game.add.sprite(3216, 816, 'tilesSmw', 'tileOut169.png', deco);

    this.game.add.sprite(3168, 816, 'tilesSmw', 'tileOut166.png', deco);

    this.game.add.sprite(3216, 768, 'tilesSmw', 'tileOut163.png', deco);

    this.game.add.sprite(3456, 816, 'tilesSmw', 'tileOut172.png', deco);

    this.game.add.sprite(3504, 864, 'tilesSmw', 'tileOut169.png', deco);

    this.game.add.sprite(3456, 864, 'tilesSmw', 'tileOut166.png', deco);

    this.game.add.sprite(3504, 816, 'tilesSmw', 'tileOut163.png', deco);

    this.game.add.tileSprite(3264, 768, 336, 48, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(3072, 768, 96, 144, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(3552, 768, 96, 432, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(3216, 480, 144, 240, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(3168, 864, 288, 48, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(3264, 816, 192, 48, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.sprite(3408, 672, 'tilesSmw', 'tileOut116.png', deco);

    this.game.add.sprite(3456, 672, 'tilesSmw', 'tileOut120.png', deco);

    this.game.add.sprite(3504, 672, 'tilesSmw', 'tileOut121.png', deco);

    this.game.add.sprite(3360, 672, 'tilesSmw', 'tileOut119.png', deco);

    this.game.add.sprite(3312, 672, 'tilesSmw', 'tileOut115.png', deco);

    this.game.add.tileSprite(4752, 768, 48, 432, 'tilesSmw', 'tileOut64.png', deco);

    this.game.add.tileSprite(6528, 768, 48, 432, 'tilesSmw', 'tileOut65.png', deco);

    var collisions = this.game.add.group(this);

    var collisionBlocks = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);
    collisionBlocks.position.setTo(480, 864);

    this.game.add.tileSprite(-432, 192, 1488, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);

    this.game.add.tileSprite(1056, 240, 48, 96, 'tilesSmw', 'tileOut284.png', collisionBlocks);

    var tileOut208_png1111 = this.game.add.tileSprite(2352, -576, 96, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png1111.tint = 0xa6a6a6;

    var tileOut211_png111 = this.game.add.sprite(2448, -576, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png111.tint = 0xa6a6a6;

    var tileOut209_png111 = this.game.add.sprite(2304, -576, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png111.tint = 0xa6a6a6;

    this.game.add.tileSprite(2736, -480, 144, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);

    this.game.add.sprite(2880, -480, 'tilesSmw', 'tileOut211.png', collisionBlocks);

    this.game.add.sprite(2688, -480, 'tilesSmw', 'tileOut209.png', collisionBlocks);

    var tileOut208_png11111 = this.game.add.tileSprite(3120, -480, 48, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png11111.tint = 0xa6a6a6;

    var tileOut211_png1111 = this.game.add.sprite(3168, -480, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png1111.tint = 0xa6a6a6;

    var tileOut209_png1111 = this.game.add.sprite(3072, -480, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png1111.tint = 0xa6a6a6;

    this.game.add.tileSprite(4320, -144, 1728, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);

    this.game.add.tileSprite(2592, -144, 576, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);

    this.game.add.sprite(4272, -144, 'tilesSmw', 'tileOut209.png', collisionBlocks);

    this.game.add.sprite(6048, -144, 'tilesSmw', 'tileOut211.png', collisionBlocks);

    var collisionFullBlocks = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(4176, 624, 'tilesSmw', 'tileOut291.png', collisionFullBlocks);

    this.game.add.sprite(4176, 672, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.tileSprite(3024, 768, 48, 432, 'tilesSmw', 'tileOut288.png', collisionFullBlocks);

    this.game.add.tileSprite(3648, 768, 48, 432, 'tilesSmw', 'tileOut284.png', collisionFullBlocks);

    this.game.add.sprite(0, 1056, 'tilesSmw', 'tileOut277.png', collisionFullBlocks);

    this.game.add.sprite(3024, 720, 'tilesSmw', 'tileOut277.png', collisionFullBlocks);

    this.game.add.sprite(3648, 720, 'tilesSmw', 'tileOut280.png', collisionFullBlocks);

    this.game.add.sprite(3600, 624, 'tilesSmw', 'tileOut291.png', collisionFullBlocks);

    this.game.add.sprite(3600, 672, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(960, 720, 'tilesSmw', 'tileOut231.png', collisionFullBlocks);

    this.game.add.sprite(1536, 1056, 'tilesSmw', 'tileOut280.png', collisionFullBlocks);

    this.game.add.sprite(4176, 720, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 768, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 816, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 864, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 912, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 960, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 1056, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 1104, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 1152, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4176, 1008, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    this.game.add.sprite(4320, 672, 'tilesSmw', 'tileOut231.png', collisionFullBlocks);

    this.game.add.sprite(4512, 672, 'tilesSmw', 'tileOut231.png', collisionFullBlocks);

    var collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var physics = this.game.add.sprite(0, 0, 'tilesSmw', 'tileOut2.png', collisionLayer);
    physics.scale.setTo(0.5, 25.0);

    var physics1 = this.game.add.sprite(6576, 0, 'tilesSmw', 'tileOut2.png', collisionLayer);
    physics1.scale.setTo(0.5, 25.0);

    var powerups = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var goombas = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(3600, 528, 'goomba', 0, goombas);

    this.game.add.sprite(2160, 384, 'goomba', 0, goombas);

    this.game.add.sprite(960, 960, 'goomba', 0, goombas);

    this.game.add.sprite(1008, 960, 'goomba', 0, goombas);

    this.game.add.sprite(1056, 960, 'goomba', 0, goombas);

    this.game.add.sprite(1104, 960, 'goomba', 0, goombas);

    this.game.add.sprite(1152, 960, 'goomba', 0, goombas);

    this.game.add.sprite(1200, 960, 'goomba', 0, goombas);

    this.game.add.sprite(2592, 384, 'goomba', 0, goombas);

    var damageBlocks = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var muncher = this.game.add.physicsGroup(Phaser.Physics.ARCADE, damageBlocks);

    this.game.add.sprite(1680, 432, 'muncher', 0, muncher);

    this.game.add.sprite(1728, 432, 'muncher', 0, muncher);

    this.game.add.sprite(2208, 384, 'muncher', 0, muncher);

    this.game.add.sprite(2064, 384, 'muncher', 0, muncher);

    this.game.add.sprite(2640, 384, 'muncher', 0, muncher);

    this.game.add.sprite(2448, 384, 'muncher', 0, muncher);

    this.game.add.sprite(2208, 336, 'muncher', 0, muncher);

    this.game.add.sprite(2208, 288, 'muncher', 0, muncher);

    this.game.add.sprite(2208, 240, 'muncher', 0, muncher);

    this.game.add.sprite(4512, 576, 'muncher', 0, muncher);

    var finishLine = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(5808, 576, 'tilesSmw', 'tileOut56.png', finishLine);

    this.game.add.sprite(5856, 576, 'tilesSmw', 'tileOut56.png', finishLine);

    var magicBlock = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(1008, 528, 'tilesSmw', 'tileOut41.png', magicBlock);

    this.game.add.sprite(4896, 528, 'tilesSmw', 'tileOut41.png', magicBlock);

    var jumpBlock = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(1536, 864, 'tilesSmw', 'tileOut225.png', jumpBlock);

    this.game.add.sprite(2544, 720, 'tilesSmw', 'tileOut225.png', jumpBlock);

    var cloudBlock = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.tileSprite(1632, 528, 240, 48, 'tilesSmw', 'tileOut214.png', cloudBlock);

    this.game.add.tileSprite(2016, 480, 240, 48, 'tilesSmw', 'tileOut214.png', cloudBlock);

    this.game.add.tileSprite(2112, 672, 240, 48, 'tilesSmw', 'tileOut214.png', cloudBlock);

    this.game.add.tileSprite(2304, 720, 240, 48, 'tilesSmw', 'tileOut214.png', cloudBlock);

    this.game.add.tileSprite(2448, 480, 240, 48, 'tilesSmw', 'tileOut214.png', cloudBlock);

    this.game.add.tileSprite(3840, 528, 240, 48, 'tilesSmw', 'tileOut214.png', cloudBlock);

    var coins = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(1536, 672, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1536, 768, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1536, 720, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1872, 336, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1920, 336, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3072, 576, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3312, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3264, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3072, 432, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(2160, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1536, 624, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3216, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4320, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4176, 432, 'tilesSmw', 'tileOut42.png', coins);

    // public fields

    this.fBackground_stars = background_stars;
    this.fCollisions = collisions;
    this.fCollisionBlocks = collisionBlocks;
    this.fCollisionFullBlocks = collisionFullBlocks;
    this.fCollisionLayer = collisionLayer;
    this.fPowerups = powerups;
    this.fGoombas = goombas;
    this.fDamageBlocks = damageBlocks;
    this.fMuncher = muncher;
    this.fFinishLine = finishLine;
    this.fMagicBlock = magicBlock;
    this.fJumpBlock = jumpBlock;
    this.fCloudBlock = cloudBlock;
    this.fCoins = coins;

    /* --- post-init-begin --- */

    // you can insert code here
    this.fPlayer = new Mar10.Player(this, 144, 960);

    background_stars.play('starShine');

    muncher.callAll('animations.add', 'animations', 'bite', [0, 1], 5, true);
    muncher.callAll('play', null, 'bite');
    muncher.callAll('body.setSize', 'body', 44.81, 49.56, 4.95, 46.44);

    goombas.callAll('animations.add', 'animations', 'walk', [0, 1], 6, true);
    goombas.callAll('animations.add', 'animations', 'die', [2], 1, true);
    goombas.callAll('play', null, 'walk');
    goombas.callAll('body.setSize', 'body', 48.36, 45.13, 2.51, 50.87);
    goombas.setAll('body.velocity.x', -100);

    cloudBlock.setAll("body.checkCollision.left", false);
    cloudBlock.setAll("body.checkCollision.right", false);
    cloudBlock.setAll("body.checkCollision.down", false);

    /* --- post-init-end --- */
}

/** @type Phaser.Group */
var Scene2_proto = Object.create(Phaser.Group.prototype);
Scene2.prototype = Scene2_proto;
Scene2.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here


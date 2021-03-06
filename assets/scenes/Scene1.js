// Generated by Phaser Editor v1.2.1

/**
 * Scene1.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function Scene1(aGame, aParent) {
    Phaser.Group.call(this, aGame, aParent);

    /* --- pre-init-begin --- */

    // you can insert code here
    this.musicLevel = this.game.add.audio("level1", 0.9, true, true);
    this.musicLevel.play();

    /* --- pre-init-end --- */

    var background_stars = this.game.add.sprite(0, 0, 'background_stars', 0, this);
    background_stars.scale.setTo(1.5, 1.5);
    background_stars.animations.add('starShine', [0, 1, 2, 1], 7, true);

    var deco = this.game.add.group(this);

    var tileOut163_png = this.game.add.sprite(2592, 720, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png.tint = 0xa6a6a6;

    var tileOut163_png1 = this.game.add.sprite(2640, 768, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png1.tint = 0xa6a6a6;

    var tileOut163_png2 = this.game.add.sprite(2688, 816, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png2.tint = 0xa6a6a6;

    var tileOut163_png21 = this.game.add.sprite(2736, 864, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png21.tint = 0xa6a6a6;

    var tileOut163_png22 = this.game.add.sprite(2784, 912, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png22.tint = 0xa6a6a6;

    var tileOut163_png23 = this.game.add.sprite(2832, 960, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png23.tint = 0xa6a6a6;

    var tileOut166_png = this.game.add.sprite(2784, 720, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png.tint = 0xa6a6a6;

    var tileOut166_png1 = this.game.add.sprite(2832, 768, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png1.tint = 0xa6a6a6;

    var tileOut166_png2 = this.game.add.sprite(2880, 816, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png2.tint = 0xa6a6a6;

    var tileOut166_png3 = this.game.add.sprite(2928, 864, 'tilesSmw', 'tileOut166.png', deco);
    tileOut166_png3.tint = 0xa6a6a6;

    var tileOut63_png1111 = this.game.add.tileSprite(2640, 720, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png1111.tint = 0xa6a6a6;

    var tileOut63_png11111 = this.game.add.tileSprite(2688, 768, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11111.tint = 0xa6a6a6;

    var tileOut63_png11112 = this.game.add.tileSprite(2736, 816, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11112.tint = 0xa6a6a6;

    var tileOut63_png11113 = this.game.add.tileSprite(2784, 864, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11113.tint = 0xa6a6a6;

    var tileOut63_png11114 = this.game.add.tileSprite(2832, 912, 144, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png11114.tint = 0xa6a6a6;

    this.game.add.tileSprite(3024, 816, 144, 288, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut64_png111 = this.game.add.tileSprite(2976, 816, 48, 288, 'tilesSmw', 'tileOut64.png', deco);
    tileOut64_png111.tint = 0xa6a6a6;

    var tileOut65_png111 = this.game.add.tileSprite(3168, 816, 48, 288, 'tilesSmw', 'tileOut65.png', deco);
    tileOut65_png111.tint = 0xa6a6a6;

    var tileOut63_png111141 = this.game.add.tileSprite(2880, 960, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111141.tint = 0xa6a6a6;

    this.game.add.tileSprite(48, 1104, 1248, 96, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(1200, 960, 144, 96, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut65_png = this.game.add.tileSprite(1344, 960, 48, 240, 'tilesSmw', 'tileOut65.png', deco);
    tileOut65_png.tint = 0xa6a6a6;

    var tileOut64_png = this.game.add.tileSprite(1152, 960, 48, 96, 'tilesSmw', 'tileOut64.png', deco);
    tileOut64_png.tint = 0xa6a6a6;

    var tileOut65_png1 = this.game.add.tileSprite(2064, 912, 48, 288, 'tilesSmw', 'tileOut65.png', deco);
    tileOut65_png1.tint = 0xa6a6a6;

    this.game.add.tileSprite(1728, 912, 336, 288, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut64_png1 = this.game.add.tileSprite(1680, 912, 48, 288, 'tilesSmw', 'tileOut64.png', deco);
    tileOut64_png1.tint = 0xa6a6a6;

    this.game.add.tileSprite(2112, 720, 144, 480, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut64_png11 = this.game.add.tileSprite(2064, 720, 48, 144, 'tilesSmw', 'tileOut64.png', deco);
    tileOut64_png11.tint = 0xa6a6a6;

    var tileOut65_png11 = this.game.add.tileSprite(2256, 720, 48, 480, 'tilesSmw', 'tileOut65.png', deco);
    tileOut65_png11.tint = 0xa6a6a6;

    var tileOut63_png111143 = this.game.add.tileSprite(3360, 816, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111143.tint = 0xa6a6a6;

    var tileOut63_png111144 = this.game.add.tileSprite(3312, 864, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111144.tint = 0xa6a6a6;

    var tileOut63_png111145 = this.game.add.tileSprite(3264, 912, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111145.tint = 0xa6a6a6;

    var tileOut63_png111146 = this.game.add.tileSprite(3216, 960, 96, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png111146.tint = 0xa6a6a6;

    var tileOut172_png1 = this.game.add.sprite(3264, 1008, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png1.tint = 0xa6a6a6;

    var tileOut172_png11 = this.game.add.sprite(3312, 960, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png11.tint = 0xa6a6a6;

    var tileOut172_png111 = this.game.add.sprite(3360, 912, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png111.tint = 0xa6a6a6;

    var tileOut172_png112 = this.game.add.sprite(3408, 864, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png112.tint = 0xa6a6a6;

    var tileOut172_png113 = this.game.add.sprite(3456, 816, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png113.tint = 0xa6a6a6;

    var tileOut63_png1111451 = this.game.add.tileSprite(3216, 1008, 48, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png1111451.tint = 0xa6a6a6;

    var tileOut172_png = this.game.add.sprite(3216, 1056, 'tilesSmw', 'tileOut172.png', deco);
    tileOut172_png.tint = 0xa6a6a6;

    var tileOut169_png = this.game.add.sprite(3216, 912, 'tilesSmw', 'tileOut169.png', deco);
    tileOut169_png.tint = 0xa6a6a6;

    var tileOut169_png1 = this.game.add.sprite(3264, 864, 'tilesSmw', 'tileOut169.png', deco);
    tileOut169_png1.tint = 0xa6a6a6;

    var tileOut169_png2 = this.game.add.sprite(3312, 816, 'tilesSmw', 'tileOut169.png', deco);
    tileOut169_png2.tint = 0xa6a6a6;

    this.game.add.tileSprite(3744, 1008, 2784, 192, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.tileSprite(4560, 768, 1968, 240, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut116_png1 = this.game.add.sprite(4992, 672, 'tilesSmw', 'tileOut116.png', deco);
    tileOut116_png1.tint = 0xa6a6a6;

    var tileOut120_png1 = this.game.add.sprite(5040, 672, 'tilesSmw', 'tileOut120.png', deco);
    tileOut120_png1.tint = 0xa6a6a6;

    var tileOut115_png1 = this.game.add.sprite(4944, 672, 'tilesSmw', 'tileOut115.png', deco);
    tileOut115_png1.tint = 0xa6a6a6;

    var tileOut121_png1 = this.game.add.sprite(5088, 672, 'tilesSmw', 'tileOut121.png', deco);
    tileOut121_png1.tint = 0xa6a6a6;

    var tileOut104_png = this.game.add.sprite(192, 1008, 'tilesSmw', 'tileOut104.png', deco);
    tileOut104_png.tint = 0xa6a6a6;

    var tileOut105_png = this.game.add.sprite(240, 1008, 'tilesSmw', 'tileOut105.png', deco);
    tileOut105_png.tint = 0xa6a6a6;

    var tileOut103_png = this.game.add.sprite(240, 960, 'tilesSmw', 'tileOut103.png', deco);
    tileOut103_png.tint = 0xa6a6a6;

    var tileOut102_png = this.game.add.sprite(192, 960, 'tilesSmw', 'tileOut102.png', deco);
    tileOut102_png.tint = 0xa6a6a6;

    this.game.add.sprite(5904, 336, 'tilesSmw', 'tileOut60.png', deco);

    this.game.add.tileSprite(5904, 384, 48, 288, 'tilesSmw', 'tileOut61.png', deco);

    this.game.add.tileSprite(5760, 384, 48, 288, 'tilesSmw', 'tileOut58.png', deco);

    this.game.add.sprite(5760, 336, 'tilesSmw', 'tileOut57.png', deco);

    this.game.add.sprite(5760, 672, 'tilesSmw', 'tileOut59.png', deco);

    this.game.add.sprite(5904, 672, 'tilesSmw', 'tileOut62.png', deco);

    var tileOut288_png = this.game.add.tileSprite(0, 1104, 48, 96, 'tilesSmw', 'tileOut288.png', deco);
    tileOut288_png.tint = 0xa6a6a6;

    var tileOut116_png = this.game.add.sprite(720, 1008, 'tilesSmw', 'tileOut116.png', deco);
    tileOut116_png.tint = 0xa6a6a6;

    var tileOut120_png = this.game.add.sprite(768, 1008, 'tilesSmw', 'tileOut120.png', deco);
    tileOut120_png.tint = 0xa6a6a6;

    var tileOut115_png = this.game.add.sprite(672, 1008, 'tilesSmw', 'tileOut115.png', deco);
    tileOut115_png.tint = 0xa6a6a6;

    var tileOut121_png = this.game.add.sprite(816, 1008, 'tilesSmw', 'tileOut121.png', deco);
    tileOut121_png.tint = 0xa6a6a6;

    this.game.add.tileSprite(2448, 1056, 384, 144, 'tilesSmw', 'tileOut63.png', deco);

    this.game.add.sprite(2832, 1104, 'tilesSmw', 'tileOut436.png', deco);

    this.game.add.tileSprite(2832, 1152, 624, 48, 'tilesSmw', 'tileOut63.png', deco);

    var tileOut63_png1111411 = this.game.add.tileSprite(2928, 1008, 48, 48, 'tilesSmw', 'tileOut63.png', deco);
    tileOut63_png1111411.tint = 0xa6a6a6;

    var tileOut163_png231 = this.game.add.sprite(2880, 1008, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png231.tint = 0xa6a6a6;

    var tileOut163_png232 = this.game.add.sprite(2928, 1056, 'tilesSmw', 'tileOut163.png', deco);
    tileOut163_png232.tint = 0xa6a6a6;

    this.game.add.sprite(5520, 768, 'tilesSmw', 'tileOut198.png', deco);

    this.game.add.sprite(5280, 816, 'tilesSmw', 'tileOut198.png', deco);

    this.game.add.sprite(4896, 816, 'tilesSmw', 'tileOut198.png', deco);

    var collisions = this.game.add.group(this);

    var collisionBlocks = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);
    collisionBlocks.position.setTo(480, 864);

    var tileOut208_png = this.game.add.tileSprite(-432, 192, 1248, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png.tint = 0xa6a6a6;

    var tileOut208_png1 = this.game.add.tileSprite(720, 48, 144, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png1.tint = 0xa6a6a6;

    var tileOut284_png = this.game.add.tileSprite(816, 240, 48, 96, 'tilesSmw', 'tileOut284.png', collisionBlocks);
    tileOut284_png.tint = 0xa6a6a6;

    var tileOut211_png = this.game.add.sprite(864, 48, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png.tint = 0xa6a6a6;

    var tileOut208_png11 = this.game.add.tileSprite(1248, 0, 336, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png11.tint = 0xa6a6a6;

    var tileOut209_png1 = this.game.add.sprite(1200, 0, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png1.tint = 0xa6a6a6;

    var tileOut209_png = this.game.add.sprite(672, 48, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png.tint = 0xa6a6a6;

    var tileOut212_png = this.game.add.sprite(1584, 0, 'tilesSmw', 'tileOut212.png', collisionBlocks);
    tileOut212_png.tint = 0xa6a6a6;

    var tileOut208_png111 = this.game.add.tileSprite(1632, -192, 144, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png111.tint = 0xa6a6a6;

    var tileOut211_png11 = this.game.add.sprite(1776, -192, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png11.tint = 0xa6a6a6;

    var tileOut209_png11 = this.game.add.sprite(1584, -192, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png11.tint = 0xa6a6a6;

    var tileOut208_png1111 = this.game.add.tileSprite(2160, -192, 96, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png1111.tint = 0xa6a6a6;

    var tileOut211_png111 = this.game.add.sprite(2256, -192, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png111.tint = 0xa6a6a6;

    var tileOut209_png111 = this.game.add.sprite(2112, -192, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png111.tint = 0xa6a6a6;

    var tileOut208_png1112 = this.game.add.tileSprite(2544, -96, 144, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png1112.tint = 0xa6a6a6;

    var tileOut211_png112 = this.game.add.sprite(2688, -96, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png112.tint = 0xa6a6a6;

    var tileOut209_png112 = this.game.add.sprite(2496, -96, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png112.tint = 0xa6a6a6;

    var tileOut208_png11111 = this.game.add.tileSprite(2928, -96, 48, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png11111.tint = 0xa6a6a6;

    var tileOut211_png1111 = this.game.add.sprite(2976, -96, 'tilesSmw', 'tileOut211.png', collisionBlocks);
    tileOut211_png1111.tint = 0xa6a6a6;

    var tileOut209_png1111 = this.game.add.sprite(2880, -96, 'tilesSmw', 'tileOut209.png', collisionBlocks);
    tileOut209_png1111.tint = 0xa6a6a6;

    var tileOut208_png2 = this.game.add.tileSprite(3264, 96, 768, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png2.tint = 0xa6a6a6;

    var tileOut208_png21 = this.game.add.tileSprite(4080, -144, 1968, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png21.tint = 0xa6a6a6;

    var tileOut208_png22 = this.game.add.tileSprite(1968, 144, 384, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png22.tint = 0xa6a6a6;

    var tileOut208_png221 = this.game.add.tileSprite(2400, 240, 576, 48, 'tilesSmw', 'tileOut208.png', collisionBlocks);
    tileOut208_png221.tint = 0xa6a6a6;

    var collisionFullBlocks = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var tileOut288_png1 = this.game.add.tileSprite(3696, 1008, 48, 192, 'tilesSmw', 'tileOut288.png', collisionFullBlocks);
    tileOut288_png1.tint = 0xa6a6a6;

    var tileOut277_png1 = this.game.add.sprite(3696, 960, 'tilesSmw', 'tileOut277.png', collisionFullBlocks);
    tileOut277_png1.tint = 0xa6a6a6;

    var tileOut284_png1 = this.game.add.tileSprite(6528, 768, 48, 432, 'tilesSmw', 'tileOut284.png', collisionFullBlocks);
    tileOut284_png1.tint = 0xa6a6a6;

    this.game.add.sprite(4368, 864, 'tilesSmw', 'tileOut291.png', collisionFullBlocks);

    this.game.add.sprite(3936, 816, 'tilesSmw', 'tileOut259.png', collisionFullBlocks);

    this.game.add.sprite(3984, 816, 'tilesSmw', 'tileOut260.png', collisionFullBlocks);

    this.game.add.tileSprite(3984, 864, 48, 96, 'tilesSmw', 'tileOut262.png', collisionFullBlocks);

    this.game.add.tileSprite(3936, 864, 48, 96, 'tilesSmw', 'tileOut261.png', collisionFullBlocks);

    this.game.add.sprite(4368, 912, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    var tileOut288_png11 = this.game.add.tileSprite(4512, 768, 48, 192, 'tilesSmw', 'tileOut288.png', collisionFullBlocks);
    tileOut288_png11.tint = 0xa6a6a6;

    var tileOut434_png = this.game.add.sprite(4512, 960, 'tilesSmw', 'tileOut434.png', collisionFullBlocks);
    tileOut434_png.tint = 0xa6a6a6;

    var tileOut277_png11 = this.game.add.sprite(4512, 720, 'tilesSmw', 'tileOut277.png', collisionFullBlocks);
    tileOut277_png11.tint = 0xa6a6a6;

    var tileOut280_png = this.game.add.sprite(6528, 720, 'tilesSmw', 'tileOut280.png', collisionFullBlocks);
    tileOut280_png.tint = 0xa6a6a6;

    var tileOut288_png12 = this.game.add.tileSprite(2400, 1056, 48, 144, 'tilesSmw', 'tileOut288.png', collisionFullBlocks);
    tileOut288_png12.tint = 0xa6a6a6;

    var tileOut284_png11 = this.game.add.tileSprite(3456, 1152, 48, 48, 'tilesSmw', 'tileOut284.png', collisionFullBlocks);
    tileOut284_png11.tint = 0xa6a6a6;

    var tileOut284_png111 = this.game.add.tileSprite(2832, 1056, 48, 48, 'tilesSmw', 'tileOut284.png', collisionFullBlocks);
    tileOut284_png111.tint = 0xa6a6a6;

    var tileOut277_png = this.game.add.sprite(0, 1056, 'tilesSmw', 'tileOut277.png', collisionFullBlocks);
    tileOut277_png.tint = 0xa6a6a6;

    var tileOut281_png = this.game.add.sprite(1296, 1056, 'tilesSmw', 'tileOut281.png', collisionFullBlocks);
    tileOut281_png.tint = 0xa6a6a6;

    var tileOut277_png12 = this.game.add.sprite(2400, 1008, 'tilesSmw', 'tileOut277.png', collisionFullBlocks);
    tileOut277_png12.tint = 0xa6a6a6;

    var tileOut280_png1 = this.game.add.sprite(3456, 1104, 'tilesSmw', 'tileOut280.png', collisionFullBlocks);
    tileOut280_png1.tint = 0xa6a6a6;

    this.game.add.sprite(3408, 1008, 'tilesSmw', 'tileOut291.png', collisionFullBlocks);

    this.game.add.sprite(3408, 1056, 'tilesSmw', 'tileOut292.png', collisionFullBlocks);

    var tileOut280_png2 = this.game.add.sprite(2832, 1008, 'tilesSmw', 'tileOut280.png', collisionFullBlocks);
    tileOut280_png2.tint = 0xa6a6a6;

    var collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var physics = this.game.add.sprite(0, 0, 'tilesSmw', 'tileOut2.png', collisionLayer);
    physics.scale.setTo(0.5, 25.0);

    var physics1 = this.game.add.sprite(6576, 0, 'tilesSmw', 'tileOut2.png', collisionLayer);
    physics1.scale.setTo(0.5, 25.0);

    var coins = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(864, 864, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1776, 672, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(1824, 672, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(2400, 480, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(2448, 480, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3072, 576, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4704, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4752, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4800, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4848, 528, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4752, 480, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(4800, 480, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3600, 672, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3648, 720, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3696, 768, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3744, 816, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(3792, 864, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(2880, 816, 'tilesSmw', 'tileOut42.png', coins);

    this.game.add.sprite(2832, 816, 'tilesSmw', 'tileOut42.png', coins);

    var powerups = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var goombas = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(3216, 1008, 'goomba', 0, goombas);

    this.game.add.sprite(4176, 864, 'goomba', 0, goombas);

    var damageBlocks = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    var muncher = this.game.add.physicsGroup(Phaser.Physics.ARCADE, damageBlocks);

    this.game.add.sprite(1248, 960, 'muncher', 0, muncher);

    this.game.add.sprite(5328, 624, 'muncher', 0, muncher);

    this.game.add.sprite(5280, 624, 'muncher', 0, muncher);

    this.game.add.sprite(5232, 624, 'muncher', 0, muncher);

    this.game.add.sprite(1200, 960, 'muncher', 0, muncher);

    var finishLine = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(5808, 576, 'tilesSmw', 'tileOut56.png', finishLine);

    this.game.add.sprite(5856, 576, 'tilesSmw', 'tileOut56.png', finishLine);

    var magicBlock = this.game.add.physicsGroup(Phaser.Physics.ARCADE, collisions);

    this.game.add.sprite(576, 864, 'tilesSmw', 'tileOut41.png', magicBlock);

    // public fields

    this.fBackground_stars = background_stars;
    this.fCollisions = collisions;
    this.fCollisionBlocks = collisionBlocks;
    this.fCollisionFullBlocks = collisionFullBlocks;
    this.fCollisionLayer = collisionLayer;
    this.fCoins = coins;
    this.fPowerups = powerups;
    this.fGoombas = goombas;
    this.fDamageBlocks = damageBlocks;
    this.fMuncher = muncher;
    this.fFinishLine = finishLine;
    this.fMagicBlock = magicBlock;

    /* --- post-init-begin --- */

    // you can insert code here
    this.fPlayer = new Mar10.Player(this, 144, 960);

    background_stars.play('starShine');

    deco.setAll('tint', 0xa6a6a6);

    muncher.callAll('animations.add', 'animations', 'bite', [0, 1], 5, true);
    muncher.callAll('play', null, 'bite');
    muncher.callAll('body.setSize', 'body', 44.81, 49.56, 4.95, 46.44);

    goombas.callAll('animations.add', 'animations', 'walk', [0, 1], 6, true);
    goombas.callAll('animations.add', 'animations', 'die', [2], 1, true);
    goombas.callAll('play', null, 'walk');
    goombas.callAll('body.setSize', 'body', 48.36, 45.13, 2.51, 50.87);
    goombas.setAll('body.velocity.x', -100);

    /* --- post-init-end --- */
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here


let game;
let player;
let platforms;
let cursors;
let jumpButton;

let gravityStrength     = 1200;
let jumpStrength        = 650;
let moveStrength        = 250;
let playerBounciness    = 0.2;

class GameState extends Phaser.State {
	preload() {
        game                            = this.game;
        game.stage.backgroundColor      = '#85b5e1';
        game.load.baseURL               = 'http://examples.phaser.io/assets/';
        game.load.crossOrigin           = 'anonymous';

		game.load.image('player', 'sprites/phaser-dude.png');
		game.load.image('platform', 'sprites/platform.png');
	}

	create() {

        cursors         = game.input.keyboard.createCursorKeys();
        jumpButton      = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//  Set the world (global) gravity
		//game.physics.arcade.gravity.y = 1000;

        platforms       = game.add.physicsGroup();
		platforms.create(500, 150, 'platform');
		platforms.create(-200, 300, 'platform');
		platforms.create(400, 450, 'platform');
		platforms.setAll('body.immovable', true);

		player 			= game.add.sprite(100, 0, 'player');
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		player.body.bounce.y = playerBounciness;
		player.body.gravity.y = gravityStrength;

	}

	update() {
		game.physics.arcade.collide(player, platforms);

		player.body.velocity.x = 0;

		if (cursors.left.isDown) {
			player.body.velocity.x = -(moveStrength);
		}
		else if (cursors.right.isDown) {
			player.body.velocity.x = moveStrength;
		}

		if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
			player.body.velocity.y = -(jumpStrength);
		}
		//else if (jumpButton.isDown) {
		//	player.body.velocity.y = -150;
		//}
	}

}
export default GameState;
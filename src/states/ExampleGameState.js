import Config from '../config/game-config';

class GameState extends Phaser.State {

	constructor() {
		super();

		// keys
		this.leftKey                = null;
		this.rightKey               = null;
		this.jumpKey                = null;
		this.escKey                 = null;

		// sprites
		this.player                 = null;
		this.platforms              = null;

		// configuration
		this.gravityStrength        = 1200;
		this.jumpStrength           = 650;
		this.moveStrength           = 250;
		this.playerBounciness       = 0.2;
	}

	preload() {
		this._origStageBackgroundColor       = this.game.stage.backgroundColor;
		this.game.stage.backgroundColor      = '#85b5e1';
		this.game.load.image('player', 'images/tests/phaser-dude.png');
		this.game.load.image('platform', 'images/tests/platform.png');
	}

	create() {

		this.leftKey          = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rightKey         = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.jumpKey          = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.escKey           = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);

		this.escKey.onDown.add(this.onEscapePress);

		//  Set the world (global) gravity
		//game.physics.arcade.gravity.y = 1000;

		this.platforms       = this.game.add.physicsGroup();
		this.platforms.create(500, 150, 'platform');
		this.platforms.create(-200, 300, 'platform');
		this.platforms.create(400, 450, 'platform');
		this.platforms.setAll('body.immovable', true);

		this.player         = this.game.add.sprite(100, 0, 'player');

		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.player.body.bounce.y     = this.playerBounciness;
		this.player.body.gravity.y    = this.gravityStrength;

	}

	shutdown() {
		this.game.stage.backgroundColor     = this._origStageBackgroundColor;
	}

	update() {
		this.game.physics.arcade.collide(this.player, this.platforms);

		this.player.body.velocity.x = 0;
		//console.log('this.leftKey', this.leftKey.isDown, this.leftKey);
		if (this.leftKey.isDown) {
			this.player.body.velocity.x = -(this.moveStrength);
		}
		else if (this.rightKey.isDown) {
			this.player.body.velocity.x = this.moveStrength;
		}

		if (this.jumpKey.isDown && (this.player.body.onFloor() || this.player.body.touching.down)) {
			this.player.body.velocity.y = -(this.jumpStrength);
		}
		//else if (jumpButton.isDown) {
		//	player.body.velocity.y = -150;
		//}
	}

	onEscapePress() {
		console.log('you pressed ESC');
	}

}
export default GameState;
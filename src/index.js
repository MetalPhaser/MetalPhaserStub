import ExampleGameState from './states/ExampleGameState';

class Game extends Phaser.Game {

	constructor() {
		super(800, 700, Phaser.AUTO, 'content', null);
		this.state.add('ExampleGameState', ExampleGameState, false);
		this.state.start('ExampleGameState');
	}
}

new Game();

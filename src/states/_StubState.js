//import Config from '../config/game-config';
//import KeyboardUtils from '../utils/KeyboardUtils';

class State extends Phaser.State {

	constructor() {
		super();
	}

	preload() {
		//this.game.stage.backgroundColor      = Config.stage.backgroundColor;
	}

	create() {
		//this.game.input.keyboard.onDownCallback = this.handleKeypress.bind(this);
	}

	shutdown() {
		//this.game.input.keyboard.onDownCallback = null;
	}

	update() {}

	handleKeypress(/*keyboardEvent*/) {}

}
export default State;
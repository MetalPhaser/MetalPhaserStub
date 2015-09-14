
class MetalKeyboard extends Phaser.Keyboard {

	constructor() {
		super();
		this.useWASDAsMoveKeys = false;

		this.moveKeys     = [ Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT];
		this.WASDKeys     = [ Phaser.Keyboard.W, Phaser.Keyboard.A, Phaser.Keyboard.S, Phaser.Keyboard.D ];
		this.numberKeys   = [ Phaser.Keyboard.ZERO, Phaser.Keyboard.ONE, Phaser.Keyboard.TWO, Phaser.Keyboard.THREE,
													Phaser.Keyboard.FOUR, Phaser.Keyboard.FIVE, Phaser.Keyboard.SIX, Phaser.Keyboard.SEVEN,
													Phaser.Keyboard.EIGHT, Phaser.Keyboard.NINE,
													Phaser.Keyboard.NUMPAD_0, Phaser.Keyboard.NUMPAD_1, Phaser.Keyboard.NUMPAD_2, Phaser.Keyboard.NUMPAD_3,
													Phaser.Keyboard.NUMPAD_4, Phaser.Keyboard.NUMPAD_5, Phaser.Keyboard.NUMPAD_6, Phaser.Keyboard.NUMPAD_7,
													Phaser.Keyboard.NUMPAD_8, Phaser.Keyboard.NUMPAD_9 ];
	}

	isMoveKey(code=-1) {
		let found = this.moveKeys.indexOf(code) > -1;
		if ( this.useWASDAsMoveKeys ) {
			found = found || this.WASDKeys.indexOf(code) > -1
		}
		return found;
	}

	isNumberKey(code=-1) {
		return this.numberKeys.indexOf(code) > -1;
	}

	getValue(code=-1) {
		return String.fromCharCode(code) || null;
	}

}
export default new MetalKeyboard();
import Foo2 from './Foo2.js';

export default class Foo1 {

	constructor() {

		// Isolate the impact of eval within makeFunction
		let makeFunction = text => {
			return eval("(function() { " + text + "})");
		};

		this.test = makeFunction('let foo2 = new Foo2(); foo2.test();');
	}

}
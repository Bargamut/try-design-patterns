import { FlyNoWay, FlyWithWings } from "./behavior-fly.js";
import { MuteQuack, Quack, Squeack } from "./behavior-quack.js";

/**
 * @description Main class for Duck
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class Duck
 */
class Duck {
	constructor() {
		this.flyBehavior = null;
		this.quackBehavior = null;
	}

	display() {
		throw Error(`Must be realised!`);
	}

	swim() {
		console.log(`I can swim! Can you swim like me?`);
	}

	performQuack() {
		if (this.quackBehavior.quack instanceof Function) this.quackBehavior.quack();
		else throw Error(`Can't find quackBehavior(): ${this.quackBehavior.quack}`);
	}

	performFly() {
		if (this.flyBehavior.fly instanceof Function) this.flyBehavior.fly();
		else throw Error(`Can't find flyBehavior(): ${this.flyBehavior.fly}`);
	}
}

/**
 * @description Subclass for Mallard duck from Duck
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class MallardDuck
 * @extends {Duck}
 */
export class MallardDuck extends Duck {
	constructor() {
		super();

		this.flyBehavior = new FlyWithWings();
		this.quackBehavior = new Quack();
	}

	display() {
		console.log(`I'm a real Mallard duck!`);
	}
}

/**
 * @description Subclass for Squeack duck from Duck
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class SqueackDuck
 * @extends {Duck}
 */
export class SqueackDuck extends Duck {
	constructor() {
		super();

		this.flyBehavior = new FlyWithWings();
		this.quackBehavior = new Squeack();
	}

	display() {
		console.log(`I'm a real Squeack duck!`);
	}
}

/**
 * @description Subclass for Decoy duck from Duck
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class DecoyDuck
 * @extends {Duck}
 */
export class DecoyDuck extends Duck {
	constructor() {
		super();

		this.flyBehavior = new FlyNoWay();
		this.quackBehavior = new MuteQuack();
	}

	display() {
		console.log(`I'm a real Decoy duck!`);
	}
}
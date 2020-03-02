/**
 * @description Main class for Duck
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class Duck
 */
class Duck {
	constructor() {
		this.flyBehaviorObj = null;
		this.quackBehaviorObj = null;
	}

	set quackBehavior(quackBehaviorObject) {
		if (quackBehaviorObject) this.quackBehaviorObj = quackBehaviorObject;
	}

	set flyBehavior(flyBehaviorObject) {
		if (flyBehaviorObject) this.flyBehaviorObj = flyBehaviorObject;
	}

	display() {
		throw Error(`Must be realised!`);
	}

	swim() {
		console.log(`I can swim! Can you swim like me?`);
	}

	performQuack() {
		if (this.quackBehaviorObj.quack instanceof Function) this.quackBehaviorObj.quack();
		else throw Error(`Can't find quackBehavior(): ${this.quackBehaviorObj.quack}`);
	}

	performFly() {
		if (this.flyBehaviorObj.fly instanceof Function) this.flyBehaviorObj.fly();
		else throw Error(`Can't find flyBehavior(): ${this.flyBehaviorObj.fly}`);
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
	}

	display() {
		console.log(`I'm a real Decoy duck!`);
	}
}
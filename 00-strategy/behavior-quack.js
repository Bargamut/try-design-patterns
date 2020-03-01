/**
 * @description Main class for quack behavior
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class QuackBehavior
 */
class QuackBehavior {
	quack() {
		throw Error(`You need to realise quack() method in your subclass`)
	}
}

/**
 * @description Subclass for quack
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class Quack
 * @extends {QuackBehavior}
 */
export class Quack extends QuackBehavior {
	quack() {
		console.log(`QUACK!`);
	}
}

/**
 * @description Subclass for squeack
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class Quack
 * @extends {QuackBehavior}
 */
export class Squeack extends QuackBehavior {
	quack() {
		console.log(`Squeack!`);
	}
}

/**
 * @description Subclass for not quacking items
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class MuteQuack
 * @extends {QuackBehavior}
 */
export class MuteQuack extends QuackBehavior {
	quack() {
		console.log(`<< ...silence... >>`);
	}
}
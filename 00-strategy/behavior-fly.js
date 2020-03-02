/**
 * @description Main class for fly behavior
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class FlyBehavior
 */
class FlyBehavior {
	fly() {
		throw Error(`You need to realise fly() method in your subclass`)
	}
}

/**
 * @description Subclass for not flying items
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class FlyNoWay
 * @extends {FlyBehavior}
 */
export class FlyNoWay extends FlyBehavior {
	fly() {
		console.log(`I can't fly!`);
	}
}

/**
 * @description Subclass for flying with wings
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-01
 * @class FlyWithWings
 * @extends {FlyBehavior}
 */
export class FlyWithWings extends FlyBehavior {
	fly() {
		console.log(`I believe I can flyyyyy!!!!`);
	}
}

/**
 * @description Subclass for flying with a rocket
 * @author Paul "Bargamut" Petrov
 * @date 2020-03-02
 * @class FlyRocketPowered
 * @extends {FlyBehavior}
 */
export class FlyRocketPowered extends FlyBehavior {
	fly() {
		console.log(`Wwweeeeee!!! I'm flying with a rocket!`);
	}
}
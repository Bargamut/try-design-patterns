import { MallardDuck, SqueackDuck, DecoyDuck } from "./ducks.js";
import { FlyNoWay, FlyWithWings, FlyRocketPowered } from "./behavior-fly.js";
import { MuteQuack, Quack, Squeack } from "./behavior-quack.js";

const mallardDuck = new MallardDuck(),
			squeackDuck = new SqueackDuck(),
			decoyDuck = new DecoyDuck();

mallardDuck.flyBehavior = new FlyWithWings();
mallardDuck.quackBehavior = new Quack();

squeackDuck.flyBehavior = new FlyWithWings();
squeackDuck.quackBehavior = new Squeack();

decoyDuck.flyBehavior = new FlyNoWay();
decoyDuck.quackBehavior = new MuteQuack();

mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

console.log(`\n`);

squeackDuck.display();
squeackDuck.performFly();
squeackDuck.performQuack();

console.log(`\n`);

decoyDuck.display();
decoyDuck.performFly();
decoyDuck.performQuack();

decoyDuck.flyBehavior = new FlyRocketPowered();
decoyDuck.performFly();
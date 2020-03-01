import { MallardDuck, SqueackDuck, DecoyDuck } from "./ducks.js";

const mallardDuck = new MallardDuck(),
			squeackDuck = new SqueackDuck(),
			decoyDuck = new DecoyDuck();

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
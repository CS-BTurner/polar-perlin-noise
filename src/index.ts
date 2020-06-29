import Agent from './agent';
import Point from './agent/point';
import Circle from './agent/circle';

// const [, , ...argv] = process.argv;
// const [x = 0, y = 0, tol = 1, speed = 1] = argv.map(Number);

const origin = new Point(0, 0);
const unitCircle = new Circle(origin, 1);

function timeout(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function main(): Promise<void> {
  let i = 50;
  let initDate = Date.now();

  const agent = new Agent();

  while (i) {
    agent.move();
    console.log(agent.current.toString());

    await timeout(2000);

    i--;
  }
}

main().catch(console.error);

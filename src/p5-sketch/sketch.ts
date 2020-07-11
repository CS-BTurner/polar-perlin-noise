import p5 from 'p5';
import Agent from '../agent';
import Point from '../agent/point';

const THRESHOLD = 325;

const points = [new Point(0, 0), new Point(200, 200), new Point(200, -200), new Point(-200, 200), new Point(-200, -200)];
const agents = points.map((point) => new Agent(point));

export default function Sketch(p: p5) {
  let canvas: p5.Renderer;

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight /*, p.WEBGL*/);
    canvas.style('z-index', '-1');
  };

  p.draw = () => {
    p.clear();
    p.translate(p.width / 2, p.height / 2, 0);
    p.stroke(255);

    for (const agent of agents) {
      p.strokeWeight(0.5);
      const { x: initX, y: initY } = agent.init;
      p.circle(initX, initY, 200);
      p.point(initX, initY);

      p.strokeWeight(10);
      p.noFill();

      const { x, y } = agent.move().current;
      p.point(x, y);

      p.strokeWeight(1);

      agents
        .filter(({ current }) => current.distanceFrom(agent.current) <= THRESHOLD)
        .forEach(({ current }) => p.line(current.x, current.y, agent.current.x, agent.current.y));
    }
  };
}

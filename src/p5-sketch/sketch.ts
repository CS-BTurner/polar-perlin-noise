import p5 from 'p5';
import Agent from '../agent';
import Point from '../agent/point';

import type { SketchConfig } from '.';

export default function generateSketch(config: SketchConfig = {}) {
  let agents: Agent[];

  const conf = provideDefaults(config);

  return (p: p5) => {
    let canvas: p5.Renderer;

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.setup = () => {
      canvas = p.createCanvas(p.windowWidth, p.windowHeight /*, p.WEBGL*/);
      canvas.style('z-index', '-1');

      agents = new Array(conf.numCircles)
        .fill(null)
        .map(() => {
          let h: number;
          let w: number;
          do {
            w = p.random(p.width);
            h = p.random(p.height);
          } while (w < p.width / 2 && h < p.height / 2);

          return new Point(w - p.width / 2, h - p.height / 2);
        })
        .map((point) => new Agent(point));
    };

    p.draw = () => {
      p.clear();
      p.translate(p.width / 2, p.height / 2, 0);
      p.stroke(255);

      for (const agent of agents) {
        p.strokeWeight(10);
        p.noFill();

        if (conf.showBounds) {
          p.strokeWeight(0.5);
          const { x: initX, y: initY } = agent.init;
          p.circle(initX, initY, 200);
          p.point(initX, initY);
        }

        const { x, y } = agent.move().current;
        p.point(x, y);

        // Join to other points to form the mesh.
        p.strokeWeight(1);
        agents
          .filter(({ current }) => current.distanceFrom(agent.current) <= conf.maxLineLength)
          .forEach(({ current }) => p.line(current.x, current.y, agent.current.x, agent.current.y));
      }
    };
  };
}

function provideDefaults(config: SketchConfig): Required<SketchConfig> {
  return {
    numCircles: config.numCircles || 25,
    maxLineLength: config.maxLineLength || 325,
    showBounds: config.showBounds || false,
  };
}

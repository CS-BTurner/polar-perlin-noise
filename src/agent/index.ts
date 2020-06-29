//

const Noise = require('noisejs').Noise;

import Point from './point';
import { map } from '../util';

const INCREMENT = 0.01;
const NOISE_MAX = 2;

export default class Agent {
  protected noise: typeof Noise;
  public current: Point;
  protected theta: number;

  constructor(seed: number = Math.random()) {
    console.debug('Seeded with', seed);
    this.noise = new Noise(seed);

    this.theta = 0;
    this.current = this.chooseRandomPoint(this.theta);
  }

  public chooseRandomPoint(theta: number): Point {
    const xoff = map(Math.cos(theta), -1, 1, 0, NOISE_MAX);
    const yoff = map(Math.sin(theta), -1, 1, 0, NOISE_MAX);

    const rand = map(this.noise.perlin2(xoff, yoff), 0, 1, 100, 200);

    if (process.env.VERBOSE === 'true') console.log('perlin >>', rand);

    const x = rand * Math.cos(theta);
    const y = rand * Math.sin(theta);

    return new Point(x, y);
  }

  public move() {
    this.theta += INCREMENT;
    this.current = this.chooseRandomPoint(this.theta);
  }
}

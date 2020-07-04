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

  constructor(seed: number = Date.now()) {
    if (process.env.VERBOSE === 'true') console.debug('Seeded with', seed);

    this.noise = new Noise(seed);

    this.theta = map(Math.random(), 0, 1, 0, 2 * Math.PI);
    this.current = this.choosePoint(this.theta);
  }

  public choosePoint(theta: number): Point {
    // Generate an x-offset and y-offset that move in a circle across a 2d perlin map.
    const xoff = map(Math.cos(theta), -1, 1, 0, NOISE_MAX);
    const yoff = map(Math.sin(theta), -1, 1, 0, NOISE_MAX);

    // Use perlin noise to generate a smooth random curve.
    const perlin = this.noise.perlin2(xoff, yoff);
    const rand = map(perlin, 0, 1, 100, 200);

    // Map this perlin noise to polar coordinates.
    const x = rand * Math.cos(theta);
    const y = rand * Math.sin(theta);

    return new Point(x, y);
  }

  public move() {
    this.theta += INCREMENT;
    this.current = this.choosePoint(this.theta);
  }
}

import Point from '../point';

export default class Circle {
  constructor(public center: Point, public r: number) {}

  contains(point: Point) {
    return this.center.distanceFrom(point) < this.r;
  }
}

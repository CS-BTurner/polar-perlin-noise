export default class Point {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number);
  constructor(x: number, y: number);
  constructor(x: number, y: number, z: number);
  constructor(x: number, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public distanceFrom(point: Point): number {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2 + (this.z - point.z) ** 2);
  }

  public toString(): string {
    return `P(${[this.x, this.y, this.z].join(', ')})`;
  }
}

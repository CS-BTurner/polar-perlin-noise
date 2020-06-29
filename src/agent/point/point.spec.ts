import Point from '.';

describe('Point unit tests', () => {
  describe('# distanceFrom', () => {
    const matrix: [Point, Point, number][] = [
      [new Point(0, 0), new Point(6, 8), 10],
      [new Point(-4, -3), new Point(4, 3), 10],
    ];

    test.each(matrix)(
      'should calculate the distance from %s to %s',
      (pointA: Point, pointB: Point, expectedDistance: number) => {
        const result = pointA.distanceFrom(pointB);
        expect(result).toEqual(expectedDistance);
      }
    );
  });
});

import { describe, expect, it } from '@jest/globals';
import { Point } from '..';

describe('Test Point class', () => {
  it('constructor: sets correct x, y, and name values', () => {
    const point1 = new Point(3, 4);
    expect(point1.toString()).toBe('(3,4)');
    const point2 = new Point(3, 4, 'P');
    expect(point2.toString()).toBe('P(3,4)');
  });

  it('clone: should return a clone of the point', () => {
    const point = new Point(1, 2, 'A').clone();
    expect(point.toString()).toBe('A(1,2)');
  });

  it('toString: should return a string representing the point', () => {
    const point = new Point(1, 2);
    expect(point.toString()).toBe('(1,2)');
  });

  it('toString: should return a string representing the point with name', () => {
    const point = new Point(1, 2, 'B');
    expect(point.toString()).toBe('B(1,2)');
  });
});

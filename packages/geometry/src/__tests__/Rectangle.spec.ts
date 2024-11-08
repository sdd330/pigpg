import { describe, expect, it } from '@jest/globals';
import { Point, Rectangle } from '..';

describe('Test Rectangle class', () => {
  it('constructor: sets correct topLeft and bottomRight values', () => {
    const topLeft = new Point(0, 0);
    const bottomRight = new Point(2, 2);
    const rectangle = new Rectangle(topLeft, bottomRight, 'R');
    expect(rectangle.topLeft).toBe(topLeft);
    expect(rectangle.bottomRight).toBe(bottomRight);
    expect(rectangle.name).toBe('R');
  });

  it('width: should return the correct width', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    expect(rectangle.width).toBe(2);
  });

  it('height: should return the correct height', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    expect(rectangle.height).toBe(2);
  });

  it('area: should return the correct area', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    expect(rectangle.area).toBe(4);
  });

  it('perimeter: should return the correct perimeter', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    expect(rectangle.perimeter).toBe(8);
  });

  it('contains: should return true for a point inside the rectangle', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    const point = new Point(1, 1);
    expect(rectangle.contains(point)).toBe(true);
  });

  it('contains: should return false for a point outside the rectangle', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    const point = new Point(3, 3);
    expect(rectangle.contains(point)).toBe(false);
  });

  it('clone: should return a clone of the rectangle', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2));
    const clone = rectangle.clone();
    expect(clone.topLeft).toEqual(rectangle.topLeft);
    expect(clone.bottomRight).toEqual(rectangle.bottomRight);
  });

  it('toString: should return a string representing the rectangle', () => {
    const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2), 'R');
    expect(rectangle.toString()).toBe('R[(0,0),(2,2)]');
  });
});

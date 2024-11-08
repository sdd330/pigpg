import { describe, expect, it } from '@jest/globals';
import { Line, Point } from '..';

describe('Test Line class', () => {
  it('constructor: sets correct start, end, and name values', () => {
    const start = new Point(0, 0);
    const end = new Point(1, 1);
    const line = new Line(start, end, 'L');
    expect(line.start).toBe(start);
    expect(line.end).toBe(end);
    expect(line.name).toBe('L');
  });

  it('slope: should return the correct slope', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    expect(line.slope).toBe(1);
  });

  it('slope: should return undefined for vertical line', () => {
    const line = new Line(new Point(1, 0), new Point(1, 2));
    expect(line.slope).toBeUndefined();
  });

  it('yIntercept: should return the correct y-intercept', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    expect(line.yIntercept).toBe(0);
  });

  it('yIntercept: should return undefined for vertical line', () => {
    const line = new Line(new Point(1, 0), new Point(1, 2));
    expect(line.yIntercept).toBeUndefined();
  });

  it('xIntercept: should return the correct x-intercept', () => {
    const line = new Line(new Point(0, 2), new Point(2, 0));
    expect(line.xIntercept).toBe(2);
  });

  it('xIntercept: should return the correct x-intercept for vertical line', () => {
    const line = new Line(new Point(3, 0), new Point(3, 2));
    expect(line.xIntercept).toBe(3);
  });

  it('xIntercept: should return undefined for horizontal line', () => {
    const line = new Line(new Point(0, 1), new Point(2, 1));
    expect(line.xIntercept).toBeUndefined();
  });

  it('equationFn: should return a function that calculates a point on the line', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    const equation = line.equationFn();
    expect(equation(0.5)).toEqual(new Point(1, 1));
    expect(equation(0)).toEqual(new Point(0, 0));
    expect(equation(-0.5)).toEqual(new Point(0, 0));
    expect(equation(1)).toEqual(new Point(2, 2));
    expect(equation(1.5)).toEqual(new Point(2, 2));
  });

  it('intersection: should return the correct intersection point', () => {
    const line1 = new Line(new Point(0, 0), new Point(2, 2));
    const line2 = new Line(new Point(0, 2), new Point(2, 0));
    const intersection = line1.intersection(line2);
    expect(intersection).toEqual(new Point(1, 1));
  });

  it('intersection: should return undefined for parallel lines', () => {
    const line1 = new Line(new Point(0, 0), new Point(2, 2));
    const line2 = new Line(new Point(0, 1), new Point(2, 3));
    const intersection = line1.intersection(line2);
    expect(intersection).toBeUndefined();
  });

  it('intersection: should return undefined for none line segments', () => {
    const line1 = new Line(new Point(0, 0), new Point(2, 2));
    const line2 = new Line(new Point(10, 10), new Point(20, 30));
    const intersection = line1.intersection(line2);
    expect(intersection).toBeUndefined();
  });

  it('flip: should return a new line with start and end points swapped', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2));
    const flipped = line.flip();
    expect(flipped.start).toEqual(line.end);
    expect(flipped.end).toEqual(line.start);
  });

  it('clone: should return a clone of the line', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2), 'L');
    const clone = line.clone();
    expect(clone.start).toEqual(line.start);
    expect(clone.end).toEqual(line.end);
    expect(clone.name).toBe(line.name);
  });

  it('toEquation: should return the correct equation of the line', () => {
    const line1 = new Line(new Point(0, 0), new Point(2, 2));
    expect(line1.toEquation()).toBe('y = 1x');
    const line2 = new Line(new Point(0, 2), new Point(2, 0));
    expect(line2.toEquation()).toBe('y = -1x + 2');
    const line3 = new Line(new Point(0, -2), new Point(2, 0));
    expect(line3.toEquation()).toBe('y = 1x - 2');
    const line4 = new Line(new Point(2, 2), new Point(2, 0));
    expect(line4.toEquation()).toBe('x = 2');
    const line5 = new Line(new Point(0, 2), new Point(2, 2));
    expect(line5.toEquation()).toBe('y = 2');
  });

  it('toString: should return a string representing the line', () => {
    const line = new Line(new Point(0, 0), new Point(2, 2), 'L');
    expect(line.toString()).toBe('L[(0,0)->(2,2)]');
  });
});

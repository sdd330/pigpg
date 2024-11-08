import { describe, expect, it } from '@jest/globals';
import { Vector } from '..';

describe('Test Vector class', () => {
  it('constructor: initializes with correct values', () => {
    const vector = new Vector(3, 4);
    expect(vector.x).toBe(3);
    expect(vector.y).toBe(4);
  });

  it('magnitude: returns the correct magnitude', () => {
    const vector = new Vector(3, 4);
    expect(vector.magnitude).toBe(5);
  });

  it('add: should return the correct result', () => {
    const vector1 = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    const result = vector1.add(vector2);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  it('multiply: should return the correct result', () => {
    const vector = new Vector(1, 2);
    const result = vector.multiply(3);
    expect(result.x).toBe(3);
    expect(result.y).toBe(6);
  });

  it('rotate: should return the correct result', () => {
    const vector = new Vector(1, 0);
    const result = vector.rotate(Math.PI / 2);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(1);
  });

  it('distance: should return the correct result', () => {
    const vector1 = new Vector(1, 2);
    const vector2 = new Vector(4, 6);
    expect(vector1.distance(vector2)).toBe(5);
  });

  it('parallel: should return true for parallel vectors', () => {
    const vector1 = new Vector(1, 2);
    const vector2 = new Vector(2, 4);
    expect(vector1.parallel(vector2)).toBe(true);
  });

  it('cross: should return the correct result', () => {
    const vector1 = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    expect(vector1.cross(vector2)).toBe(-2);
  });

  it('dot: should return the correct result', () => {
    const vector1 = new Vector(1, 2);
    const vector2 = new Vector(3, 4);
    expect(vector1.dot(vector2)).toBe(11);
  });

  it('angle: should return the correct result', () => {
    const vector1 = new Vector(1, 0);
    const vector2 = new Vector(0, 1);
    expect(vector1.angle(vector2)).toBeCloseTo(Math.PI / 2);
  });

  it('clone: should return a clone of the vector', () => {
    const vector = new Vector(1, 2);
    const clone = vector.clone();
    expect(clone.x).toBe(1);
    expect(clone.y).toBe(2);
  });

  it('toString: should return a string representing the vector', () => {
    const vector = new Vector(1, 2);
    expect(vector.toString()).toBe('⟨1,2⟩');
  });
});

import { describe, expect, it } from '@jest/globals';
import { Matrix } from '..';

describe('Test Matrix class', () => {
  it('constructor: initializes with correct values', () => {
    const mA = new Matrix([
      [5, 1],
      [1, 5],
    ]);
    expect(mA.toString()).toBe('5 1\n1 5');
    const mB = new Matrix(1, 2, 2);
    expect(mB.toString()).toBe('1 1\n1 1');
  });

  it('constructor: initializes with empty values', () => {
    const mA = new Matrix();
    expect(mA.toString()).toBe('0');
    const mB = new Matrix([]);
    expect(mB.toString()).toBe('0');
    const mC = new Matrix([[]]);
    expect(mC.toString()).toBe('0');
  });

  it('get: should return the correct value', () => {
    const mA = new Matrix([
      [5, 1],
      [1, 5],
    ]);
    expect(mA.get(0, 0)).toBe(5);
    expect(mA.get(0, 1)).toBe(1);
    expect(mA.get(1, 0)).toBe(1);
    expect(mA.get(1, 1)).toBe(5);
  });

  it('set: should set the correct value', () => {
    const mA = new Matrix([
      [1, 1],
      [1, 1],
    ]);
    mA.set(0, 0, 5);
    expect(mA.get(0, 0)).toBe(5);
  });

  it('get: should throw an error if row or column index is out of bounds', () => {
    const mA = new Matrix([
      [1, 1],
      [1, 1],
    ]);
    expect(() => mA.get(3, 3)).toThrow();
  });

  it('set: should throw an error if row or column index is out of bounds', () => {
    const mA = new Matrix([
      [1, 1],
      [1, 1],
    ]);
    expect(() => mA.set(3, 3, 5)).toThrow();
  });

  it('add: should return the correct result', () => {
    const mA = new Matrix([
      [1, 1],
      [1, 1],
    ]);
    const mB = new Matrix([
      [2, 2],
      [2, 2],
    ]);
    const result = mA.add(mB);
    expect(result.toString()).toBe('3 3\n3 3');
  });

  it('add: should throw an error if matrices have different dimensions', () => {
    const mA = new Matrix([
      [1, 1],
      [1, 1],
    ]);
    const mB = new Matrix([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
    expect(() => mA.add(mB)).toThrow(
      'Matrices must have the same dimensions to be added',
    );
  });

  it('multiply: should return the correct result', () => {
    const mA = new Matrix([
      [0, -1],
      [1, 0],
    ]);
    const mB = new Matrix([
      [2, 0],
      [0, 1],
    ]);
    const result1 = mA.multiply(mB);
    expect(result1.toString()).toBe('0 -1\n2 0');
    const result2 = mB.multiply(mA);
    expect(result2.toString()).toBe('0 -2\n1 0');
  });

  it('multiply: should throw an error if number of columns of the first matrix does not equal the number of rows of the second matrix', () => {
    const mA = new Matrix(1, 2, 2);
    const mB = new Matrix(2, 3, 3);
    expect(() => mA.multiply(mB)).toThrow(
      'Number of columns of the first matrix must equal the number of rows of the second matrix',
    );
  });

  it('transpose: should return the correct result', () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const result = matrix.transpose();
    expect(result.toString()).toBe('1 3\n2 4');
  });

  it('scale: should return the correct result', () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const result = matrix.scale(2);
    expect(result.toString()).toBe('2 4\n6 8');
  });

  it('clone: should return a clone of the matrix', () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const clone = matrix.clone();
    expect(clone.toString()).toBe('1 2\n3 4');
  });

  it('toString: should return a string representing the matrix', () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    expect(matrix.toString()).toBe('1 2\n3 4');
  });
});

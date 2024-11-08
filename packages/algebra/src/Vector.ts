import Complex from 'complex.js';

/**
 * Represents a 2 dimensional vector.
 */
export class Vector {
  private readonly data: Complex;

  /**
   * Returns the x component of this vector.
   */
  get x(): number {
    return this.data.re;
  }

  /**
   * Returns the y component of this vector.
   */
  get y(): number {
    return this.data.im;
  }

  /**
   * Creates a new vector.
   *
   * @param x - Magnitude in the x-direction.
   * @param y - Magnitude in the y-direction.
   */
  constructor(x: number, y: number) {
    this.data = new Complex(x, y);
  }

  /**
   * Returns the magnitude of this vector.
   *
   * @returns The magnitude of this vector
   */
  get magnitude(): number {
    return this.data.abs();
  }

  /**
   * Adds another vector to this vector.
   *
   * @param other - The other vector to add with
   * @returns A new vector that is the result of the addition
   */
  add(other: Vector): Vector {
    const v = this.data.add(new Complex(other.x, other.y));
    return new Vector(v.re, v.im);
  }

  /**
   * Multiplies this vector by a scalar value.
   *
   * @param scalar - The scalar value to multiply by
   * @returns A new vector that is the result of the multiplication
   */
  multiply(scalar: number): Vector {
    const v = this.data.mul(scalar);
    return new Vector(v.re, v.im);
  }

  /**
   * Rotates this vector by a given angle.
   *
   * @param angle - The angle to rotate by (in radians)
   * @returns A new vector that is the result of the rotation
   */
  rotate(angle: number): Vector {
    const v = this.data.mul({ abs: 1, arg: angle });
    return new Vector(v.re, v.im);
  }

  /**
   * Calculates the distance between this vector and another vector.
   *
   * @param other - The other vector to calculate the distance to
   * @returns The distance between the two vectors
   */
  distance(other: Vector): number {
    return this.data.sub(new Complex(other.x, other.y)).abs();
  }

  /**
   * Returns true if this vector is pointing in the same direction
   * as the other vector.
   *
   * @param other - The other vector
   * @returns True if this vector is pointing in the same direction as the other vector
   */
  parallel(other: Vector): boolean {
    return Math.abs(this.cross(other)) <= 0;
  }

  /**
   * Returns the scalar value of the cross product between this vector and another vector.
   *
   * @param other - The other vector to calculate the cross product with
   * @returns The scalar value of the cross product between this vector and the other vector
   */
  cross(other: Vector): number {
    return this.x * other.y - this.y * other.x;
  }

  /**
   * Returns the scalar value of the dot product between this vector and another vector.
   *
   * @param other - The other vector to calculate the dot product with
   * @returns The scalar value of the dot product between this vector and the other vector
   */
  dot(other: Vector): number {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * Calculates the smallest angle between this vector and another vector.
   * The result is measured in radians and will be between 0 and Math.PI.
   *
   * @param other - The vector to measure the angle between
   * @returns The smallest angle between the two vectors in radians
   */
  angle(other: Vector): number {
    return Math.abs(Math.atan2(this.cross(other), this.dot(other)));
  }

  /**
   * Creates a clone of this vector.
   *
   * @returns A clone of this vector
   */
  clone(): Vector {
    return new Vector(this.x, this.y);
  }

  /**
   * Gives a readable string representing this vector.
   *
   * @returns A string representing this vector
   */
  toString(): string {
    return `⟨${this.x},${this.y}⟩`;
  }
}

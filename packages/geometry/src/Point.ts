import { GObject } from './GObject';

/**
 * Represents a single point with x, y coordinates.
 */
export class Point extends GObject<Point> {
  /**
   * Creates a new point.
   *
   * @param x - The x coordinate of the point
   * @param y - The y coordinate of the point
   * @param name - The name of the point
   */
  constructor(
    public x: number,
    public y: number,
    public name = '',
  ) {
    super(name);
  }

  /**
   * Creates a clone of this point.
   *
   * @returns A clone of this point
   */
  clone(): Point {
    return new Point(this.x, this.y, this.name);
  }

  /**
   * Gives a readable string representing this point.
   *
   * @returns {string} A string representing this point
   */
  toString(): string {
    return `${this.name}(${this.x},${this.y})`;
  }
}

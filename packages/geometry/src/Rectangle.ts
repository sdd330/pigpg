import { GObject } from './GObject';
import type { Point } from './Point';

/**
 * Represents a rectangle defined by its top-left and bottom-right points.
 */
export class Rectangle extends GObject<Rectangle> {
  /**
   * Creates a new rectangle.
   *
   * @param topLeft - The top-left point of the rectangle
   * @param bottomRight - The bottom-right point of the rectangle
   * @param name - The name of the rectangle
   */
  constructor(
    public topLeft: Point,
    public bottomRight: Point,
    public name = '',
  ) {
    super(name);
  }

  /**
   * Gets the width of the rectangle.
   *
   * @returns The width of the rectangle
   */
  get width(): number {
    return this.bottomRight.x - this.topLeft.x;
  }

  /**
   * Gets the height of the rectangle.
   *
   * @returns The height of the rectangle
   */
  get height(): number {
    return this.bottomRight.y - this.topLeft.y;
  }

  /**
   * Calculates the area of the rectangle.
   *
   * @returns The area of the rectangle
   */
  get area(): number {
    return this.width * this.height;
  }

  /**
   * Calculates the perimeter of the rectangle.
   *
   * @returns The perimeter of the rectangle
   */
  get perimeter(): number {
    return 2 * (this.width + this.height);
  }

  /**
   * Checks if a point is inside the rectangle.
   *
   * @param point - The point to check
   * @returns True if the point is inside the rectangle, false otherwise
   */
  contains(point: Point): boolean {
    return (
      point.x >= this.topLeft.x &&
      point.x <= this.bottomRight.x &&
      point.y >= this.topLeft.y &&
      point.y <= this.bottomRight.y
    );
  }

  /**
   * Creates a clone of this rectangle.
   *
   * @returns A clone of this rectangle
   */
  clone(): Rectangle {
    return new Rectangle(this.topLeft.clone(), this.bottomRight.clone());
  }

  /**
   * Returns a string representation of the rectangle.
   *
   * @returns A string representing the rectangle
   */
  toString(): string {
    return `${this.name}[${this.topLeft.toString()},${this.bottomRight.toString()}]`;
  }
}

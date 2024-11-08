import { GObject } from './GObject';
import { Point } from './Point';

/**
 * Represents a line segment defined by two points.
 */
export class Line extends GObject<Line> {
  /**
   * Creates a new line segment.
   *
   * @param start - The starting point of the line
   * @param end - The ending point of the line
   * @param name - The name of the line
   */
  constructor(
    public start: Point,
    public end: Point,
    name = '',
  ) {
    super(name);
  }

  /**
   * Gets the slope of the line.
   *
   * @returns The slope of the line, or undefined if the line is vertical
   */
  get slope(): number | undefined {
    const [x1, y1] = [this.start.x, this.start.y];
    const [x2, y2] = [this.end.x, this.end.y];
    if (x1 === x2) return undefined; // Avoid division by zero for vertical lines
    return (y2 - y1) / (x2 - x1);
  }

  /**
   * Gets the y-intercept of the line.
   *
   * @returns The y-intercept of the line, or undefined if the line is vertical
   */
  get yIntercept(): number | undefined {
    const k = this.slope;
    if (k === undefined) return undefined; // Vertical line has no y-intercept
    const [x1, y1] = [this.start.x, this.start.y];
    return y1 - k * x1;
  }

  /**
   * Gets the x-intercept of the line.
   *
   * @returns The x-intercept of the line, or undefined if the line is horizontal
   */
  get xIntercept(): number | undefined {
    const k = this.slope;
    const b = this.yIntercept;
    if (k === undefined || b === undefined) return this.start.x; // Vertical line has x-intercept at x
    if (k === 0) return undefined; // Horizontal line has no x-intercept
    return -b / k;
  }

  /**
   * Returns a function that calculates a point on the line given a parameter t.
   *
   * @returns A function that takes a parameter t and returns a point on the line
   */
  equationFn(): (t: number) => Point {
    const [x1, y1] = [this.start.x, this.start.y];
    const [x2, y2] = [this.end.x, this.end.y];
    return (t: number): Point => {
      let k = t;
      if (t < 0) k = 0;
      if (t > 1) k = 1;
      const x = x1 + k * (x2 - x1);
      const y = y1 + k * (y2 - y1);
      return new Point(x, y);
    };
  }

  /**
   * Finds the intersection point of this line with another line.
   *
   * @param other - The other line to find the intersection with
   * @returns The intersection point, or undefined if the lines do not intersect
   */
  intersection(other: Line): Point | undefined {
    const [x1, y1] = [this.start.x, this.start.y];
    const [x2, y2] = [this.end.x, this.end.y];
    const [x3, y3] = [other.start.x, other.start.y];
    const [x4, y4] = [other.end.x, other.end.y];
    // Cramer's Rule
    const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d === 0) return undefined; // Parallel lines
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d;
    const s = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / d;
    if (t >= 0 && t <= 1 && s >= 0 && s <= 1) {
      return this.equationFn()(t);
    }
    return undefined;
  }

  /**
   * Creates a copy of the line with start and end points swapped.
   *
   * @returns A new line with start and end points swapped
   */
  flip(): Line {
    return new Line(this.end.clone(), this.start.clone());
  }

  /**
   * Creates a clone of this line.
   *
   * @returns A clone of this line
   */
  clone(): Line {
    return new Line(this.start.clone(), this.end.clone(), this.name);
  }

  /**
   * Returns the equation of the line in the form of a string.
   *
   * @returns The equation of the line as a string
   */
  toEquation(): string {
    const k = this.slope;
    const b = this.yIntercept;
    if (k === undefined || b === undefined) return `x = ${this.start.x}`; // Vertical line
    if (k === 0) return `y = ${this.start.y}`; // Horizontal line
    if (b === 0) return `y = ${k}x`;

    return b > 0 ? `y = ${k}x + ${b}` : `y = ${k}x - ${-b}`;
  }

  /**
   * Returns a string representation of the line.
   *
   * @returns A string representing the line
   */
  toString() {
    return `${this.name}[${this.start.toString()}->${this.end.toString()}]`;
  }
}

export abstract class GObject<T> {
  protected constructor(public name = '') {}
  /**
   * Creates a clone of this point.
   *
   * @returns A clone of this point
   */
  abstract clone(): T;
  /**
   * Returns a string representation of this object.
   *
   * @returns A string representation of this object
   */
  abstract toString(): string;
}

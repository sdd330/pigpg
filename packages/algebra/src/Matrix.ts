/**
 * Represents a matrix.
 */
export class Matrix {
  private readonly data: number[][];

  /**
   * Creates a new matrix.
   *
   * @param initial - The initial value of the matrix.
   * If a number, the matrix is initialized with this value.
   * If an array, the matrix is initialized with the values in the array
   * @param rows - The number of rows in the matrix
   * @param cols - The number of columns in the matrix

   */
  constructor(
    initial: number | number[][] = 0,
    public rows = 1,
    public cols = 1,
  ) {
    if (typeof initial === 'number') {
      this.data = Array.from({ length: rows }, () => Array(cols).fill(initial));
      return;
    }

    if (Array.isArray(initial)) {
      this.rows = initial.length;
      if (this.rows > 0 && Array.isArray(initial[0]) && initial[0].length > 0) {
        this.cols = initial[0].length;
        this.data = initial;
        return;
      }
    }

    this.data = Array.from({ length: rows }, () => Array(cols).fill(0)); // default to [[0]]
    return;
  }

  /**
   * Gets the value at the specified row and column.
   *
   * @param row - The row index
   * @param col - The column index
   * @returns The value at the specified row and column
   */
  get(row: number, col: number): number {
    return this.data[row][col];
  }

  /**
   * Sets the value at the specified row and column.
   *
   * @param row - The row index
   * @param col - The column index
   * @param value - The value to set
   */
  set(row: number, col: number, value: number): void {
    this.data[row][col] = value;
  }

  /**
   * Adds another matrix to this matrix.
   *
   * @param other - The matrix to add
   * @returns A new matrix that is the result of the addition
   */
  add(other: Matrix): Matrix {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error('Matrices must have the same dimensions to be added');
    }
    const result = new Matrix(0, this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.set(i, j, this.get(i, j) + other.get(i, j));
      }
    }
    return result;
  }

  /**
   * Multiplies this matrix by another matrix.
   *
   * @param other - The matrix to multiply by
   * @returns A new matrix that is the result of the multiplication
   */
  multiply(other: Matrix): Matrix {
    if (this.cols !== other.rows) {
      throw new Error(
        'Number of columns of the first matrix must equal the number of rows of the second matrix',
      );
    }
    const result = new Matrix(0, this.rows, other.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < other.cols; j++) {
        let sum = 0;
        for (let k = 0; k < this.cols; k++) {
          sum += this.get(i, k) * other.get(k, j);
        }
        result.set(i, j, sum);
      }
    }
    return result;
  }

  /**
   * Transposes the matrix.
   *
   * @returns A new matrix that is the transpose of this matrix
   */
  transpose(): Matrix {
    const result = new Matrix(0, this.cols, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.set(j, i, this.get(i, j));
      }
    }
    return result;
  }

  /**
   * Scales the matrix by a given scalar value.
   *
   * @param scalar - The scalar value to multiply each element by
   * @returns A new matrix that is the result of the scaling
   */
  scale(scalar: number): Matrix {
    const result = new Matrix(0, this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.set(i, j, this.get(i, j) * scalar);
      }
    }
    return result;
  }

  /**
   * Clones the matrix.
   *
   * @returns A new matrix that is a clone of this matrix
   */
  clone(): Matrix {
    const result = new Matrix(0, this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.set(i, j, this.get(i, j));
      }
    }
    return result;
  }

  /**
   * Returns a string representation of the matrix.
   *
   * @returns A string representing the matrix
   */
  toString(): string {
    return this.data.map((row) => row.join(' ')).join('\n');
  }
}

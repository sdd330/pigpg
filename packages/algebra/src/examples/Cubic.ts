import Complex from 'complex.js';

export class Cubic {
  findRoots(a: number, b: number, c: number, d: number): Complex[] {
    // Make a depressed cubic of the form x^3 + px + q = 0
    const p = (3 * a * c - b * b) / (3 * a * a);
    const q =
      (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);

    // Calculate cube roots of complex numbers
    const D = Complex(q / 2 ** 2 + p / 3 ** 3);
    const sqrtD = D.sqrt();
    const u = Complex(-q / 2)
      .add(sqrtD)
      .pow(1 / 3);
    const v = Complex(-q / 2)
      .sub(sqrtD)
      .pow(1 / 3);

    // Calculate the roots in t
    const omega = Complex(-0.5, Math.sqrt(3) / 2); // Principal cube root of unity
    const t1 = u.add(v);
    const t2 = v.mul(omega.conjugate()).add(u.mul(omega));
    const t3 = u.mul(omega.conjugate()).add(v.mul(omega));

    // Transform back to the original variable x
    const shift = -b / (3 * a);
    return [t1.add(shift), t2.add(shift), t3.add(shift)];
  }
}

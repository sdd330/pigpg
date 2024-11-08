import { Line, Point } from '@pigpg/geometry';
import { Application, Graphics } from 'pixi.js';
import type { RefObject } from 'react';

const UNIT = 200;
const O_X = 200;
const O_Y = 200;
const W = UNIT;
const H = 2 * UNIT;
const COLOR = 0xffffff;

export class AppUtil {
  private app!: Application;
  private graphics!: Graphics;
  private x = 0;
  private s = 0.1;
  private g?: Point;

  calculate() {
    this.x += this.s;
    // Calculate the intersection point of the two lines
    const a = new Point(O_X, O_Y);
    const c = new Point(O_X + W, O_Y + H);
    const L1 = new Line(a, c);
    const e = new Point(O_X, O_Y + this.x);
    const f = new Point(O_X + W + 2 * this.x, O_Y + H);
    const L2 = new Line(e, f);
    this.g = L1.intersection(L2);
    console.log(L1.toString(), L2.toString(), this.g);
    if (this.x >= H || this.x <= 0) {
      this.s = -this.s;
    }
  }

  render() {
    this.graphics.clear();
    this.graphics.rect(O_X, O_Y, W, H).stroke({ width: 1, color: COLOR });
    this.graphics
      .moveTo(O_X, O_Y)
      .lineTo(O_X + W, O_Y + H)
      .stroke({ width: 1, color: COLOR });
    this.graphics
      .moveTo(O_X + W, O_Y + H)
      .lineTo(O_X + W + 2 * this.x, O_Y + H)
      .stroke({ width: 1, color: COLOR });
    this.graphics
      .moveTo(O_X + W, O_Y)
      .lineTo(O_X, O_Y + this.x)
      .lineTo(O_X + W + 2 * this.x, O_Y + H)
      .lineTo(O_X + W, O_Y)
      .stroke({ width: 1, color: COLOR });

    if (this.g) {
      this.graphics
        .moveTo(O_X, O_Y + H)
        .lineTo(this.g.x, this.g.y)
        .stroke({ width: 1, color: COLOR });
    }
  }

  async init(div: RefObject<HTMLDivElement>) {
    this.app = new Application();
    await this.app.init({ antialias: true, resizeTo: window });
    this.graphics = new Graphics();
    this.app.ticker.add(() => {
      this.calculate();
      this.render();
    });
    this.app.stage.addChild(this.graphics);
    div?.current?.appendChild(this.app.canvas);
  }
}

const Circle = require("../lib/Circle")

describe('Circle', () => {
  it('Should produce Circle SVG File', () => {
    const Cir = new Circle("SVG", "Black", "Black", "Circle");

    expect(Cir.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="110" r="80" fill="Black" />

        <text x="150" y="130" font-size="60" text-anchor="middle" fill="Black">SVG</text>

        </svg>`);
  });
});

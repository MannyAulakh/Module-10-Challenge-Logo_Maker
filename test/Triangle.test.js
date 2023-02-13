const Triangle = require("../lib/Triangle")


describe('Triangle', () => {
  it('Should produce Triangle SVG File', () => {
    const Tri = new Triangle("SVG", "Black", "Black", "Triangle");

    expect(Tri.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points= "150, 8 284, 182 6, 182" fill="Black" />

        <text x="147.5" y="135" font-size="60" text-anchor="middle" fill="Black">SVG</text>

        </svg>`);
  });
});

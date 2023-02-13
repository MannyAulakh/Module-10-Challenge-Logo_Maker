const Shape = require('./shapes');

class Square extends Shape {
    constructor(text, textColour, shapeColour, shapetype) {
        super(text, textColour, shapeColour);
        this.shapetype = shapetype
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="35" width="150" height="150" fill="${this.shapeColour}" />

        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>

        </svg>`
    }
}

module.exports = Square
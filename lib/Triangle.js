const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(text, textColour, shapeColour, shapetype) {
        super(text, textColour, shapeColour);
        this.shapetype = shapetype
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points= "150, 8 284, 182 6, 182" fill="${this.shapeColour}" />

        <text x="147.5" y="135" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>

        </svg>`
    }
}

module.exports = Triangle
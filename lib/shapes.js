class Shape {
    constructor(text, textColour, shapeColour) {
      if (!text) throw new Error('Text cannot be empty');
  
      if (text.length > 3) {
        throw new Error('Text cannot be greater than 3 characters');
      }
  
      this.text = text;
      this.textColour = textColour;
      this.shapeColour = shapeColour;
    }
  
    render() {
      throw new Error('Shape does not have a render() method');
    }
  }
  
  module.exports = Shape;

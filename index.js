const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./lib/Circle")
const Square = require("./lib/Square")
const Triangle = require("./lib/Triangle")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Text',
      message: 'Please enter text (Max Length is 3 characters)',
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Please enter text colour keyword or a hexadecimal number for the logo's text colour`,
    },
    {
      type: 'list',
      name: 'shapeType',
      message: `Please select logo shape`,
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's background (shape) colour`,
    },
  ])
  .then((data) => {

    if (data.shapeType == "Circle") {
        var output = new Circle(data.Text, data.textColour, data.shapeColour, data.shapeType)
    }
    if (data.shapeType == "Square") {
        var output = new Square(data.Text, data.textColour, data.shapeColour, data.shapeType)
    }
    if (data.shapeType == "Triangle") {
        var output = new Triangle(data.Text, data.textColour, data.shapeColour, data.shapeType)
    }
  
    fs.writeFile("Logo.svg", output.render(), (err) => err ? console.log(err) : console.log('Generated logo.svg'));

  })
  .catch((err) => console.error(err));
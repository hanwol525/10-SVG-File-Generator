const Shapes = require('./lib/shapes.js');
const logoText = require('./lib/text.js');
// const svgFile = require('./svg.js')
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const questions = [
    {
        type: 'input',
        message: 'Enter logo text: ',
        name: 'logotext'
    },
    {
        type: 'input',
        message: 'Text color (color name or hex code): ',
        name: 'textcolor'
    },
    {
        type: 'list',
        message: 'Select a shape: ',
        choices: ["Circle", "Square", "Triangle"],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Shape color (color name or hex code): ',
        name: 'shapecolor'
    }
]

inquirer
    .prompt(
        questions
    )

    .then((data) => {
        const getShape = Shapes(data);
        const getText = logoText(data);
        console.log(getShape, getText);
    })
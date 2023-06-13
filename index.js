const svgFile = require('./lib/svg.js');
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
        message: 'Text color (color name or hex code; if a hex code, please precede with "#"): ',
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
        message: 'Shape color (color name or hex code; if a hex code, please precede with "#"): ',
        name: 'shapecolor'
    }
]

inquirer
    .prompt(
        questions
    )

    .then((data) => {
        const getSVG = svgFile(data)
        if (data.logotext.length > 3){
            console.error("Logo text must be no more than 3 characters")
            return;
        } else {
            fs.writeFile('logo.svg', getSVG, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
            ); 
        }
    })
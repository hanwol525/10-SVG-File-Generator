const { data } = require('jquery');
const Shape = require('./shapes');
const Text = require('./text');

// Generates SVG file
function generateSVG(data){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${Shape(data)}
  
    ${Text(data)}
  
  </svg>`
}

module.exports = generateSVG
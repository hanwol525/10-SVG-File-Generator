// Generates code for shapes based on user input
function generateShape(data){
    if (data.shape === 'Circle'){
        return `<circle cx="150" cy="100" r="90" fill="${data.shapecolor.toLowerCase().replace(/ /g, "")}"/>`;
    } else if (data.shape === 'Square'){
        return `<rect x="100" y="50" width="100" height="100" fill="${data.shapecolor.toLowerCase().replace(/ /g, "")}"/>`;
    } else if (data.shape === 'Triangle'){
        return `<polygon points="150 15, 250 200, 50 200" fill="${data.shapecolor.toLowerCase().replace(/ /g, "")}"/>`;
    };
};

module.exports = generateShape
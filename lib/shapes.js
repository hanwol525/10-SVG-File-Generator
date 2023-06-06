// Generates code for shapes based on user input
function generateShape(data){
    if (data.shape === 'Circle'){
        return `<circle cx="25" cy="75" r="20" fill="${data.shapecolor}"/>`;
    } else if (data.shape === 'Square'){
        return `<rect x="10" y="10" width="30" height="30" fill="${data.shapecolor}"/>`;
    } else if (data.shape === 'Triangle'){
        return `<polygon points="50 15, 100 100, 0 100" fill="${data.shapecolor}"/>`;
    };
};

module.exports = generateShape
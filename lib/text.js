// Generates text/color based on user input
function generateText(data){
    return `<text x="150" y="110" font-size="30" text-anchor="middle" fill="${data.textcolor.toLowerCase().replace(/ /g, "")}">${data.logotext.toUpperCase()}</text>`
};

module.exports = generateText
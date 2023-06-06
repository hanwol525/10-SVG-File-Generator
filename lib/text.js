function generateText(data){
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.logotext}</text>`
};

module.exports = generateText
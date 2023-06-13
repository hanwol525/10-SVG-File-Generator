const { data } = require('jquery');
const generateShape = require('../shapes');

describe('Circle', () => {
    describe('shapeCircle', () => {
        it('should return the code for a circle', async() => {
            const circleResult = '<circle cx="150" cy="100" r="90" fill="red"/>';
            const circleInfo = {
                shape: "Circle",
                shapecolor: "red"
            };
            const newCircle = await generateShape(circleInfo);
            expect(newCircle).toEqual(circleResult);
        });
    });
});

describe('Triangle', () => {
    describe('shapeTriangle', () => {
        it('should return the code for a triangle', async() => {
            const triangleResult = '<polygon points="150 15, 250 200, 50 200" fill="red"/>'
            const triangleInfo = {
                shape: "Triangle",
                shapecolor: "red"
            };
            const newTriangle = await generateShape(triangleInfo);
            expect(newTriangle).toEqual(triangleResult);
        });
    });
});

describe('Square', () => {
    describe('shapeSquare', () => {
        it('should return the code for a square', async() => {
            const squareResult = '<rect x="100" y="50" width="100" height="100" fill="red"/>';
            const squareInfo = {
                shape: "Square",
                shapecolor: "red"
            };
            const newSquare = await generateShape(squareInfo);
            expect(newSquare).toEqual(squareResult);
        });
    });
});
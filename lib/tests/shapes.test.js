const { data } = require('jquery');
const Shapes = require('../shapes');

// need to figure out how to run tests on something that takes user input

describe('Shapes', () => {
    describe('generateShape', () => {
        it('should return the code for shape based on user input', () => {
            const circleResult = 'hi';
            const newShape = new Shapes();
            expect(newShape.generateShape()).toReturn(circleResult);
        });
    });
});
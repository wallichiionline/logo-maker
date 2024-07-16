const createSVG = require('./createSVG');

const data = {
    text: 'cat',
    textColor: 'red',
    shape: 'square',
    shapeColor: 'blue'
}

test('create and svg', () => {
    expect(createSVG(data).toBe(null));
})
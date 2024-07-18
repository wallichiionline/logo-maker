const inquirer = require("inquirer");
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters',
        validate(value) {
            if(value.length > 3) {
                return 'Please enter only 3 characters';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number)'
    }
];

function createSVG(data) {
    let svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    let shape;
    switch(data.shape) {
        case 'circle':
            shape = new Circle(data.shapeColor);
            break;
        case 'square':
            shape = new Square(data.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(data.shapeColor);
            break;
    }
    svg += shape.render();

    svg += '<text fill="' + data.textColor + '" font-size="120" x="150" y="128.26171875" text-anchor="middle"><tspan dy="0" x="150">' + data.text + '</tspan></text>';

    svg += '</svg>';

    /*draw.text(data.text)
        .fill(data.textColor)
        .font({size: 120})
        .move(150, 0)
        .attr({'text-anchor': 'middle'});*/

    fs.writeFileSync('logo.svg', svg);
    console.log("Generated logo.svg");

}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            createSVG(answers);
        })
        .catch((error) => {
            console.log(error);
        });
}

init();
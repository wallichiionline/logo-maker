import { createSVGWindow } from 'svgdom';
import inquirer from 'inquirer';
import fs from 'fs';
import { SVG, registerWindow } from '@svgdotjs/svg.js';
import { Circle, Square, Triangle } from './lib/shapes.js';

const window = createSVGWindow();
const document = window.document;
registerWindow (window, document);

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
        validate(value){
            if(value.length > 3){
                return 'Please enter ONLY 3 characters';
            }
            else{
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
    const draw = SVG(document.documentElement).size(300, 200);

    let shape;
    switch(data.shape) {
        case 'circle':
            shape = new Circle(data.shape, data.shapeColor);
            break;
        case 'square':
            shape = new Square(data.shape, data.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(data.shape, data.shapeColor);
            break;
    }
    shape.render(draw);

    draw.text(data.text)
        .fill(data.textColor)
        .font({size: 120})
        .move(150, 0)
        .attr({'text-anchor': 'middle'});

    fs.writeFileSync('logo.svg', draw.svg());
    console.log("Generated logo.svg");

}

function init(){
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
const inquirer = require('inquirer');
const fs = require('fs');
//const { createSVGWindow } = require('svgdom');
const { svg, registerWindow } = require('@svgdotjs/svg.js');
const shapes = require('./lib/shapes')
const Circle = new shapes.Cirlce;
const Square = new shapes.Square;
const Triangle = new shapes.Triangle;

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

function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        console.log(error);
    });
}

init();
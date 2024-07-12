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
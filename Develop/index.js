// TODO: Include packages needed for this application
const fs = require('fs'); //File System module
const inquirer = require('inquirer');//Inquirer module (command line interface)
const generateMarkdown = require('./utils/generateMarkdown');//Generate Markdown function

/*List of questions: 
#Title
##Description
    -list What is your motivation?
    -list Why did you build this project?
    -list What does it solve?
    -list What did you learn?
##Table of Contents
    -Installation
    -Usage
    -Credits
    -License
    -Badges
    -Features
    -How to contribute
    -Tests
##Installation (How do you install your project?)
##Usage (How to use + screenshot/video)
##Credits (List of collaborators with Github links, third party assets, etc)
##License
##Badges(Optional)
##Features
##How to Contribute (Guidelines on how other developers can contribute)
##Tests(Optional)
*/

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init()

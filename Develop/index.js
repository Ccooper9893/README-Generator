// TODO: Include packages needed for this application
const fs = require('fs'); //File System module
const inquirer = require('inquirer');//Inquirer module (command line interface)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: function (answer) {
            if (answer.length) {
                console.log('Please provide a project title!')
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
        validate: function (answer) {
            if (answer.length) {
                console.log('Please provide a description!')
            } else {
                return true
            };
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', '', (error) => {
        error ? console.log(error) : console.log('You have successfully generated a README!');
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

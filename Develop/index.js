// TODO: Include packages needed for this application
const fs = require('fs'); //File System module
const inquirer = require('inquirer');//Inquirer module (command line interface)
const generateMarkdown = require('./utils/generateMarkdown');//Generate Markdown function

// TODO: Create an array of questions for user input
const questions =  [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? - ',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.warn('\x1b[31m', '\nPlease enter the name of your project!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. - ',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.warn('\x1b[31m', '\nPlease provide a description of your project!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? - ',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.warn('Please provide the required information!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for using your application. - ',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.warn('\x1b[31m', '\nPlease provide instructions on how to use your project!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'If available, please provide any screenshots showing how to use your application. - ',
        default: ''
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines to your project. - ',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide examples for testing your application. - ',
        default: 'N/A'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license. - ',
        choices: ['MIT', 'Apache_License_2.0', 'GPL_3.0', 'Mozilla_Public_License_2.0', 'none'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username.',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.warn('\x1b[31m', '\nPlease provide your Github username!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: userInput => {
            if (userInput) {
                return true
            } else {
                console.warn('\x1b[31m', '\nPlease provide an email address!')
                return false
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Your readme has been successfully generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(`${data.title}.md`, data);
    })
    .catch((err) => {
        console.log(err)
    })
}
// Function call to initialize app
init()

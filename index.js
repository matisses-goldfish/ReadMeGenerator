const inquirer = require('inquirer');
const fs = require('fs');
// const renderLicenseBadge = require('./license')

var questions = [
    {
        type: 'input',
        message:'Welcome to the readme generator! To get started please enter your name!',
        name: 'nameinput',
    },
    {
        type: 'input',
        message:'Please enter your Github Username!',
        name: 'github',
    },
    {
        type: 'input',
        message:'Please enter a the link for your Github Repository!',
        name: 'githubRepo',
    },
    {
        type: 'input',
        message:'Please enter a Deployed URL for your project!',
        name: 'link',
    },
    {
      type: 'input',
      message: "What will the project name be?",
      name: 'projectName',
    },
    {
      type: 'input',
      message: "Please enter a short description of your application!",
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter the installation instructions!',
      name: 'installInst',
    },
    {
        type: 'input',
        message: 'Please enter any usage information!',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines!',
        name: 'guidelines',
      },
      {
        type: 'input',
        message: 'Please enter test instructions!',
        name: 'testInst',
      },
      {
        type: 'checkbox',
        message: 'Which License would you like to use?',
        choices:['MIT','Apache-2.0','GPL-3.0'],
        name: 'license',
      },
      {
        type: 'input',
        message:'Please enter your email address!',
        name: 'email',
    },

  ];
inquirer
  .prompt(questions)
  .then((response) =>{
  console.log(response);
    response.confirm === response.password
      ? console.log('Your reponses have been Sucessfully Loged!')
      : console.log('Please try again :(')


    fs.writeFile('README.md', generateMarkdown(response), (err) =>
  err ? console.log(err) : console.log('Your README file is now ready!') );

  });

   var generateMarkdown = (data) => {
    return `
# ${data.projectName} 
[![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-brightgreen)](https://opensource.org/licenses/${data.license})
#### **Name:** ${data.nameinput}
#### **Deployed Link:** ${data.link}
#### **Github Repo:** ${data.githubRepo}
---
    
##  Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage)
* [Testing Instructions](#testing)
* [Authors](#authors)
* [License](#license)
* [Question](#questions)


## Description:
---
${data.description}

## Installation:
---
    ${data.installInst}

## Usage
---
     ${data.usage}
    
## Contribution Guidelines
---
${data.guidelines}
    
## Testing
---
${data.testInst}
    
## Authors
---
* **${data.nameinput}** - *Initial work* - [${data.projectName}](${data.githubRepo})
    
## License
---
${data.license}
This project is licensed under the ${data.license} License - see the [LICENSE.md](LICENSE.md) file for details
<br></br>

## Question
---
Any additional question? 
### Contact me at:
* Gmail: ${data.email}
* Github: ${data.github}
`
   }

  //  module.exports = generateMarkdown;

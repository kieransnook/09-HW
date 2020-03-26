const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

  

  inquirer
.prompt([
    {
      type: "input",
      message: "What is your GitHub name?",
      name: "gitname"
    },
    {
        type:"input",
        message:"What is your project called?",
        name:"projectName"
    },
    {
        type: "input",
        message:"Write a short description of your project (why)",
        name: "description"
    },
    { 
        type: "list",
        message: "Which license are you going to attatch to your project?",
        name: "license",
        choices:
         ["MIT",
         "APACHE 2.0",
         "GPL 3.0",
         "BSD 3",
         "None"]

    },
    {type: "input",
    message:"What command should run to install",
    name: "install",
    default: "npm install"

    },
    {
        type: "input",
        message: "What do people need to know about using this repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributions?",
        name: "contributions",
        default: "None"
    },
]).then(ans => {
    const queryUrl = `https://api.github.com/users/${ans.gitname}`;

    axios.get(queryUrl).then(response => {
        
        
const data = response.data;
        console.log(data.avatar_url);
        console.log(data.email);
        console.log(data.usage)
    
const readme = `
    
    
    
    
      
    
    
# ${ans.projectName}


${ans.description}




## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)




  ## Installation
  
To install run the following:

  
  ${ans.install}
  


  ## Usage

  ${ans.usage}

  ## License

  ${ans.license}




  `;
  writeReadMe(readme);
    });

});
  
  
    

        
        
        


const writeReadMe =str=> {
    fs.writeFile("README.md", str, err => {
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    })
}

  
       

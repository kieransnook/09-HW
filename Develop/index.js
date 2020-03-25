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
    {
        type: "input",
        message: "Contributions?",
        name: "contributions",
        default: "None"
    },
  ]).then(function(response) {console.log(response);

  });
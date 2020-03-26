
function generateMarkdown(data) {
   return `
# ${data.projectName}


${data.description}




## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)




  ## Installation
  
To install run the following:

  \`\`\`
  ${data.install}
  \`\`\`


  ## Usage

  ${data.usage}

  ## License

  ${data.license}




  `
}


module.exports = generateMarkdown;

const prompt = require('prompt-sync')();
const chalk = require('chalk')
const fs = require('fs')
const input = prompt("What is the best club? ");
input.toLowerCase;
if(input != "scope"){
    const redMsg = chalk.red("WRONG ANSWER")
    //console.log("you're wrong")
    console.log(chalk.red("you're wrong"))
}
else{
    const purpMsg = chalk.magenta("I LOVE YOU <3")
    console.log(chalk.magenta("I LOVE YOU <3"))
    fs.writeFileSync('scope.txt', 'did you roll down a hill???')
}



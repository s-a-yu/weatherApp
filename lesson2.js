/*const square = (x) => {
    return x * x
}

console.log(square(9))*/

//const sqr = (x) => x*x
const { argv } = require('yargs')
const yargs = require('yargs')
const fs = require('fs')
/*const chalk = require('chalk')
console.log("Your notes")

const blueMsg = chalk.blue('Success')
console.log(blueMsg)*/

//console.log(process.argv)

yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption:'True',
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: 'True',
            type:'string'
        }
    },
    handler: (argv)=>{
        console.log('Title ', argv.title)
        console.log('body ', argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    handler: ()=>{
        console.log('removing a new note')
    }
})

yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: ()=>{
        console.log('listing notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: ()=>{
        console.log('reading a note')
    }
})
yargs.parse()

const book = {
    title: "Somehow I mangage",
    author: "Michael Scott"
}

const bookJson = JSON.stringify(book)
//console.log(bookJson)
const parsedData = JSON.parse(bookJson)
console.log(bookJson)

fs.writeFileSync('1-json.json', bookJson)



//console.log(yargs.argv)

/*const command = process.argv[q2]

if(command == 'add'){
    console.log("Adding note")
}
else if(command == 'remove'){
    console.log("Removing node")
}*/

/*const square = function(x){
    return x * x
}*/

//onsole.log(square(9))
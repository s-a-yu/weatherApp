
/*fs.writeFileSync('notes.txt', 'SCOPE ROCKS!')
fs.appendFileSync('notes.txt', 'update')

const fileTwo = require('./fileTwo.js')
const val = fileTwo(4,2)
console.log(val)

const checkpoint2 = require ('./checkpoint#2.js')
const scope = checkpoint2()
console.log(scope)

const validator = require('validator')
console.log(validator.isURL('https://scopeusc.com'))
console.log(validator.isURL('hi'))

const chalk = require('chalk')
const greenMsg = chalk.green('Success!')
console.log(chalk.green('Success!'))*/

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'Note body',
           demandOption: true,
           type: 'string'
       }
   },
   handler: function (argv) {
        notes.addNote(argv.title, argv.body)
       console.log('Title: ' + argv.title)
       console.log('Body: ' + argv.body)
   }
})
// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function (argv) {
        notes.removeNote(argv.title)
      console.log('Removing the note')
  }
})
// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
      console.log('Listing out all notes')
  }
})
// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
      console.log('Reading a note')
  }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Reading...')
    }
})
console.log(yargs.argv)

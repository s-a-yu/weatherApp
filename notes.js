const fs = require('fs')
const getNotes = function(){
    return 'Notes...'
}

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title == title 
    })
   
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Success!')
    }
    else{
        console.log('Note titleis not available :(')
    }
}

const removeNote = function (title){
    const notes = loadNotes()
    const results = notes.filter(function(note){
        return note.title !== title
    })
    if (notes.length > results.length){
        console.log(chalk.green.inverse('NoteRemoved!'))
        saveNotes(notes)
    }
    else{
        console.log(chalk.red.inverse('No note with that title!'))
    }   

}

const greenMsg = chalk.green('Success!')
console.log(chalk.green('Success!'))

const loadNotes = function(){
    try{
        const data = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
   
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = function(){
    const notes = loadNotes()
    console.log(chalk.inverse('Saved Notes'))
    notes.forEach((note)=> {
        console.log(note.title)
    })
}

const readNote = function(title){
    const notes = loadNotes()
    const result = notes.find((note) => note.title === title)
    if(!result){
        console.log(chalk.inverse(result.title))
        console.log(result.body)
    }
    else{
        console.log(console.log(chalk.red.inverse('Note not found! :(')))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote: readNote
} 
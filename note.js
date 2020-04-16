const fs = require('fs')
const chalk = require('chalk');
const getNotes = function(){
    return 'Your Notes...'
}

const addNote = function(title, body)
{
    const notes = loadNotes()
    const duplicatenotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicatenotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note Added'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken ! '))
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
    const notestokeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length !== notestokeep.length)
    {
        saveNotes(notestokeep)
        console.log(chalk.green.inverse('Note Removed'))
    }else{
        console.log(chalk.red.inverse('No Note Found'))
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}

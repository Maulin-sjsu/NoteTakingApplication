const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (title, body) =>
{
    const notes = loadNotes()
    //const duplicatenotes = notes.filter( (note) => note.title === title)

    const dupnote = notes.find( (note) => note.title === title)


    if(dupnote)
    {
        console.log(chalk.red.inverse('Note title taken ! '))
        
    }
    else{
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note Added'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes()
    const notestokeep = notes.filter((note) => note.title !== title)
    if(notes.length !== notestokeep.length)
    {
        saveNotes(notestokeep)
        console.log(chalk.green.inverse('Note Removed'))
    }else{
        console.log(chalk.red.inverse('No Note Found'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('YourNotes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const reqnote = notes.find((note) => note.title === title)
    if(reqnote)
    {
        console.log(chalk.inverse(reqnote.title))
        console.log(reqnote.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
    
    //console.log(dupnote.body)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}

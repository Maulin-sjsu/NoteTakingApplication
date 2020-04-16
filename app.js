const yargs = require('yargs')
const chalk = require('chalk');
const validator = require('validator')
const noteutilities = require('./note.js')

//const command = process.argv[2]

// Customize yargs version
yargs.version('1.1.0')
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the Note : ',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body: ',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => noteutilities.addNote(argv.title,argv.body)

})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the Note : ',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => noteutilities.removeNotes(argv.title)
    
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        noteutilities.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of the Note : ',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: (argv) => noteutilities.readNote(argv.title)

})

yargs.parse()

// if(command === 'add'){
//     console.log(chalk.green.bold('Adding Notes!'))
// }else if(command === 'remove'){
//     console.log(chalk.red.bold('Removing Notes!'))
// }
// const msg = getNotes()
// console.log(chalk.red.bold(msg))
// console.log(process.argv[2])
//console.log(validator.isEmail('a@example.com'))
//console.log(validator.isURL('https://maulin.com'))

//fs.writeFileSync('Note.txt', 'My name is Maulin')
//fs.appendFileSync('Note.txt', '\nMaulin is learning Node')
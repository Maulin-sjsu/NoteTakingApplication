const fs = require('fs')

// const person = {
//     name: 'Darshil',
//     State: 'California',
//     age: 27
// }

// const personJSON = JSON.stringify(person)
// console.log(personJSON)

// fs.writeFileSync('person.json', personJSON)

// const ParsedData = JSON.parse(personJSON)
// console.log(ParsedData.name)

const dataBuffer = fs.readFileSync('person.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'maulin'
data.age = 25

//console.log(data)
const dataJSONUpdated = JSON.stringify(data)
fs.writeFileSync('person.JSON', dataJSONUpdated)

// const square = function(x){
//     return x*x
// }

// const cube = (x) => {
//     return x*x*x
// }

// const sum = (x,y) => x+y 

// console.log(square(3))
// console.log(cube(3))
// console.log(sum(2,5))
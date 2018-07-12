const fs = require('fs');

var originalNote = {
    title: 'subtitle',
    note: 'body'
};

//convert to json string
var originalNoteString = JSON.stringify(originalNote)
// write to json
fs.writeFileSync('notes.json', originalNoteString)

//read in json
var noteString = fs.readFileSync('notes.json')

var note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)
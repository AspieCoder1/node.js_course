const fs = require('fs');
const _ = require('lodash');
// yargs module allows parsing of commandline arguements
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
}

const bodyOptions = {
	describe:'Enter note content around double quotes ("")',
	demand:true,
	alias: 'b'
}

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('add', 'Add a new note to libary')
	.command('read', 'Read a note',{
		title: titleOptions
	})
	.command('remove', 'Remove a note from your libary', {
		title:{
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.help()
	.argv;
var command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body)
	if (note) {
		console.log('Note Created');
		console.log('');
		notes.logNote(note);
	} else{
		console.log('A note with that title appears to already exist')
	}

} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`)
	console.log('');
	allNotes.forEach((note) => {
		notes.logNote(note)
	});
} else if (command === 'read') {
	var note = notes.getNote(argv.title)
	if (note) {
		notes.logNote(note)
	} else{
		console.log('ERROR 404: Note Not Found')
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message) 
} else {
	console.log('Command not recognised')
}

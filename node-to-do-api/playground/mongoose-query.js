const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = '5a5b3943f4e2022e6028c263';

// if(!ObjectID.isValid()) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({_id: '5a5b3943f4e2022e6028c263'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found')
//     }
//     console.log(todo)
// }).catch((e) => console.log(e));
id = '5a59e98b8ffee44e787cfb56';

User.findById(id).then((todo) => {
    if(!todo) {
        return console.log('ID not found');
    }
    console.log(JSON.stringify(todo, undefined, 2));
}).catch((e) => console.log(e));
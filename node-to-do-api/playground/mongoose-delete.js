const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

id = '5a59e98b8ffee44e787cfb56';

User.findById(id).then((todo) => {
    if(!todo) {
        return console.log('ID not found');
    }
    console.log(JSON.stringify(todo, undefined, 2));
}).catch((e) => console.log(e));

User.findByIdAndRemove(id).then((res) => {
    console.log(res)
});
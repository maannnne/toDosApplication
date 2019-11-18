import { Mongo } from 'meteor/mongo'
import './main.html'
import './templates/toDosTemp'
import './templates/addToDoTemp'
import './templates/toDoItemTemp'
import './toDos'
import './toDoItem'

ToDos = new Mongo.Collection('todos');
// ToDos.insert({
//   name: "To Do 2", 
//   completed: false, 
//   createdAt: new Date()
// });


import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './main.html';
import './templates/toDosTemp';
import './templates/toDoItemTemp.html';
import './main.js';

Template.toDoItemTemp.events({
    'click .deleteToDo': function(event) {
        event.preventDefault();
        var currentToDo = this._id;
        var confirm = window.confirm("Do you really wanna delete this item?")
        if(confirm) {
            ToDos.remove({_id: currentToDo});   
        }
    },

    'keyup [name=toDoItem]': function(event) {
        event.preventDefault();
        var updated = event.target.value;
        var currentToDoId = this._id;
        if(event.which == 13){
            ToDos.update({_id: currentToDoId}, {$set: {name: updated}});
            event.target.blur();
        }
    }
});
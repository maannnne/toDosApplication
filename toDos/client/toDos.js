import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './main.html';
import './templates/toDosTemp';
import './templates/toDoItemTemp.html';
import './main.js';



Template.toDosTemp.helpers({
    'getToDos': function() {
        return ToDos.find({}, {sort: {createdAt: -1}});
    }

});

Template.toDosTemp.events({
    'submit form': function(event) {
        event.preventDefault();
        var newToDo = event.target.newToDo.value;
    
        ToDos.insert({
            name: newToDo,
            completed: false,
            createdAt: new Date(),
        });
        event.target.newToDo.value = null;
    }

});

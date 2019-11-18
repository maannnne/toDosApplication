import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


Meteor.startup(() => {

});

export const ToDos = new Mongo.Collection('todos');
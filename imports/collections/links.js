import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'links.insert' : function (){

  }

});

export const Links = new Mongo.Collection('links');

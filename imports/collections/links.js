import { Mongo } from 'meteor/mongo';
import validURL from 'valid-url';
import { check, Match} from 'meteor/meteor';

Meteor.methods({
  'links.insert' : function (url){
      validURL.isUri(url);
  }

});

export const Links = new Mongo.Collection('links');

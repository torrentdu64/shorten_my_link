import { Mongo } from 'meteor/mongo';
import validURL from 'valid-url';
import { check, Match} from 'meteor/check';

Meteor.methods({
  'links.insert': function (url){

      check(url, Match.Where(url => validURL.isUri(url)));
      const token = Math.random().toString(36).slice(-5);
      Links.insert({ url, token, click: 0});
  }

});

export const Links = new Mongo.Collection('links');

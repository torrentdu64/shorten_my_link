import React,{Component} from 'react';
import { createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/links';



class LinkList extends Component {

  render(){
    return (
      <div>list</div>
      );
  }
};


export default createContainer(() => {
  Meteor.subscrib('links');
  return { links: Links.find({}).fetch() };
},LinkList);

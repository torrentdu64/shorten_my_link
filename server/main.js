import { Meteor } from 'meteor/meteor';
import {Links} from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
      return Links.find({});
  });
});

function onRoute(req, res, next){

  const link = Links.findOne({ token: req.params.token });

}

    const middleware  = ConnectRoute(function(router){
          router.get('/:token', onRoute)
    });


  WebApp.connectHandlers
    .user(middleware  );

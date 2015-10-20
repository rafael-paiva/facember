import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function() {
    this.route('friend', {
      path: '/friend/:friend_id'
    });
  });
});

export default Router;

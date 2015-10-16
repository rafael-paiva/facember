import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
        me: this.resourceManager.getCurrentUser(),
        friends: this.resourceManager.getCurrentUserFriends()
    }).catch(() => {
      this.transitionTo('login');
    });
  }
});

export default ApplicationRoute;

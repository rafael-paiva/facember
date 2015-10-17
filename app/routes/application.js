import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
        me: this.resourceManager.getCurrentUser(),
        friends: this.resourceManager.getCurrentUserFriends(),
        friendsRequest: this.resourceManager.getFriendsRequest()
    }).catch(() => {
      this.transitionTo('login');
    });
  },

  actions: {
    goToHomePage: function () {
      this.transitionTo('application')
        .then(() => this.refresh());
    }
  }
});

export default ApplicationRoute;

import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
        me: this.store.findRecord('user', 'me'),
        friends: this.store.findAll('friendship'),
        friendsRequest: this.store.findAll('request')
    }).catch((reason) => {
      console.log('Error loading application route: ', reason);
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

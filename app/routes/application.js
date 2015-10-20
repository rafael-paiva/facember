import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
        me: this.store.findRecord('user', 'me'),
        friendsRequest: this.store.findAll('request')
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

import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
  model: function () {
    return this.resourceManager
      .getCurrentUser()
      .catch(() => {
        this.transitionTo('login');
      });
  }
});

export default ApplicationRoute;

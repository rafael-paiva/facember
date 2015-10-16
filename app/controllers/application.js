import Ember from 'ember';

export default Ember.Controller.extend({
  myFriends: [],

  actions: {
    login: function () {
      console.log('to aqui logando no application controller');
    }
  }
});

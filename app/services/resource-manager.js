import Ember from 'ember';

/**
 * @class
 * @property {ApiManagerRest} apiManager REST based API manager.
 */
var ResourceManager = Ember.Service.extend({
  login: function (username, password) {
    let data = {
      username: username,
      password: password
    };

    return this.apiManager.login(data);
  },

  getCurrentUser: function () {
    console.log('to aqui no getCurrentuser');
    return this.apiManager.getCurrentUser();
  }
});

export default ResourceManager;

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
});

export default ResourceManager;

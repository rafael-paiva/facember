import Ember from 'ember';

/**
 * @class
 * @property {ApiManagerRest} apiManager REST based API manager.
 */
var ResourceManager = Ember.Service.extend({
  login: function (username, password) {
    console.log('to aqui no login do ResourceManager');
    return this.apiManager.login(username, password);
  },
});

export default ResourceManager;

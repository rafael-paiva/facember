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
  },

  getCurrentUserFriends: function () {
    return this.apiManager.getCurrentUserFriends();
  },

  getFriendsRequest: function () {
    return this.apiManager.getFriendsRequest();
  },

  acceptFriendRequest: function (requesterId) {
    return this.apiManager.acceptFriendRequest(requesterId);
  }
});

export default ResourceManager;

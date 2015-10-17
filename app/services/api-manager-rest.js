import Ember from 'ember';

var ApiManagerRest = Ember.Service.extend({
  successHandler: function (resolve, data) {
    resolve(data);
  },

  errorHandler: function (reject, jqXHR, textStatus, errorThrown) {
    reject({
      jqXHR: jqXHR,
      status: jqXHR.status,
      textStatus: textStatus,
      errorThrown: errorThrown
    });
  },

  getCurrentUser: function () {
    var apiManager = this;
    return new Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/users/me',
        method: 'GET',
        success: apiManager.successHandler.bind(null, resolve),
        error: apiManager.errorHandler.bind(null, reject)
      });
    });
  },

  getCurrentUserFriends: function () {
    var apiManager = this;
    return new Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/friendships/me',
        method: 'GET',
        success: apiManager.successHandler.bind(null, resolve),
        error: apiManager.errorHandler.bind(null, reject)
      });
    });
  },

  getFriendsRequest: function () {
    var apiManager = this;
    return new Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/friendships/requests',
        method: 'GET',
        success: apiManager.successHandler.bind(null, resolve),
        error: apiManager.errorHandler.bind(null, reject)
      });
    });
  },

  acceptFriendRequest: function (requesterId) {
    var apiManager = this;
    return new Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/friendships/' + requesterId,
        method: 'PUT',
        success: apiManager.successHandler.bind(null, resolve),
        error: apiManager.errorHandler.bind(null, reject)
      });
    });
  }
});

export default ApiManagerRest;

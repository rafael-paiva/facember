import Ember from 'ember';

var ApiManagerRest = Ember.Service.extend({
  login: function (data) {
    return new Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: data,
        crossDomain: true,
        success: successHandler.bind(null, resolve),
        error: errorHandler.bind(null, reject)
      });
    });

    function successHandler (resolve, token) {
      resolve(token);
    }

    function errorHandler (reject, jqXHR, textStatus, errorThrown) {
      reject({
        jqXHR: jqXHR,
        status: jqXHR.status,
        textStatus: textStatus,
        errorThrown: errorThrown
      });
    }
  },

  getCurrentUser: function () {
    console.log('CARALHO!!!!');
    return new Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'http://localhost:3000/users/me',
        method: 'GET',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        success: successHandler.bind(null, resolve),
        error: errorHandler.bind(null, reject)
      });
    });

    function successHandler (resolve, user) {
      resolve(user);
    }

    function errorHandler (reject, jqXHR, textStatus, errorThrown) {
      reject({
        jqXHR: jqXHR,
        status: jqXHR.status,
        textStatus: textStatus,
        errorThrown: errorThrown
      });
    }
  }
});

export default ApiManagerRest;

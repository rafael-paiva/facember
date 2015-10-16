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

    function successHandler (resolve, data) {
      resolve({token: data});
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
});

export default ApiManagerRest;

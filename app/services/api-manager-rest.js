import Ember from 'ember';

var ApiManagerRest = Ember.Service.extend({
  login: function (username, password) {
    var data = {
      username: username,
      password: password
    };

    // return this._POST('user/login', data);
    // return Ember.$.ajax({
    //   method: 'POST',
    //   url: 'http://localhost:3000/login',
    //   // headers: options.headers || {},
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:4200'
    //   },
    //   data: data,
    //   dataType: 'json',
    //   crossDomain: true,
    //   contentType: 'application/json; charset=UTF-8',
    //   // success: successHandler.bind(null, resolve, request),
    //   // error: errorHandler.bind(null, reject, request)
    // });

    return Ember.$.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: data,
      crossDomain: true
    })
    .then(function (response) {
      console.log('oi amigos', response);
    });
  },
});

export default ApiManagerRest;

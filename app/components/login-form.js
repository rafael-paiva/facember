import Ember from 'ember';

export default Ember.Component.extend({
  username: '',
  password: '',

  actions: {
    login: function () {
      let cmpnt = this;
      let username = cmpnt.get('username');
      let password = cmpnt.get('password');

      return cmpnt.resourceManager
        .login(username, password)
        .then(function (response) {
          console.log('Logged in. Token: ', response.token);
          cmpnt.set('session.isAuthenticated', true);
        })
        .catch(function (response) {
          console.log('Log in failed. Reason: ', response.errorThrown);
          cmpnt.set('session.isAuthenticated', false);
        });
    }
  }
});

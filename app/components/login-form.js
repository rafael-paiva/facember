import Ember from 'ember';

export default Ember.Component.extend({
  username: '',
  password: '',

  actions: {
    login: function () {
      console.log('to aqui logando - username: ', this.get('username'), ' - password: ', this.get('password'));

      return this.resourceManager.login(this.get('username'), this.get('password'));

      // this.sendAction('login', this.get('username'), this.get('password'));
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  acceptFriendRequestAction: 'acceptFriendRequest',

  actions: {
    acceptFriendRequest: function (requesterId) {
      this.sendAction('acceptFriendRequestAction', requesterId);
    }
  }
});

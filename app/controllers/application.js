import Ember from 'ember';

export default Ember.Controller.extend({
  // acceptFriendFulfilled: function (response) {
  //   let requests = this.get('model.friendsRequest');
  //   let friends = this.get('model.friends');
  //   let updatedRequests;
  //   let addedFriend;

  //   updatedRequests = requests.filter(function (request) {
  //     return request.userRequester._id !== response._id.userRequester;
  //   });

  //   addedFriend = requests.findBy('userRequester._id', response._id.userRequester);

  //   friends.addObject({user: addedFriend.userRequester});

  //   this.set('model.friendsRequest', updatedRequests);
  // },

  actions: {
    acceptFriendRequest: function(requesterId) {
      if (requesterId) {
        console.log('HANDLE ACCEPT FRIEND REQUESET!!!!!!!');
        // this.resourceManager
        //   .acceptFriendRequest(requesterId)
        //   .then(this.acceptFriendFulfilled.bind(this));
      }
    }
  }
});

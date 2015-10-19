import DS from 'ember-data';

export default DS.Model.extend({
  userRequested: DS.belongsTo('user'),
  userRequester: DS.belongsTo('user')
});

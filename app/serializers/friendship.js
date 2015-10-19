import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: '_id',
  attrs: {
    user: { embedded: 'always' }
  }
  // extractSingle(store, primaryModelClass, payload, id, requestType) {
  //   console.log('o caralho viu vei');

  //   debugger;

  //   payload.forEach(function (item) {
  //     item.user = item.user._id;
  //   });

  //   return this._super(...arguments);
  // }
});

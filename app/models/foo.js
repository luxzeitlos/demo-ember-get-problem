import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  bar: DS.belongsTo('bar'),
});

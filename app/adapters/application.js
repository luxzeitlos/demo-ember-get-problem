import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  findRecord() {
    return {
      data: {
        id: 'F1',
        type: 'foo',
        relationships: {
          bar: { data: { type: 'bar', id: 'B1' } }
        }
      },
      included: [{
        id: 'B1',
        type: 'bar',
        attributes: { value: 'hello value' }
      }]
    }
  }
});

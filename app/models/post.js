import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  /*
  userId: belongsTo('user'),

  title: attr('string'),
  body: attr('string')
  */
  lang: attr(),
  containedItemClass: attr(),
  description: attr('string'),
  label: attr('string'),
  status: attr('string'),
  dateSubmitted: attr('date', {
    defaultValue() { return new Date().toLocaleDateString("en-US"); }
  })

});

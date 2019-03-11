import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  // defined by https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json
  list: DS.belongsTo('list'),
  label: attr('string'),
  lang: attr('string'),
  itemclass: attr('string'),
  //id: attr('string'),
  status: attr('string'),
  description: attr('string'),
  owner: attr('string'),
  versionNumber: attr(),
  versions: attr(),
  lastUpdated: attr('date', {
    defaultValue() { return new Date().toLocaleDateString("en-US"); }}),
  dateSubmitted: attr('date', {
    defaultValue() { return new Date().toLocaleDateString("en-US"); }}),
  dateAccepted: attr('date', {
    defaultValue() { return new Date().toLocaleDateString("en-US"); }}),
  codevalue: attr('string'),
  narrower: attr(),
  AlertDate: attr('date', {
    defaultValue() { return new Date().toLocaleDateString("en-US"); }}),
  EffectiveDate: attr('date', {
    defaultValue() { return new Date().toLocaleDateString("en-US"); }})
});

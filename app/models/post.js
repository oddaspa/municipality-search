import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  // defined by https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json

  label: attr('string'),
  lang: attr('string'),
  itemclass: attr('string'),
  status: attr('string'),
  description: attr('string'),
  owner: attr('string'),
  versionNumber: attr(),
  versions: attr(),
  lastUpdated: attr('date'),
  dateSubmitted: attr('date'),
  dateAccepted: attr('date'),
  codevalue: attr('string'),
  narrower: attr(),
  ValidTo: attr('date'),
  ValidFrom: attr('date'),
  AlertDate: attr('date'),
  EffectiveDate: attr('date')
});

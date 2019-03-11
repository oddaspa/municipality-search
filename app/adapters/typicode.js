import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://register.geonorge.no',
  namespace: 'api/subregister/sosi-kodelister/kartverket/'
  }
);

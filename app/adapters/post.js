import Typicode from './typicode'

export default Typicode.extend({

  // Real Deal
  /*
  host: 'https://register.geonorge.no',
  namespace: 'api/subregister/sosi-kodelister/kartverket/'
  // https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json
  */
  pathForType() {
    //return 'posts';
    return 'kommunenummer-alle.json';
  }

});

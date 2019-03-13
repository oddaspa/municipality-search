import Typicode from './typicode'

export default Typicode.extend({
  host: 'https://register.geonorge.no',
  namespace: 'api/subregister/sosi-kodelister/kartverket/',
  
  pathForType() {
    //return 'posts';
    return 'kommunenummer-alle.json';
  }

});

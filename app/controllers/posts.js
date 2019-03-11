import Controller from '@ember/controller';
import { typeOf } from '@ember/utils';
export default Controller.extend({
  // DOES GET UPDATED
  queryParams: ['description'],
  // NB Ember does not work with JQuery

  actions: {
    filterByName(param) {
      if (param !== '') {
        // TEST ONE
        return this.store.query('post',{ description: param})
        .then(results => {
          // Checking each element after the query
          let myResults = results;
          results.forEach(function(element) {
            if(element.description.toLowerCase() === param.toLowerCase()){
              console.log("Query returns " + element.get("description") );
              console.log("element type:");
              console.log(typeOf(element));
              console.log("Results type:");
              console.log(typeOf(results));
              let myId = element.id
              myResults = element;
              // Print to console
              console.log(element.description);
              console.log(element.label);
              // tries to return only the element if it is perfect match
              return {query: param, results: myResults};
              // NB use .includes() if I fix
            }
          }
        )
        console.log(myResults);
        return {query: param, results: results};
        });

      } else {
        console.log("no search");
        return this.store
          .findAll('post').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }

});

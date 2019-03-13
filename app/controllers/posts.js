import Controller from '@ember/controller';
export default Controller.extend({
  // DOES GET UPDATED
  queryParams: ['description'],
  description: "Lillehammer",

  actions: {
    filterByName(param) {
      if (param !== '') {
        // TEST ONE
        return this.store.query('post', { description: param} )
        .then(results => {
          // Checking each element after the query
          let myResults = results.toArray();
          var returnList = new Array();
          results.toArray().forEach((element) => {
            if(element.description.toLowerCase().includes(param.toLowerCase())){
              returnList.push(element);
              myResults = returnList;
            }

          }
        )
        return {query: param, results: myResults};
        });

      } else {
        return this.store
          .findAll('post')
          .then((results) => {
            return { query: param, results: results };
          })
          ;
      }
    }
  }

});

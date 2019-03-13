import Controller from '@ember/controller';
export default Controller.extend({
  queryParams: ['description'],
  description: "",

  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store.query('post', { description: param} )
        .then(results => {
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
          .findAll('post').then((results) => {
            return { query: param, results: results };
          });
      }
    },
  filterByValid(){
    let param = "Gyldig";
      return this.store.query('post', { status: param} )
      .then(results => {
        let myResults = results.toArray();
        var returnList = new Array();
        results.toArray().forEach((element) => {
          if(element.status.toLowerCase() === param.toLowerCase()){
            returnList.push(element);
            myResults = returnList;
          }
        }
      )
      return {query: param, results: myResults};
      });
    }
  }

});

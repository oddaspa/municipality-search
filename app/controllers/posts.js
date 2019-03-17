import Controller from '@ember/controller';
export default Controller.extend({
  queryParams: ['description'],
  description: "",

  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store.query('post', { description: param} )
        .then(results => {
          var returnList = new Array();
          results.toArray().forEach((element) => {
            if(element.description.toLowerCase().includes(param.toLowerCase())){
              returnList.push(element);
            }
          }
        )
        return {query: param, results: returnList};
        });

      } else {
        return this.store
          .findAll('post').then((results) => {
            return { query: param, results: results };
          });
      }
    },

    filterByValid(checked){
      if(checked){
        return this.store.findAll('post' )
        .then(results => {
          var returnList = new Array();
          results.toArray().forEach((element) => {
            if(element.status.toLowerCase() === "gyldig"){
              returnList.push(element);
            }
          })
        return {query: "param", results: returnList};
        });
      } else {
        return this.store.findAll('post');
      }
    },

    filterByNameAndButton(param, checked) {
      return this.store.findAll('post' ).then(results => {
        if(checked){
          results = results.toArray().filter(element => element.status.toLowerCase() === "gyldig");
          if (param !== ''){
            results = results.filter(element => element.description.toLowerCase().includes(param.toLowerCase()));
          }

        } else {
          if (param !== ''){
            results = results.toArray().filter(element => element.description.toLowerCase().includes(param.toLowerCase()));
          }
        }
        return {query:param, results: results};
      })
    }
}
});

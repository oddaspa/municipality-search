import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        let kukk = this.store
        .query('post', {description: param }).then((results) => {
          //console.log(filteredResults);
          return {query: param, results: results.results};
        });
        //console.log(results);
        console.log(kukk);

        return kukk;
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

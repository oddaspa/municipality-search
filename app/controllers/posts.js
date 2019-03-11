import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['description'],

  actions: {
    filterByName(param) {
      if (param !== '') {
        let tmp = this.store
        .query('post', {description: param }).then((results) => {
          return {query: param, results: results};
        });
        //Debug in browser
        console.log("Controller query:");
        console.log(tmp);

        return tmp;
      } else {
        console.log("no search");
        let tmp2 = this.store
          .findAll('post').then((results) => {
            return { query: param, results: results };
          });
          return tmp2;

      }
    }
  }
});

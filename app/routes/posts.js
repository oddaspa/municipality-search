import Route from '@ember/routing/route';


export default Route.extend({
  controllerName: 'posts',
  model(queryParams){

  console.log("ROUTE");
  console.log(this.store.query('post', { description: queryParams }));


/* TESTING
  return this.store.query('post', {}).then((results) => {
        return {
          posts: results,
          meta: results.get('meta')
        };
      });
*/
  // ORIGINAL
  // Returns entire store.
  return this.store.findAll('post');
    /*.then(posts => {
      posts.forEach(function(element) {
          var elements = [];
          console.log("QueryParams");
          console.log(queryParams);
          elements.push(element);
          return elements;
      })
    })
    */

    // Returns localhost?
    //return this.store.query('post', { description: queryParams });
  },
  setupController(controller, model) {
    this._super(controller, 'posts', model);

  },

});


  /*
  model(params) {
    return this.store.findAll('post')
    .then(function(post) {
      console.log("ROUTE");
      console.log(post);
    });
  }
});
*/

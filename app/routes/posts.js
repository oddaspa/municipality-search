import Route from '@ember/routing/route';


export default Route.extend({
  model(queryParams){
  var store = this.store;

  let query1 = "Naustdal";
  console.log("ROUTE");
  console.log(this.store.query('post', { description: queryParams }));

    return this.store.findAll('post');
    // Returns localhost?
    //return this.store.query('post', { description: queryParams });
  }
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

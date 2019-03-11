import Route from '@ember/routing/route';


export default Route.extend({
  model(){
  var store = this.store;
  let origin = store.findAll('post');
  console.log("ROUTE");
  console.log(origin);

    return origin;
  }
});


  /*
  model(params) {
    return this.store.findAll('post')
    .then(function(post) {
      console.log("ROUTE :DDDDDDDD");
      console.log(post);
    });
  }
});
*/

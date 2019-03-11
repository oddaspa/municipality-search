import Route from '@ember/routing/route';


export default Route.extend({
  model(){
  var store = this.store;
  let fuck = store.findAll('post', { description: "Lindås" });
  console.log("ROUTE");
  console.log(fuck);

    return fuck;
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

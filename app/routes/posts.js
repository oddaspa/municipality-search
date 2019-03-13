import Route from '@ember/routing/route';


export default Route.extend({
  controllerName: 'posts',
  queryParams: {
    description: {
      refreshModel: true
    }
  },
  
  model(queryParams){
    return this.store.query('post', queryParams);
  }

});

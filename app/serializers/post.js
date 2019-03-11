import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Should query on serializer
    payload = { posts : payload.containeditems };
    //payload.posts.forEach((post) => {
      //post.id = post.description;
      //delete post.description;
    //})

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

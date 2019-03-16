import Component from '@ember/component';

export default Component.extend({
  classNames: ['radio-button'],
  value: '',
  cbState: false,
  init() {
    this._super(...arguments);
    this.filter('').then((allResults) =>
    { this.set('results', allResults);
  });
},

  // This is my filter
  actions: {
    handleFilterEntry(){
      this.toggleProperty('cbState');
      let filterAction = this.filter;
      filterAction(this.cbState).then((filterResults) => {
          this.set('results', filterResults.results);
      });
    }
  }
});

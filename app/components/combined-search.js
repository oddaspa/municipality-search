import Component from '@ember/component';


export default Component.extend({
  classNames: ['combined-search'],
  value: '',
  cbState: false,
  init() {
    this._super(...arguments);
    this.filter('').then((allResults) =>
    { this.set('results', allResults.results);
  });
},

  actions: {
    changeState(){
      this.toggleProperty('cbState');
    },

    handleFilterEntry(){
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue, this.cbState).then((filterResults) => {
        if (filterResults.query === this.value) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});

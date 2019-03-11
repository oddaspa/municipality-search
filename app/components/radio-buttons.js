
/*
import Component from '@ember/component';

export default Component.extend({
  actions: {
    valueToggeled(choice) {
      this.controller.set('groupValue', choice);
    }
  }
});
*/
import Component from '@ember/component';
export default Component.extend({
  value: 'one',
  actions: {
    colorChanged(value) {
      window.alert(`Value changed to ${value}`);
    }
  }
});

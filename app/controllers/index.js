import Controller from 'ember-controller';

export default Controller.extend({
  count: 0,

  actions: {
    increment() {
      this.incrementProperty('count');
    }
  }
});

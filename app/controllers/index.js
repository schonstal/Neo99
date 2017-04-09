import Controller from 'ember-controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  count: 0,
  generators: 0,

  generate: task(function * () {
    while (this.get('generators') > 1) {
      this.incrementProperty('count', this.get('generators') * 0.1);
      yield timeout(100);
    }
  }).drop(),

  actions: {
    increment() {
      this.incrementProperty('count');
    },

    purchase() {
      this.decrementProperty('count', this.get('generators') * 1.1);
      this.incrementProperty('generators', 1);
      this.get('generate').perform();
    }
  }
});

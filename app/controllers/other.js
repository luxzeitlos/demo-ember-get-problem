import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async transitionToIndex() {
      this.transitionToRoute('index');
    }
  }
});

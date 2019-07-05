import Component from '@ember/component';

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));


export default Component.extend({
  actions: {
    async go() {
      console.log(this.get('foo.bar.value'));
      this.transitionToIndex();
      await timeout(1);
      console.log(this.get('foo.bar.value'));
    }
  }
});

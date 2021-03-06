import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        text: this.get('text'),
        category: this.get('category'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});

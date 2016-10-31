import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        text: this.get('text'),
        category: this.get('category'),
        image: this.get('image'),
        price: this.get('price'),
      };
      console.log(post);
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});

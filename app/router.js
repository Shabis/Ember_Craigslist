import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('jobs');
  this.route('housing');
  this.route('sale');
  this.route('post', {path: '/post/:post_id'});
});

export default Router;

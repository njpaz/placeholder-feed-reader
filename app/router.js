import EmberRouter from '@ember/routing/router';
import config from 'feed-reader/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('feeds', { path: '/' }, function () {
    this.route('feed', { path: '/feed/:id' });
  });
});

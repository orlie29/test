import EmberRouter from '@ember/routing/router';
import config from 'ohora/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('project', { path: '/projects/:project_id' });
  this.route('requests');
});

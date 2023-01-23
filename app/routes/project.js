import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('project', params.project_id);
  }
}

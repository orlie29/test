import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service('actions') isLarge;
  @service('actions') isLoaded;


  async model() {

    return this.store.findAll('project');

  }

    

  
}

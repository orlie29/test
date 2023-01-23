import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ActionsService extends Service {

    @tracked isLarge = false;
    @tracked isLoaded = false;
}

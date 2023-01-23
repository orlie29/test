import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ProjectComponent from '../project';

export default class ProjectDetailedComponent extends ProjectComponent {
   
    @tracked isMaximized = false;

    @action 
    maximizePic() {
      this.isMaximized = !this.isMaximized;
      this.isLarge = false;
      console.log(this.isMaximized);
      console.log(this.isLarge);

    }

}

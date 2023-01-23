import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CardListComponent extends Component {
  @service('card-data') cards;
}

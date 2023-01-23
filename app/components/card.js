import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardComponent extends Component {

    @service('card-data') cards;


}

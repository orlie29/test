import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardNameDescriptionComponent extends Component {

    @service('card-data') cards;

    @action
    onKeyDown({ target, key }) {
        
      let text = target.value.trim();
      let hasValue = Boolean(text);
  
      if (key === 'Enter' && hasValue) {
        this.cards.forEach(item=>item.description.add(text))
      }
    }

}

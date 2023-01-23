import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Card {
        
    @tracked text = '';
    @tracked description = '';

    constructor(text) {
        this.text = text;
    }


}

export default class CardDataService extends Service {

    @tracked cards = [];

    get all() {
      return this.cards;
    }
    
    @action
    add(text) {
      let newCard = new Card(text);
      this.cards = [...this.cards, newCard];
      console.log(this.cards);
    }




}

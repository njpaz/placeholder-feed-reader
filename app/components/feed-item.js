import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FeedItemComponent extends Component {
  @tracked shouldShowItem = false;

  constructor() {
    super(...arguments);

    this.elementId = 'feed-item-' + guidFor(this);
  }

  @action
  toggleItemVisibility() {
    this.shouldShowItem = !this.shouldShowItem;
  }
}

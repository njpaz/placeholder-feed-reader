import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class FeedItemComponent extends Component {
  constructor() {
    super(...arguments);

    this.elementId = 'feed-item-' + guidFor(this);
  }

  get shouldShowItem() {
    return this.args.index === this.args.selectedIndex;
  }
}

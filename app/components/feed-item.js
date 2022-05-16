import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FeedItemComponent extends Component {
  @tracked shouldShowItem = false;

  @action
  toggleItemVisibility() {
    this.shouldShowItem = !this.shouldShowItem;
  }
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FeedViewComponent extends Component {
  @tracked selectedIndex = null;

  @action
  selectVisibleIndex(index) {
    this.selectedIndex = index;
  }
}

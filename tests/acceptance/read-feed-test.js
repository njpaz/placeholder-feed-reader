import { module, test } from 'qunit';
import { visit, click, find, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | read feed', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.feeds = this.server.createList('feed', 3, 'staticTitle');
  });

  test('it lists all feeds in the sidebar', async function (assert) {
    await visit('/');

    let allFeeds = findAll('[data-id="feed-title"]').map(({ textContent }) =>
      textContent.trim()
    );
    assert.deepEqual(allFeeds, ['Feed 1', 'Feed 2', 'Feed 3']);
  });

  test('it displays the feed information and feed items when clicking on the feed title', async function (assert) {
    assert.expect(3);

    let [firstFeed] = this.feeds;

    await visit('/');
    await click('[data-id="feed-0"]');

    let feedHeading = find('[data-id="feed-heading"]');
    let { textContent: title, href } = feedHeading;

    assert.strictEqual(
      title.trim(),
      'Feed 1',
      'it shows the feed title at the top'
    );
    assert.strictEqual(
      href,
      `${firstFeed.url}/`,
      'the feed title contains a link to the original site'
    );

    let { models: items } = firstFeed.feedItems;
    let feedItemTitles = findAll('[data-id="item-title"]').mapBy('textContent');
    let itemTitles = items.mapBy('title');
    assert.deepEqual(feedItemTitles, itemTitles, 'it displays all item titles');

    await click('[data-id="item-title"]');

    let { textContent: itemDescription } = find('[data-id="item-description"]');
    assert.strictEqual(
      itemDescription,
      firstFeed.description,
      'it displays the feed item description when the user clicks on the feed item heading'
    );

    // arrow keys to go to next/previous feed item
  });
});

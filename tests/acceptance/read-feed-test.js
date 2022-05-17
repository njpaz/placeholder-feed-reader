import { module, test } from 'qunit';
import { visit, click, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | read feed', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it lists all feeds in the sidebar', async function (assert) {
    this.server.createList('feed', 3, 'staticTitle');

    await visit('/');

    let allFeeds = findAll('[data-id="feed-title"]').map(({ textContent }) =>
      textContent.trim()
    );
    assert.deepEqual(allFeeds, ['Feed 1', 'Feed 2', 'Feed 3']);
  });

  test('it displays the feed information and feed items when clicking on the feed title', async function (assert) {
    assert.expect(8);
    let firstFeed = this.server.create('feed', 'staticTitle');

    await visit('/');
    await click('[data-id="feed-0"]');

    assert
      .dom('[data-id="feed-heading"]')
      .hasText('Feed 1', 'it shows the feed title at the top');
    assert
      .dom('[data-id="feed-heading"]')
      .hasAttribute(
        'href',
        firstFeed.url,
        'the feed title contains a link to the original site'
      );
    assert.dom('[data-id="item-title"]').hasClass('collapsed');
    assert.dom('[data-id="item-description"]').hasClass('hide');

    let { models: items } = firstFeed.feedItems;
    let feedItemTitles = findAll('[data-id="item-title"]').map(
      ({ textContent }) => textContent.trim()
    );
    let itemTitles = items.mapBy('title');
    assert.deepEqual(feedItemTitles, itemTitles, 'it displays all item titles');

    await click('[data-id="item-title"]');

    assert
      .dom('[data-id="item-description"]')
      .hasText(
        items[0].description,
        'it displays the feed item description when the user clicks on the feed item heading'
      );
    assert.dom('[data-id="item-title"]').doesNotHaveClass('collapsed');
    assert.dom('[data-id="item-description"]').hasClass('show');
  });
});

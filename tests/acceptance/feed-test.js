import { module, test } from 'qunit';
import { visit, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | feed', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.server.createList('feed', 3, 'staticTitle');
  });

  test('it lists all feeds in the sidebar', async function (assert) {
    await visit('/');

    let allFeeds = findAll('[data-id="feed-title"]').mapBy('textContent');
    assert.deepEqual(allFeeds, ['Feed 1', 'Feed 2', 'Feed 3']);
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | feed-item', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('item', {
      title: 'Some title',
      description: 'A description'
    });
  });

  test('it generates a unique element id and adds it to the page', async function (assert) {
    assert.expect(4);
    await render(hbs`<FeedItem @item={{this.item}} />`);

    let { id } = find('[data-id="item-description"]');

    assert.ok(
      id.startsWith('feed-item-ember'),
      'it uses the component guid to generate a unique id'
    );
    assert.dom('[data-id="item-header"]').hasAttribute('id', `heading-${id}`);
    assert.dom('[data-id="item-title"]').hasAria('controls', id);
    assert
      .dom('[data-id="item-description"]')
      .hasAria('labelledby', `heading-${id}`);
  });
});

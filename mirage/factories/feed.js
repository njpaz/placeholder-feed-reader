import { Factory } from 'miragejs';
import faker from '@faker-js/faker';

export default Factory.extend({
  title() {
    return faker.random.words();
  },
  url() {
    return faker.internet.url();
  },
  afterCreate(feed, server) {
    feed.update({
      feedItems: server.createList('feed-item', 5),
    });
  },
});

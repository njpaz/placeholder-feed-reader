import { Factory, association } from 'miragejs';
import faker from '@faker-js/faker';

export default Factory.extend({
  feedItems: association(),

  title() {
    return faker.random.words();
  },
  url() {
    return faker.internet.url();
  }
});

import { Factory } from 'miragejs';
import faker from '@faker-js/faker';

export default Factory.extend({
  description() {
    return faker.lorem.paragraphs();
  },
  image() {
    return faker.image.cats();
  },
  title() {
    return faker.random.words();
  },
  url() {
    return faker.internet.url();
  },
});

import Model, { attr, belongsTo } from '@ember-data/model';

export default class FeedItemModel extends Model {
  @attr('string') description;
  @attr('string') image;
  @attr('string') title;
  @attr('string') url;

  @belongsTo feed;
}

import Model, { attr, hasMany } from '@ember-data/model';

export default class FeedModel extends Model {
  @attr('string') title;
  @attr('string') url;

  @hasMany feedItems;
}

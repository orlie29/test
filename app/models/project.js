import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
  
  @attr title;
  @attr city;
  @attr category;
  @attr image;
  @attr description;
  @attr singleimage;
  @attr video;
  @attr poster;
  @attr secondaryimages;


}

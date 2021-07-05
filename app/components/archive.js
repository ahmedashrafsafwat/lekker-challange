import Component from '@glimmer/component';
import {
  action
} from '@ember/object';


export default class ArchiveComponent extends Component {

  self = this;

  @action
  changeArchiveStatus(record) {
    record.save().then(() => {
      // update locally
      record.archived = !record.archived
    });
  }
}

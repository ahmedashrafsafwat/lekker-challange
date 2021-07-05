import Controller from '@ember/controller';
import {
  action
} from '@ember/object';
import {
  inject as service
} from '@ember/service';


export default class IndexController extends Controller {
  @service router;

  @action
  showAll(value) {
    this.router.transitionTo({
      queryParams: {
        getAll: value
      }
    });


  }

}

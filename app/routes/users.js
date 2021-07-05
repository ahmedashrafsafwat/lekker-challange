import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  queryParams = {
    getAll: {
      refreshModel: true,
      replace: true
    },
  }

  model(params) {
    let getAll = params.getAll == 'true' ? true : false;
    
    return this.store.query('user', {
      getAll
    })
  }
}

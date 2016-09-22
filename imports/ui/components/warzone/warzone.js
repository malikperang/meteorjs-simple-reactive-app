import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './warzone.html';

class WarZone{
    constructor($scope,$reactive){
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
        });

    }
}

const name = 'warzone';

export default angular.module(name,[angularMeteor,uiRouter])
.component(name,{
    template,
      controllerAs: name,
      controller: WarZone
})
.config(config);

function config($stateProvider) {
  'ngInject'

  $stateProvider
  .state('warzone', {
    url: '/warzone',
    template: '<warzone></warzone>'
  });
}
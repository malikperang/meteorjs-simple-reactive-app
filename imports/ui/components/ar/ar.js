import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';

import template from './ar.html';

class ARCtrl {
    constructor($scope,$reactive,$state,$window){
        'ngInject';

        $reactive(this).attach($scope);

        this.$scope = $scope;
        this.$state = $state;

        this.subscribe('connections');
        this.subscribe('totalConnections');

        this.allCons = Connections.find();
        this.clientIP = '';

        this.subscribe('signals');
        var signal =  Signals.find();

        this.helpers({
            redir(){
                signal.forEach((c) => {
                    if(c.signals == 1){

                    $window.location.href = '/warzone';
                }

                if(c.signals == 0){
                    console.log('one');
                    this.$state.go('ar');
                }
            });
            }

        });

    }
}

const name = 'arpage';

export default angular.module(name,[angularMeteor,uiRouter])
.component(name,{
    template,
      controllerAs: name,
      controller: ARCtrl
})
.config(config);

function config($stateProvider) {
  'ngInject'

  $stateProvider
  .state('ar', {
    url: '/ar',
    template: '<arpage></arpage>'
  });
}
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';

import template from './ar.html';

class ARCtrl {
    constructor($scope,$reactive,$state){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');

        var signal =  Signals.find();

        this.subscribe('connections');

        this.helpers({
//
//               conList(){
//                  return Connections.find({});
//               },
//
//               redir(){
//                 signal.forEach((c) => {
//                        if(c.signals == 1){
//                            console.log('one');
//                             this.$state.go('testSignal');
//                        }
//                });
//               }
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
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Connections} from '../../../api/connections';

import template from './connect.html';

class Connect {
    constructor($scope,$reactive,$state){
        'ngInject';

        $reactive(this).attach($scope);

        this.$state = $state;

        this.subscribe('connections');


        this.helpers({
               conList(){
                  return Connections.find({});
               }
        });
    }

    init(){
        Meteor.call('insert',function(error,result){
            if(error){
                console.log('error',error);
            }else{
               console.log('success',result);
               if(result === false){
                   this.$state.go('home');
               }
            }
        });
    }
}

const name = 'connect';

export default angular.module(name,[angularMeteor,uiRouter])
.component(name,{
    template,
      controllerAs: name,
      controller: Connect
})
.config(config);

function config($stateProvider) {
  'ngInject'

  $stateProvider
  .state('connect', {
    url: '/',
    template: '<connect></connect>'
  });
}
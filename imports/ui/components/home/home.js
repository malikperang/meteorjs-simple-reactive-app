import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals,AttackSignals} from '../../../api/signals';

import template from './home.html';

class Home {
    constructor($scope,$state,$reactive){
        'ngInject';
        this.$state = $state;

         $reactive(this).attach($scope);

         this.subscribe('signals');

    }

    //redirect to connect page
    redirToConnect(){
        var today = new Date();
        this.data = {
            signals:0,
            date:today
        }
        Meteor.call('insertSignal',this.data,function(error,result){
            if(error){
                console.log('error',error);
            }else{
                console.log('result',result);
            }
        });
    }

    //redirect to about page
    redirToAbout(){
        var today = new Date();
         this.data = {
            signals:1,
            date:today
         }
         Meteor.call('insertSignal',this.data,function(error,result){

                });
    }

    //attack signal
    attack(){
        var today = new Date();
        this.data = {
            signals:2,
            date:today
        }
        Meteor.call('insertSignal',this.data,function(error,result){
            if(error){
                console.log('error',error);
            }else{
                console.log('result',result);
            }
        });
    }

    //refresh attack
    // refreshAttack(){
    //
    //     Meteor.call('refreshAttack',function(error,result){
    //         if(error){
    //             console.log('error',error);
    //         }else{
    //             console.log('result',result);
    //         }
    //     });
    // }
}

const name = 'home';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  template,
  controllerAs: name,
  controller: Home
})
.config(config);

function config($stateProvider) {
  'ngInject'

  $stateProvider
  .state('home', {
    url: '/home',
    template: '<home></home>'
//    resolve: {
//      currentUser($q) {
//        if (Meteor.userId() === null) {
//          return $q.reject('AUTH_REQUIRED');
//        } else {
//          return $q.resolve();
//        }
//      }
//    }
  });
}
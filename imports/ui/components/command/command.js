import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals,AttackSignals} from '../../../api/signals';

import template from './command.html';

class Command {
    constructor($scope,$state,$reactive){
        'ngInject';
        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');

    }

    //redirect to AR page
    redirToAr(){
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

    //redirect to Warzone page
    redirToWarzone(){
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


    //redirect to AR page
    redirToFirstAR(){
        var today = new Date();
        this.data = {
            signals:3,
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

    //redirect to AR page
    redirToSecondAR(){
        var today = new Date();
        this.data = {
            signals:4,
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

}

const name = 'command';

export default angular.module(name, [angularMeteor, uiRouter])
    .component(name, {
        template,
        controllerAs: name,
        controller: Command
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('command', {
            url: '/command',
            template: '<command></command>'
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
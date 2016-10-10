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
                alert('Redirect Success!')
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
             if(error){
                 console.log('error',error);
             }else{
                 console.log('result',result);
                 // alert('Redirect Success!')
             }
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
                alert('Wait until the the explosion finish & then press OK!!');
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
                // alert('Redirect Success!')
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
                // alert('Redirect Success!')
            }
        });
    }

    //redirect to GIF page
    redirToGifPage(){
        var today = new Date();
        this.data = {
            signals:5,
            date:today
        }
        Meteor.call('insertSignal',this.data,function(error,result){
            if(error){
                console.log('error',error);
            }else{
                console.log('result',result);
                // alert('Redirect Success!')
            }
        });
    }

    //redirect to VID page
    redirToVidPage(){
        var today = new Date();
        this.data = {
            signals:6,
            date:today
        }
        Meteor.call('insertSignal',this.data,function(error,result){
            if(error){
                console.log('error',error);
            }else{
                console.log('result',result);
                // alert('Redirect Success!')
            }
        });
    }


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
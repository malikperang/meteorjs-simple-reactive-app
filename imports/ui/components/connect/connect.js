import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';
import template from './connect.html';

class Connect {
    constructor($scope,$reactive,$state){
        'ngInject';

        this.$state = $state;

       $reactive(this).attach($scope);

       this.subscribe('signals');

       var signal = Signals.findOne();

        this.subscribe('connections');


        this.helpers({
               conList(){
                  return Connections.find({});
               }
        });

//         this.autorun(() => {
//                   signal.forEach((c) => {
//                                 console.log(c.signals);
//
//                           if(c.signals == 1){
//                                this.$state.go('about');
//                           }
//                    });
//                });
    }

//    console.log(this.$state);



    init(){
     console.log(this.$state);
        Meteor.call('insert',function(error,result){
            if(error){
                console.log('error',error);
            }else{
               console.log('success',result);
               if(result === false){
//                console.log(this.$state);
                  this.$state.go('home');
               }

               if(result === true){
                  this.$state.go('home');
               }
            }
        }.bind(this));
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
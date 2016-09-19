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

        var signal =  Signals.find();

        this.subscribe('connections');

        this.helpers({
               conList(){
                  return Connections.find({});
               }
        });

        this.myVar = 10;

        this.s = 0;

         this.autorun(() => {
//                   console.log(signal.fetch());
                 console.log('Autorun!!', this.getReactively('myVar'));
                   signal.forEach((c) => {
                            if(c.signals == 0){
                                console.log('zero');
                                 this.$state.go('connect');
                            }

                            if(c.signals == 1){
                                console.log('one');
                                 this.$state.go('about');
                            }
                    });
                });

                this.myVar = 50;
    }


    init(){
     console.log(this.$state);
        Meteor.call('insert',function(error,result){
            if(error){
                console.log('error',error);
            }else{
               console.log('success',result);
               if(result === false){
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
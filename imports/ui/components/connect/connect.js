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
               showSig(){
                   if(signal){
                        console.log('signal:',signal.fetch());
                   }
               },

               conList(){
                  return Connections.find({});
               },

               redir(){
                 signal.forEach((c) => {
                        if(c.signals == 1){
                            console.log('one');
                             this.$state.go('warzone');
                        }

                        if(c.signals == 0){
                            console.log('one');
                             this.$state.go('ar');
                        }
                });
               }
        });

        this.myVar = 10;

        this.s = 0;
}

    init(){
        var state = this.$state;
        Meteor.call('insert',function(error,result){
            if(error){
                alert(error);
            }else{
               if(result === false){
                    Meteor.setTimeout(function(){
                        state.go('warzone');
                    },2000);
               }

               if(result === true){
                   Meteor.setTimeout(function(){
                        state.go('warzone');
                   },2000);
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
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals} from '../../../api/signals';

import template from './test_signal.html';

class TestSignal {

    constructor($scope,$state,$reactive){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

         this.subscribe('signals');

         var signal = Signals.find();

        this.helpers({
            signals(){
                if(signal){
                    console.log(signal.fetch());
                    return signal;
                }
            },

            redir(){
                  signal.forEach((c) => {
                                    if(c.signals == 0){
                                        console.log('zero');
                                         this.$state.go('connect');
                                    }

                            });
            }

        });



    }

//        this.autorun(() => {
////           console.log(signal.fetch());
//
////           this.subscribe('signals',()=>{
////                       return [ this.getReactively('signals') ];
////                   });
//
//           signal.forEach((c) => {
//                    if(c.signals == 0){
//                        console.log('zero');
//                         this.$state.go('connect');
//                    }
//
//                    if(c.signals == 1){
//                        console.log('one');
//                         this.$state.go('about');
//                    }
//
////                   if(c.signals == 0){
////                        this.$state.go('connect');
////                   }
//            });
//        });
//    }

}

const name = 'testSignal';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  template,
  controllerAs: name,
  controller: TestSignal
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('testSignal', {
    url: '/testSignal',
    template: '<test_signal></test_signal>'
  });
}
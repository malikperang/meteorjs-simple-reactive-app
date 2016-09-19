import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals} from '../../../api/signals';

import template from './about.html';

class About {

    constructor($scope,$state,$reactive){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

         this.subscribe('signals');

         var signal = Signals.find();

//        this.relevantId = 10;
//
//
//
//        this.relevantId = 50; // This will cause the subscribe arguments method to run again

//        console.log(this.relevantId);



//        console.log(signal.fetch());

        this.helpers({

        });

        this.autorun(() => {
//           console.log(signal.fetch());

//           this.subscribe('signals',()=>{
//                       return [ this.getReactively('signals') ];
//                   });

           signal.forEach((c) => {
                    if(c.signals == 0){
                        console.log('zero');
                         this.$state.go('connect');
                    }

                    if(c.signals == 1){
                        console.log('one');
                         this.$state.go('about');
                    }

//                   if(c.signals == 0){
//                        this.$state.go('connect');
//                   }
            });
        });
    }

}

const name = 'about';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  template,
  controllerAs: name,
  controller: About
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('about', {
    url: '/about',
    template: '<about></about>'
  });
}
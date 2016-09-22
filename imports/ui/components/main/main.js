import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {Signals} from '../../../api/signals';
import { name as Navigation } from '../shared/navigation/navigation';
import { name as Signup } from '../signup/signup';
import { name as Login } from '../login/login';
import { name as Home } from '../home/home';
import { name as About } from '../about/about';
import { name as Connect } from '../connect/connect';
import { name as TestSignal } from '../test_signals/test_signal';
import { name as ARPage } from '../ar/ar';
import { name as WarZone } from '../warzone/warzone';

import template from './main.html'

class Main {
    constructor($scope,$state,$reactive){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');

        var signal = Signals.find();
}

}

const name = 'main';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  'accounts.ui',
//  Navigation,
  Signup,
  Login,
  Home,
  About,
  Connect,
  TestSignal,
  ARPage,
  WarZone
])
.component(name, {
  template,
  controllerAs: name,
  controller: Main
})
.config(config)
.run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
//    if(error === 'AUTH_REQUIRED') {
//      $state.go('signup');
//    }
  });
}
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals} from '../../../api/signals';

import template from './firework.html';

class Firework {

    constructor($scope,$state,$reactive){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');

        var signal = Signals.find();

        this.helpers({

        });

    }

}

const name = 'firework';

export default angular.module(name, [angularMeteor, uiRouter])
    .component(name, {
        template,
        controllerAs: name,
        controller: Firework
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('firework', {
            url: '/firework',
            template: '<firework></firework>'
        });
}
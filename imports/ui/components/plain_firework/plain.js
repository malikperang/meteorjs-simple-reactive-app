import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals} from '../../../api/signals';

import template from './plain.html';

class Plain {

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

const name = 'plain';

export default angular.module(name, [angularMeteor, uiRouter])
    .component(name, {
        template,
        controllerAs: name,
        controller: Plain
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('plain', {
            url: '/plain',
            template: '<plain></plain>'
        });
}
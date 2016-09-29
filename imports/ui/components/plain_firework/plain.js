import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals,AttackSignals} from '../../../api/signals';

import template from './plain.html';

class Plain {

    constructor($scope,$state,$reactive){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');
        this.subscribe('attackSignals');

        var signal = Signals.find();
        var attackSignal = AttackSignals.find();

        this.helpers({
            redirToWarzone(){
                if(attackSignal.length < 0){
                    $state.go('warzone');
                    // console.log('Attack Signal',attackSignal.fetch());
                }
            }
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
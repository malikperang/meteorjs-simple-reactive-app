import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals,AttackSignals} from '../../../api/signals';

import template from './plain.html';

class Plain {

    constructor($scope,$state,$reactive,$window){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');
        this.subscribe('attackSignals');

        var signal = Signals.find();
        var attackSignal = AttackSignals.find();

        this.helpers({
            // redirToWarzone(){
            //     if(!attackSignal){
            //         $window.location.href = '/warzone';
            //         // console.log('Attack Signal',attackSignal.fetch());
            //     }
            // },

            redirToAr(){
                signal.forEach((c) => {
                    if(c.signals == 1){
                    console.log('one');
                    $state.go('warzone');
                }

                if(c.signals == 0){
                    console.log('one');
                    $state.go('ar');
                }
            });
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
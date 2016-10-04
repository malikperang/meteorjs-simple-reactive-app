import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals} from '../../../api/signals';

import template from './plain.html';

class Plain {

    constructor($scope,$state,$reactive,$window){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');
        var signal = Signals.find();

        this.helpers({
            redirToAr(){
                signal.forEach((c) => {
                    if(c.signals == 0){
                        $state.go('ar');
                    }
                    if(c.signals == 1){
                        $state.go('warzone');
                    }

                    if(c.signals == 2){
                        this.$state.go('plain');
                        // $window.location.href = '/plain';
                    }

                    if(c.signals == 3){
                        this.$state.go('firstAr');
                    }

                    if(c.signals == 4){
                        this.$state.go('secondAr');
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
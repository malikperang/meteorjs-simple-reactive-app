import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';

import template from './firstAr.html';

class FirstARCtrl {
    constructor($scope,$reactive,$state,$window){
        'ngInject';

        $reactive(this).attach($scope);

        this.$scope = $scope;
        this.$state = $state;

        this.subscribe('connections');
        this.subscribe('totalConnections');

        this.allCons = Connections.find();
        this.clientIP = '';

        this.subscribe('signals');
        var signal =  Signals.find();

        this.helpers({
            redir(){
                signal.forEach((c) => {

                    if(c.signals === 1){
                        $window.location.href = '/warzone';
                    }

                    if(c.signals === 5){
                        $window.location.href = '/gifpage';
                    }

                    if(c.signals === 6){
                        $window.location.href = '/vidpage';
                    }

            });
            }

        });

    }
}

const name = 'firstAr';

export default angular.module(name,[angularMeteor,uiRouter])
    .component(name,{
        template,
        controllerAs: name,
        controller: FirstARCtrl
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('firstAr', {
            url: '/firstAr',
            template: '<first_ar></first_ar>'
        });
}
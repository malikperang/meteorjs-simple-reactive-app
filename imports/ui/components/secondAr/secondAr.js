import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';

import template from './secondAr.html';

class SecondARCtrl {
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
            showExplode(){


            },
            redir(){
                signal.forEach((c) => {
                    if(c.signals == 0){
                        this.$state.go('ar');
                    }

                    if(c.signals == 1){
                        $window.location.href = '/warzone';
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

const name = 'secondAr';

export default angular.module(name,[angularMeteor,uiRouter])
    .component(name,{
        template,
        controllerAs: name,
        controller: SecondARCtrl
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('secondAr', {
            url: '/disneyland',
            template: '<second_ar></second_ar>'
        });
}
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'

import { Counts } from 'meteor/tmeasday:publish-counts';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';
import {EmptyCannons} from '../../../api/cannonEmpty';

import template from './warzone.html';

class WarZone{
    constructor($scope,$reactive,$state,$location,$window){
        'ngInject';

        $reactive(this).attach($scope);

        this.$scope = $scope;
        this.$state = $state;

        this.subscribe('connections');
        this.subscribe('totalConnections');

        var allCons = Connections.find();
        var clientIP = '';

        this.subscribe('signals');
        var signals =  Signals.find();

        $scope.num = 'change this';

        this.result = '';

        this.helpers({
            redir(){
                signals.forEach((c) => {
                    console.log('signals:',c);

                        if(c.signals === 2){
                            this.$state.go('plain');
                        }

                        if(c.signals === 3){
                            $window.location.href = '/firstAr';
                        }

                        if(c.signals === 4){
                            $window.location.href = '/firstAr';
                        }

                        if(c.signals === 5){
                            $window.location.href = '/gifpage';
                        }

                        if(c.signals === 6){
                            $window.location.href = '/vidpage';
                        }
                });
            },

        });
    }
}

const name = 'warzone';

export default angular.module(name,[angularMeteor,uiRouter])
    .component(name,{
        template,
        controllerAs: name,
        controller: WarZone
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('warzone', {
            url: '/warzone',
            template: '<warzone></warzone>'
        });
}
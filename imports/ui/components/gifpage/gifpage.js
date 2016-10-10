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

import template from './gifpage.html';

class Gifpage {
    constructor($scope,$reactive,$state,$location,$window){
        'ngInject';

        $reactive(this).attach($scope);

        this.$scope = $scope;
        this.$state = $state;

        this.subscribe('signals');
        var signals =  Signals.find();

        this.helpers({
            redir(){
                signals.forEach((c) => {
                    if(c.signals === 1){
                         $window.location.href = '/warzone';
                    }

                    if(c.signals === 3){
                        $window.location.href = '/firstAr';
                    }

                    if(c.signals === 4){
                        $window.location.href = '/firstAr';
                    }

                    if(c.signals === 6){
                        $window.location.href = '/vidpage';
                    }
            });
            },
        });
    }
}

const name = 'gifpage';

export default angular.module(name,[angularMeteor,uiRouter])
    .component(name,{
        template,
        controllerAs: name,
        controller: Gifpage
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('gifpage', {
            url: '/gifpage',
            template: '<gifpage></gifpage>'
        });
}
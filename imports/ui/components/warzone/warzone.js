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
// this.subscribe('attackSignals');

        var allCons = Connections.find();
        var clientIP = '';

        this.subscribe('signals');
        var signals =  Signals.find();
// var attackSignal = AttackSignals.find();

        $scope.num = 'change this';

        var result = '';

        this.result = '';

        this.helpers({
            showExplode(){


            },
            redir(){
                signals.forEach((c) => {
                    if(c.signals == 0){
                        this.$state.go('ar');
                    }

                    if(c.signals == 1){
                        this.$state.go('warzone');
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
            },

//attack
            attack(){
                signals.forEach((c) => {

//attack signal
                    if(c.signals == 2){
                    this.call('getIpAddress',function(error,result){
                        if(error){
                            alert(error);
                        }else{
                            console.log('result:',result);
                            clientIP = result;
                            var min = 0;
                            var max = Counts.get('totalDevice');
                            var counter = 1;

                            allCons.forEach((c)=>{
//check if client ip is match with saved client ip
                                if(result == c.clientIP && c.queNum == counter){
// $scope.num = c.queNum;
// $state.go('plain');
                                $window.location.href = '/plain';
                            }
                            counter++;
                        });
                        }
                    });
                }
            });

            },

            attackAgain(){

            }
        });
    }

    refresh(){
        var $scope = this.$scope;
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
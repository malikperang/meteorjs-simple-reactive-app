import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'

import { Counts } from 'meteor/tmeasday:publish-counts';
import {Connections} from '../../../api/connections';
import {Signals,AttackSignals} from '../../../api/signals';
import {EmptyCannons} from '../../../api/cannonEmpty';

import template from './warzone.html';

class WarZone{
    constructor($scope,$reactive,$state){
        'ngInject';

        $reactive(this).attach($scope);

        this.$scope = $scope;
        this.$state = $state;

        this.subscribe('connections');
        this.subscribe('totalConnections');
        this.subscribe('attackSignals');

        var allCons = Connections.find();
        var clientIP = '';

        this.subscribe('signals');
        var signal =  Signals.find();
        var attackSignal = AttackSignals.find();

        $scope.num = '';

        this.helpers({
            showExplode(){


            },
            redir(){
                signal.forEach((c) => {
                    if(c.signals == 1){
                    console.log('one');
                    this.$state.go('warzone');
                }

                if(c.signals == 0){
                    console.log('one');
                    this.$state.go('ar');
                }

            });
            },

            //attack
            attack(){
                attackSignal.forEach((c) => {

                    if(c.signals == 2){
                        Meteor.call('getIpAddress',function(error,result){
                            if(error){
                                alert(error);
                            }else{
                                console.log('result ip adress:',result);
                                clientIP = result;

                                var min = 0;
                                var max = Counts.get('totalDevice');

                                console.log('max',max);


                                allCons.forEach((c)=>{


                                });

                                // allCons.every(function(element, index) {
                                //     console.log(element);
                                //     console.log(index);
                                //     // Do something.
                                //     // if (clientIP == )
                                //     //     return false;
                                //     // else return true;
                                // });
                                //
                                // allCons.forEach((c) => {
                                //
                                //     console.log(c);
                                //     // for(var i=min;i<max;i++){
                                //     //     console.log(c);
                                //     //
                                //     // }
                                //
                                // // console.log('c data',c);
                                //     // console.log('clientIP:',clientIP);
                                //     // Meteor.setInterval(function(){
                                //     //     for(var i=min;i<max;i++){
                                //     //         var existClientIP = Session.get('clientIP');
                                //     //
                                //     //         if(clientIP == c.clientIP ){
                                //     //             // console.log('tkda session');
                                //     //             Session.set('seq',c.queNum);
                                //     //             Session.set('clientIP',clientIP);
                                //     //             break;
                                //     //         }else if(existClientIP == clientIP){
                                //     //             console.log('exists client ip,',existClientIP);
                                //     //             break;
                                //     //         }
                                //     //
                                //     //         // if(existClientIP == c.clientIP){
                                //     //         //     console.log(existClientIP);
                                //     //         //     break;
                                //     //         // }
                                //     //
                                //     //     }
                                //     // },500);
                                //
                                // });
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
// console.log('connections:',allCons.fetch());
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
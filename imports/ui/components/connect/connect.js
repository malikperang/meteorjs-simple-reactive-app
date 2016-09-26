import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import { Counts } from 'meteor/tmeasday:publish-counts';
import {Connections} from '../../../api/connections';
import {Signals} from '../../../api/signals';
import template from './connect.html';

class Connect {
    constructor($scope,$reactive,$state){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');
        this.subscribe('totalConnections');

        var signal =  Signals.find();

        this.subscribe('connections');

        this.helpers({
            showSig(){
                console.log('total',Counts.get('totalDevice'));
                $scope.totalConnection = Counts.get('totalDevice');

            },

            conList(){
                return Connections.find({});
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
            }
        });
        //
        this.myVar = 10;

        this.s = 0;
    }


    init(){
        var state = this.$state;

        var number = this.generateRandomNumber(0,8);

        // console.log('number on client',number);

        data = {
            number:number
        };


        Meteor.call('insert',function(error,result){
            if(error){
                alert(error);
            }else{
                console.log('scue');
                console.log(result);
                // // console.log()
                if(result === false){
                    Meteor.setTimeout(function(){
                        state.go('warzone');
                    },2000);
                }

                if(result === true){
                    Meteor.setTimeout(function(){
                        state.go('warzone');
                    },2000);
                }
            }
        }.bind(this));
    }

    generateRandomNumber(min,max){
        return Math.floor(Math.random() * (max-min) + min);
    }
}



const name = 'connect';

export default angular.module(name,[angularMeteor,uiRouter])
    .component(name,{
        template,
        controllerAs: name,
        controller: Connect
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('connect', {
            url: '/',
            template: '<connect></connect>'
        });
}
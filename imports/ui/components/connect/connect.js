import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Counts } from 'meteor/tmeasday:publish-counts';
import {Connections,ExistConnections} from '../../../api/connections';
// import {TotalConnections} from '../../../api/totalConnection';
import {Signals} from '../../../api/signals';
import template from './connect.html';

class Connect {
    constructor($scope,$reactive,$state){
        'ngInject';

        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');
        this.subscribe('totalConnections');
        this.subscribe('existConnections');

        var signal =  Signals.find();
        // var total = TotalConnections.find();
        var exist = ExistConnections.find();

        this.subscribe('connections');

        // $scope.totalConnection = ;

        this.helpers({
            showSig(){
                console.log('total',Counts.get('totalDevice'));
                // console.log('exits',exist);
                //
                // if(exist > 0){
                //     alert('yes');
                // }
                $scope.totalConnection = Counts.get('totalDevice');
                // console.log('total:',total.fetch());
                // if(signal){
                //     console.log('signal:',signal.fetch());
                // }

                // if(totalConnection){
                //     console.log('total:',totalConnection.fetch());
                //     // totalConnection.forEach((c)=>{
                //     //     console.log(c);
                //     //     $scope.totalConnection = c.count;
                //     // });
                //
                // }
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

        console.log('number on client',number);
        data = {
            number:number
        };

        Meteor.call('checkExisting',data,function(error,result){
            if(error){
                alert(error);
            }else{
                // console.log('scue');
                // alert('yes exists');
                console.log(result);
                while(result === false){
                    data.number = this.generateRandomNumber(0,8);
                    Meteor.call('insert',data,function(error,result){
                        if(error){
                            alert(error);
                        }else{
                            console.log('scue');
                            // console.log(result.queNum);
                            // // console.log()
                            // if(result === false){
                            //     Meteor.setTimeout(function(){
                            //         state.go('warzone');
                            //     },2000);
                            // }
                            // //
                            // if(result === true){
                                Meteor.setTimeout(function(){
                                    state.go('warzone');
                                },2000);
                            // }
                        }

                    }.bind(this));
                    break;
                }
                // if(result === true){
                //     alert(result);
                //     while(result){
                //         var number = this.generateRandomNumber(0,8);
                //     }
                // }else{
                //     Meteor.call('insert',data,function(error,result){
                //         if(error){
                //             alert(error);
                //         }else{
                //             console.log('scue');
                //             // console.log(result.queNum);
                //             // // console.log()
                //             // if(result === false){
                //             //     Meteor.setTimeout(function(){
                //             //         // state.go('warzone');
                //             //     },2000);
                //             // }
                //             //
                //             // if(result === true){
                //             //     Meteor.setTimeout(function(){
                //             //         // state.go('warzone');
                //             //     },2000);
                //             // }
                //         }
                //     }.bind(this));
                // }
                // while(result > 0){
                //
                // }

                // if(result > 0){
                //
                // }else{
                //     Meteor.call('insert',data,function(error,result){
                //         if(error){
                //             alert(error);
                //         }else{
                //             console.log('scue');
                //             console.log(result);
                //             // // console.log()
                //             // if(result === false){
                //             //     Meteor.setTimeout(function(){
                //             //         // state.go('warzone');
                //             //     },2000);
                //             // }
                //             //
                //             // if(result === true){
                //             //     Meteor.setTimeout(function(){
                //             //         // state.go('warzone');
                //             //     },2000);
                //             // }
                //         }
                //     }.bind(this));
                // }
                // console.log(/**/result);
                // // console.log()
                // if(result === false){
                //     Meteor.setTimeout(function(){
                //         // state.go('warzone');
                //     },2000);
                // }
                //
                // if(result === true){
                //     Meteor.setTimeout(function(){
                //         // state.go('warzone');
                //     },2000);
                // }
            }
        }.bind(this));


        // Meteor.call('insert',data,function(error,result){
        //     if(error){
        //         alert(error);
        //     }else{
        //         console.log('scue');
        //         console.log(result);
        //         // // console.log()
        //         // if(result === false){
        //         //     Meteor.setTimeout(function(){
        //         //         // state.go('warzone');
        //         //     },2000);
        //         // }
        //         //
        //         // if(result === true){
        //         //     Meteor.setTimeout(function(){
        //         //         // state.go('warzone');
        //         //     },2000);
        //         // }
        //     }
        // }.bind(this));
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
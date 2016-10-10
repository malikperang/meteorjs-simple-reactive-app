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
                    console.log('signals:',c);

                    if(c.signals === 1){
                        $window.location.href = '/warzone';

                        // Meteor.setTimeout(function(){
                        //     this.$state.go('warzone');
                        // },3000).bind(this);
                    }

                    if(c.signals === 3){
                        $window.location.href = '/firstAr';
                    }

                    if(c.signals === 4){
                        $window.location.href = '/firstAr';
                    }

                    // if(c.signals === 5){
                    //     $window.location.href = '/gifpage';
                    // }
                    //
                    // if(c.signals === 6){
                    //     $window.location.href = '/vidpage';
                    // }
                });
            },

            insertRedirWarzone(){
                Meteor.setTimeout(function(){
                    var today = new Date();
                    this.data = {
                        signals:1,
                        date:today
                    }
                    Meteor.call('insertSignal',this.data,function(error,result){

                    });
                },3000);

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
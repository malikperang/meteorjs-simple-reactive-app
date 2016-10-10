import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Signals,AttackSignals} from '../../../api/signals';

import template from './command.html';

class Command {
    constructor($scope,$state,$reactive,$window){
        'ngInject';
        this.$state = $state;

        $reactive(this).attach($scope);

        this.subscribe('signals');

    }

    //attack signal
    attack(){
    var $state = this.$state;
        var today = new Date();
        this.data = {
            signals:2,
            date:today
        }
        Meteor.call('insertSignal',this.data,function(error,result){
            $state.go('warzone');
            if(error){
                console.log('error',error);
            }else{
                console.log('result',result);

            }
        });
    }


}

const name = 'command';

export default angular.module(name, [angularMeteor, uiRouter])
    .component(name, {
        template,
        controllerAs: name,
        controller: Command
    })
    .config(config);

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('command', {
            url: '/command',
            template: '<command></command>'
        });
}
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'chart.js/dist/Chart.js';
import 'angular-chart.js/dist/angular-chart.js';

import template from './testingPage.html';

class TestingPage{
    constructor($scope,$reactive){
        'ngInject';

        $reactive(this).attach($scope);

        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];

        $scope.data = [
           [65, 59, 80, 81, 56, 55, 40],
           [28, 48, 40, 19, 86, 27, 90]
         ];

        this.helpers({
//            renderChart(){
//                 $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
//                 $scope.data = [300, 500, 100];
//            }

//               getData(){
//                return data;
//               },
//
//               getLabels(){
//                return labels;
//               },
//
//               getSeries(){
//                return series;
//               }
        });

    }
}

const name = 'testingPage';

export default angular.module(name,[angularMeteor,uiRouter,'chart.js'])
.component(name,{
    template,
      controllerAs: name,
      controller: TestingPage
})
.config(config);

function config($stateProvider,ChartJsProvider) {
  'ngInject'

 ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });

  $stateProvider
  .state('testPage', {
    url: '/testPage',
    template: '<testing_page></testing_page>'
  });
}
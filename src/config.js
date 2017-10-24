import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
//import todoFactory from 'factories/todo-factory';
//import blogsController from 'blogs/blogs';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

$stateProvider
    .state('index', {
        url: '/',
        template: 'home/home.html'
    })
    // .state('index', {
    //     url: '/',
    //     template: require('./index.html')
    // })
    .state('create', {
         url: '/create',
         template: require('create/create.html')
    });

$locationProvider.html5Mode(true);
})


app.controller('navController', ['$scope', function ($scope) {

}]);

export default app;

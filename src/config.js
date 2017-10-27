import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
//import postController from 'post/post';
//import appModule from 'post/post';
//import createFactory from 'factories/create-factory';
// import createController from 'create/create';


const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

$stateProvider
    .state('index', {
        url: '/',
        template: 'home/home.html'
    })
    .state('post', {
        url: '/post',
        template: require('post/post.html'),
        controller: 'postController',
        controllerAs: 'post'
    })
    .state('create', {
         url: '/create',
         template: require('create/create.html'),
         controller: 'createController',
         controllerAs: 'create'
    });

$locationProvider.html5Mode(true);
})


app.controller('navController', ['$scope', function ($scope) {

}]);

app.controller('postController', ['$scope','$http', function ($scope, $http) {
    console.log('working post');
    $http.get('/create').then(response => {
        console.log('reponse',response);
        $scope.post = response.data.create;
    })


 }]);

app.controller('createController', ['$scope', '$http', function ($scope, $http) {
    function getTasks($scope) {
        $http.get('/').then(response => {
            console.log('reponse',response);
            $scope.create = response.data.create;
        })
    }


    var objectArray = [];


    $scope.createTask = function ($scope, params) {
        objectArray.push({
            title: this.createTaskInput,
            detail: this.detailTaskInput
        });
        $http.post('/create', {
            title: this.createTaskInput,
            detail: this.detailTaskInput
        }).then(response => {
            //getTasks($scope);
            //.createTaskInput = '';
        console.log(response);
        })


    };

    console.log('objectArray',objectArray);
}]);
export default app;

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
















// const app = angular.module('app', [uiRouter]);

// export default class createController {
//     testData() {
//         var objectArray = [{title: "india", detail: "aaddfafofno" }];
//         console.log($scope.objectArray);
//     }
// }




// import _ from 'lodash';
// export default function ($scope, createFactory) {
//     let params = {
//         createHasInput: false
//     };
//     // $scope.todos = [
//     //     {
//     //         task: 'do dishes',
//     //         isCompleted: false,
//     //         isEditing: false
//     //     },
//     //     {
//     //         task: 'walk the dog',
//     //         isCompleted: true,
//     //         isEditing: false
//     //     }
//     // ];
//
//     createFactory.getTasks($scope);
//
//     // $scope.onCancelClick = todo => {
//     //     todo.isEditing = false;
//     // }
//
//     const { createTask, watchCreateTaskInput } = createFactory;
//
//
//     $scope.createTask = _.partial(createTask, $scope, params);
//     //$scope.updateTask = _.partial(updateTask, $scope );
//     //$scope.deleteTask = _.partial(deleteTask, $scope);
//     $scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));
// }
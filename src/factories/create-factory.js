// import _ from 'lodash';
// import angular from 'angular';
//
// const createFactory = angular.module('app.createFactory', [])
//
//      .factory('createFactory', ($http) => {
//         function getTasks($scope) {
//             $http.get('/create').then(response => {
//             console.log('reponse',response);
//             $scope.create = response.data.create;
//             });
//         }
//
//         function createTask($scope, params) {
//             // if (!$scope.createTaskInput) {
//             // console.log(createTask);
//             // return;
//             // }
//             $http.post('/create', {
//             task: $scope.createTaskInput,
//             }).then(response => {
//             getTasks($scope);
//             $scope.createTaskInput = '';
//             console.log(response);
//             });
//
//     // params.createHasInput = false;
//     //$scope.createTaskInput= '';
//         }
// // function updateTask($scope, todo) {
// //     $http.put(`/todos/${todo._id}`, {
// //         task: todo.updatedTask
// //     }).then(response => {
// //         getTasks($scope);
// //     todo.isEditing = false;
// // });
// //
// //     // todo.task = todo.updatedTask;
// //     // todo.isEditing = false;
// // }
//
// // function deleteTask($scope, todoToDelete) {
// //     $http.delete(`/todos/${todoToDelete._id}`).then(response => {
// //         getTasks($scope);
// // });
// //     //_.remove($scope.todos, todo => todo.
// //     //  task === todoToDelete.task);
// // }
// function watchCreateTaskInput(params, $scope, val) {
//     const createHasInput = params.createHasInput;
//
//     if (!val && createHasInput) {
//         $scope.create.pop();
//         params.createHasInput = false;
//     } else if (val && !createHasInput) {
//         $scope.create.push({ task: val });
//         // if(!(Array.isArray($scope.todos))){
//         //     $scope.todos.push({ task: val, isCompleted: false});
//         // } else{
//         //     $scope.todos = [];
//         //     $scope.todos.push({ task: val, isCompleted: false});
//         // }
//         params.createHasInput = true;
//     } else if (val && createHasInput) {
//         $scope.create[$scope.create.length - 1].task = val;
//     }
//
//     }
//     return {
//         getTasks,
//         createTask,
//         //updateTask,
//         //deleteTask,
//         watchCreateTaskInput
//
//     };
// })
//
// export default createFactory;
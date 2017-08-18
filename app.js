angular.module('TodoApp', ['firebase']).constant('firebaseConfig', {
    apiKey: "AIzaSyBl1hDAyp38K3WNeZljOl5Z4fMGayyLSi8"
    , authDomain: "final-f22f0.firebaseapp.com"
    , databaseURL: "https://final-f22f0.firebaseio.com"
    , projectId: "final-f22f0"
    , storageBucket: "final-f22f0.appspot.com"
    , messagingSenderId: "149695883160"
}).run(firebaseConfig => firebase.initializeApp(firebaseConfig)).controller('todosCtrl', function ($scope, $firebaseObject, $firebaseArray) {
    const dbRef = firebase.database().ref().child('todos')
    $scope.todoList = $firebaseArray(dbRef)
    this.getBlankTodo = () => ({
        fname: ''
        , lname: ''
        , phone: ''
        , subject: ''
        , priority: ''
        , isCompleted: false
    })
    $scope.newTodo = this.getBlankTodo()
    $scope.addTodo = () => {
        $scope.todoList.$add($scope.newTodo)
        $scope.newTodo = this.getBlankTodo()
    }
    $scope.saveTodo = todo => $scope.todoList.$save(todo)
    $scope.removeTodo = todo => {
        if (confirm("Are you sure you want to delete this todo?")) {
            $scope.todoList.$remove(todo)
        }
    }
    $scope.check = function (todo) {
        todo.isCompleted = !todo.isCompleted;
        $scope.saveTodo(todo)
    }
})
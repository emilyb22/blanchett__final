angular.module('ToDoApp',[]). /*App controller*/
controller('toDoListCrtl',['$scope','apptodoLocalStorage', function($scope, apptodoLocalStorage){ /*displaying list controller*/
    $scope.todoitemsList = apptodoLocalStorage.get("item") || [];
    
    $scope.addTodoItem = function(){ /*Adding items through the formy input*/
        $scope.todoitemsList.push({'title':$scope.newTask,'date':$scope.newDate, 'done':false}) //adding the date and the title
        apptodoLocalStorage.set("item", $scope.todoitemsList)
        apptodoLocalStorage.set("done", $scope.todoitemsList)
        $scope.newTask = ''/*To empty the input*/
        $scope.newDate = ''
    }
    
     
    $scope.clearCompleted = function(){ /*Delete all completed function*/
            $scope.todoitemsList = $scope.todoitemsList.filter(function(item){
            return !item.done
        })
            apptodoLocalStorage.remove('item', $scope.todoitemsList)
            apptodoLocalStorage.set('item', $scope.todoitemsList)
    }
    
    $scope.saveEditTodo = function(){
        $scope.editing = false
        apptodoLocalStorage.set('item', $scope.todoitemsList)
    }
    
}]) 
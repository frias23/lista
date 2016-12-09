function TodoCtrl($scope) {
  /*nombre de la funcion a la que podemos llamar en el html por medio de una clase*/
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
      /*listado de los productos */
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
      /*funcion para contar los productos que estamos introduciendo*/
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
      /*funcion para añadir el texto en el formulario y mostrarlo en el documento */
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
              /*completada la lista*/
        });
    };
}
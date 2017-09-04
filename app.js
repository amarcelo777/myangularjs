(function (){
'use strict';

angular.module('myfirstapp',[])

.controller('myfirstcontroller', function ($scope) {
$scope.name = "Andy Marcelo";
$scope.sayhello = function () {
  return "hello andy";
}
});

})();

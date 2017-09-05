(function (){
'use strict';

angular.module('namecalculator',[])

.controller('namecalculatorcontroller', function($scope) {
$scope.name = "";
$scope.totalvalue = 0;
$scope.displaynumerc = function () {
    var totalnamevalue = calculatenumericforstring($scope.name); //get the total value
    $scope.totalvalue = totalnamevalue;
};
  function calculatenumericforstring(string) {
    var totalstringvalue = 0;
    for (var i = 0; i < string.length; i++) {
     totalstringvalue += string.charCodeAt(i)
    }
    return totalstringvalue;
  }
});

})();

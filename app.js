(function () {
	'use strict';
	
	angular.module('DIApp', [])
	.controller('DIController', DIControllerFnc);
	
	function DIControllerFnc ($scope, $filter) {
			$scope.name = "Andy";
			$scope.upper = function () {
				var upcase = $filter('uppercase');
				$scope.name = upcase($scope.name);
			};
	}
	
	console.log(DIControllerFnc.toString());
})();

(function () {
	'use strict';
	
	angular.module('DIApp', [])
	.controller('DIController', DIControllerFnc);
	
	function DIControllerFnc ($scope, $filter, $Injector) {
			$scope.name = "Andy";
			$scope.upper = function () {
				var upcase = $filter('uppercase');
				$scope.name = upcase($scope.name);
			};
			console.log($injector.annotate(DIControllerFnc));
	}
	
	console.log(DIControllerFnc.toString());
})();

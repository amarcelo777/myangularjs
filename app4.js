(function () {
	'use strict';
	
	angular.module('DIApp', [])
	.controller('DIController', DIControllerFnc);
	
	function DIControllerFnc ($scope, $filter, $injector) {
			$scope.name = "Andy";
			$scope.upper = function () {
				var upcase = $filter('uppercase');
				$scope.name = upcase($scope.name);
			};
			console.log($injector.annotate(DIControllerFnc));
	}
	
	function annotateme(name, job, blah) {
		return "Blah!";
	}
	
	console.log(DIControllerFnc.toString());
})();

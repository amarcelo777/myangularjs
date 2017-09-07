(function () {
	'use strict';
	
	angular.module('DIApp', [])
	.controller('DIController', DIControllerFnc);
	
	DIControllerFnc.$inject = ['$scope','$filter', '$injector'];
	
	function DIControllerFnc ($scope, $filter, $injector) {
			$scope.name = "Andy1:11";
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

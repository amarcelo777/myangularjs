(function () {
	'use strict';
	
	angular.module('MsgApp', [])
	.controller('MsgController', MsgControllerFnc);
	
	DIControllerFnc.$inject = ['$scope'];
	
	function DIControllerFnc ($scope) {
			$scope.name = "Andy";
			$scope.StateOfBeing = "smile";
		
			$scope.sayMessage = function () {
				return
			};
			console.log($injector.annotate(DIControllerFnc));
	}
	
	function annotateme(name, job, blah) {
		return "Blah!";
	}
	
	console.log(DIControllerFnc.toString());
})();

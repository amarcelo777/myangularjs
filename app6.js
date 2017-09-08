(function () {
	'use strict';
	
	angular.module('MsgApp', [])
	.controller('MsgController', MsgControllerFnc);
	
	DIControllerFnc.$inject = ['$scope'];
	
	function MsgControllerFnc ($scope) {
			$scope.name = "Andy";
			$scope.StateOfBeing = "funny";
		
			$scope.HappyAndy = function () {
				$scope.StateOfBeing = "smile";
			};
			
	}
	
	
})();

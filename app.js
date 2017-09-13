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
			
			$scope.sayMessage = function () {
				var msg = "Andy likes to eat T4 boba drinks";
				return msg;
			}
			
	}
	
	
})();

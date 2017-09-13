(function () {
	'use strict';
	
	angular.module('MsgApp', [])
	.controller('MsgController', MsgControllerFnc);
	
	DIControllerFnc.$inject = ['$scope', '$filter'];
	
	function MsgControllerFnc ($scope, $filter) {
			$scope.name = "Andy";
			$scope.StateOfBeing = "funny";
			$scope.PriceOfBoba = 5.25;
		
			$scope.HappyAndy = function () {
				$scope.StateOfBeing = "smile";
			};
			
			$scope.sayMessageHtml = function () {
				var msg = "Andy likes to eat T4 boba drinks";
				return msg;
			}
			$scope.sayMessageJs = function () {
				var msg = "Andy likes to eat T4 boba drinks";
				var output = $filter('uppercase')(msg);
				return output;
			}
			
	}
	
	
})();

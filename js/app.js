var myApp=angular.module('diskCollectionApp',[])
.controller('diskCollectionController', function($scope,$http){
	$scope.isArray = angular.isArray;
	$http.get('cd-dvd-data.json').success(function(data){
		$scope.data=data;
	});
});
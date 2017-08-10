app.controller('HttpTestController', function ($scope, $rootScope, APIService) {
	$rootScope.title = 'Rent a Car AngularJS - Http Test';
	$scope.msg = 'Http Test';
	$scope.returnTest = {};
	$scope.showResult = false;
	$scope.cep = '02611003';

	$scope.CallTest = function(){
		var serviceReturn = APIService.getTest();
        serviceReturn.then(function (d) {
            $scope.returnTest = d.data;
        }, function (error) {
			$scope.returnTest = error;
        });
		$scope.showResult = true;
	}

	$scope.CallCep = function(){
		var serviceReturn = APIService.getCep($scope.cep);
        serviceReturn.then(function (response) {
			$scope.returnTest = response.data;
        }, function (response) {
			$scope.returnTest = response.data;
        });
		$scope.showResult = true;
	}
});
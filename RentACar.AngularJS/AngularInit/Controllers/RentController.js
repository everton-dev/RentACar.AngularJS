app.controller('RentController', function ($scope, $rootScope) {
	$rootScope.title = 'Rent a Car AngularJS - Rent';
	$scope.msg = 'Choose a Car to Rent';
	$scope.showCars = false;
	$scope.filterSeach = { location:{ id:0, name: '-- Select --' }, Inidate:'', FinDate:'' };

	$scope.locations = [
						{ id:0, name: '-- Select --' },
						{ id:1, name: 'Brazil, São Paulo' },
						{ id:2, name: 'USA, New York' },
						{ id:3, name: 'UK, London' }
						];
	$scope.cars = [
					{ src:'Images/Cars/MercedesBenzGLASUV.png', brand:'Mercedes-Benz GLA', value:298.96, nowValue:284.51 },
					{ src:'Images/Cars/HyundaiAccent.png', brand:'Hyundai Accent', value:218.53, nowValue:208.14 },
					{ src:'Images/Cars/ToyotaYaris.png', brand:'Toyota Yaris', value:222.20, nowValue:211.60 },
					{ src:'Images/Cars/NissanSentra.png', brand:'Nissan Sentra', value:225.87, nowValue:215.08 },
					{ src:'Images/Cars/ToyotaCorolla.png', brand:'Toyota Corolla', value:229.52, nowValue:218.53 },
					{ src:'Images/Cars/ChevroletMalibu.png', brand:'Chevrolet Malibu', value:233.14, nowValue:222.01 }
					];

	$scope.Find = function(){
		$scope.showCars = true;
	};

	$scope.ReFind = function(){
		$scope.showCars = false;
	};
});
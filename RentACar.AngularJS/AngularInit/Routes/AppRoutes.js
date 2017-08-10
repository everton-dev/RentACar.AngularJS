app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
    .when('/', {
        templateUrl: 'Views/Home.html',
        controller: 'HomeController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Home', {
        templateUrl: 'Views/Home.html',
        controller: 'HomeController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/AboutUs', {
        templateUrl: 'Views/AboutUs.html',
        controller: 'AboutUsController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Rent', {
        templateUrl: 'Views/Rent.html',
        controller: 'RentController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Contact', {
        templateUrl: 'Views/Contact.html',
        controller: 'ContactController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Login', {
        templateUrl: 'Views/Login.html',
        controller: 'LoginController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/HttpTest', {
        templateUrl: 'Views/HttpTest.html',
        controller: 'HttpTestController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});
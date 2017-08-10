var app = angular.module('rentApp', ['ngCookies', 'ngRoute', 'ngSanitize']);

app.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }
]);
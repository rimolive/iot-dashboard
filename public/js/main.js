angular.module('iot-dashboard', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboardController'
		});
		$routeProvider.when('/gateways', {
			templateUrl: 'partials/gateways.html',
			controller: 'gatewaysController'
		});
		$routeProvider.when('/alerts', {
			templateUrl: 'partials/alerts.html',
			controller: 'alertsController'
		});
		$routeProvider.otherwise({redirectTo: '/dashboard'});
});

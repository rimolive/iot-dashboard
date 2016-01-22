angular.module('iot-dashboard', ['ngRoute')
	.config(function($routeProvider) {
		$routeProvider.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboardController'
		});
		$routeProvider.otherwise({redirectTo: '/dashboard'});
});

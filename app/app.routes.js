app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'homeController'
        }).
        when('/kith', {
            templateUrl: 'app/components/about?=kith',
            controller: 'aboutController'
        }).
        when('/kate', {
            templateUrl: 'app/components/about?=kate',
            controller: 'aboutController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
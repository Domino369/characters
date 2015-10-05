app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/'
        });
        
    //$locationProvider.html5Mode(true);
}]);
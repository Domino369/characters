app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'homeController'
        }).
        when('/:name', {
            templateUrl: 'app/components/about/about.html',
            controller: 'aboutController'
        }).
        otherwise({
            redirectTo: '/'
        });
        
    //$locationProvider.html5Mode(true);
}]);
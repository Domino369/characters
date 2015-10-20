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
        when('/:name/story', {
            templateUrl: 'app/components/story/story.html',
            controller: 'storyController'
        }).
        when('/:name/sheets', {
            templateUrl: 'app/components/sheets/sheets.html',
            controller: 'sheetsController'
        }).
        otherwise({
            redirectTo: '/'
        });
        
    $locationProvider.html5Mode(true);
}]);
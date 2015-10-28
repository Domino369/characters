app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.
        state('home', {
            url: '/',
            templateUrl: 'app/components/home/home.html',
            controller: 'homeController'
        }).
        state('about', {
            url: '/{aspect:[A-Za-z0-9\-\_\']{1,30}}',
            templateUrl: 'app/components/about.html',
            controller: 'aboutController'
        }).
        state('story', {
            url: '/{aspect:[A-Za-z0-9\-\_\']{1,30}}/story',
            templateUrl: 'app/components/story.html',
            controller: 'storyController'
        }).
        state('sheets', {
            url: '/{aspect:[A-Za-z0-9\-\_\']{1,30}}/{game:[A-Za-z0-9\-\_\']{1,30}}',
            templateUrl: 'app/components/sheets.html',
            controller: 'sheetsController'
        });
        
    $urlRouterProvider.otherwise('/');
    
    //$locationProvider.html5Mode(true);
}]);
angular.module( 'charactersApp' ).directive(
    'stats',
    function() {

        // Return the directive configuration.
        return({
            link: link,
            controller: 'statsController',
            restrict: 'E',
            scope: {
                aspectid: '@'
            },
            templateUrl: 'app/shared/stats/stats.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            console.log( 'Stats directive linking.' );
        }
    }
);
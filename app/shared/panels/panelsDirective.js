angular.module( 'charactersApp' ).directive(
    'panels',
    function() {

        // Return the directive configuration.
        return({
            link: link,
            controller: 'panelsController',
            restrict: 'E',
            scope: {
                group: '='
            },
            templateUrl: 'app/shared/panels/panels.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            console.log( 'Panels directive linking.' );
        }
    }
);
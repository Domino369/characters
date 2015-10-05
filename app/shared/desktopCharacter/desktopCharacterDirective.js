angular.module( 'charactersApp' ).directive(
    'desktopcharacter',
    function() {

        // Return the directive configuration.
        return({
            link: link,
            restrict: 'E',
            scope: {
                group: '='
            },
            templateUrl: 'app/shared/desktopCharacter/desktopCharacter.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            console.log( 'DesktopCharacter directive linking.' );
        }
    }
);
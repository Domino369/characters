angular.module( 'charactersApp' ).directive(
    'mobilecharacter',
    function() {

        // Return the directive configuration.
        return({
            link: link,
            restrict: 'E',
            scope: {
                groups: '='
            },
            templateUrl: 'app/shared/mobileCharacter/mobileCharacter.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            console.log( 'MobileCharacter directive linking.' );
        }
    }
);
angular.module( 'charactersApp' ).directive(
    'header',
    function() {

        // Return the directive configuration.
        return({
            link: link,
            restrict: 'E',
            templateUrl: 'app/shared/header/header.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            $('.button-collapse').sideNav();
            console.log( 'Header directive linking.' );
        }
    }
);
angular.module( 'charactersApp' ).directive(
    'footer',
    function() {

        // Return the directive configuration.
        return({
            link: link,
            restrict: 'E',
            templateUrl: 'app/shared/footer/footer.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            console.log( 'Footer directive linking.' );
        }
    }
);
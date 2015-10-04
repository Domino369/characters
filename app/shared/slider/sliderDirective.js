angular.module( 'charactersApp' ).directive(
    'slider',
    function() {

        // Return the directive configuration.
        return({
            replace: true,
            link: link,
            restrict: 'E',
            templateUrl: 'app/shared/slider/slider.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            $('.slider').slider({full_width: true});
            // Pause slider
            $('.slider').slider('pause');
            // Start slider
            $('.slider').slider('start');
            console.log( 'Slider directive linking.' );
        }
    }
);
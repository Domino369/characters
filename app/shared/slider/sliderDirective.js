angular.module( 'charactersApp' ).directive(
    'slider',
    function($interval) {

        // Return the directive configuration.
        return({
            replace: true,
            link: link,
            restrict: 'E',
            templateUrl: 'app/shared/slider/slider.html'
        });

        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            var domSlider;
            
            var sliderLoaderInterval = $interval(function () {
                domSlider = $('.slider');
                $('.slider').slider({full_width: true});
                // Pause slider
                $('.slider').slider('pause');
                // Start slider
                $('.slider').slider('start');
                console.log( 'Slider directive linking.' );
 
                if(domSlider) {
                    $interval.cancel(sliderLoaderInterval);
                }
            }, 1);
        }
    }
);
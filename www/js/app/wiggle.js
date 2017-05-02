define(["jquery"], function($) {

    var _go = function() {

        var panel = $('.panel'),
            h1 = $('h1');

        /* Device */
        console.log(JSON.stringify(device, null, 4));

        h1.html(device.model + ' ' + device.manufacturer);

        /* Acceleration *************************************************************/

        function onSuccess(acceleration) {
            var zDegrees = 9 * acceleration.x / 2,
                xDegrees = 0,//9 * acceleration.y,
                yDegrees = 0//9 * acceleration.z;

            $('.acceleration-x').html(xDegrees);
            $('.acceleration-y').html(yDegrees);
            $('.acceleration-z').html(zDegrees);

            panel.css({
                "transform": "rotateX(" + xDegrees + "deg) rotateY(" + yDegrees + "deg) rotateZ(" + zDegrees + "deg)"
            });
        }

        function onError(accelerationError) {
            //console.log('Acceleration error');
            //console.log(JSON.stringify(accelerationError, null, 4));
        }

        /* Run loop ****************************************************************/

        setInterval(function() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }, 100);

    }

    return {go: _go};
});
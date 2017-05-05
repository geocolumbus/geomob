define(["jquery"], function($) {

    var _go = function() {

        var water = $('.water'),
            h1 = $('h1');

        /* Device */
        console.log(JSON.stringify(device, null, 4));

        h1.html(device.model + ' ' + device.manufacturer);

        /* Acceleration *************************************************************/

        var smoothedAccelerationX = 0,
            smoothedAccelerationY = 0,
            deviceRotationAngle = 0,
            rotationAngleAdder = 1,
            cssAngle;

        function onSuccess(acceleration) {
            smoothedAccelerationX = (0.9 * smoothedAccelerationX + 0.1 * acceleration.x);
            smoothedAccelerationY = (0.9 * smoothedAccelerationY + 0.1 * acceleration.y);

            // Vary the rotation angle between -5 and +5 if in the browser
            if (device.platform === "browser") {
                deviceRotationAngle += rotationAngleAdder;
                if (deviceRotationAngle > 5) {
                    rotationAngleAdder = -1;
                }
                if (deviceRotationAngle < -5) {
                    rotationAngleAdder = 1;
                }
            } else {
                deviceRotationAngle = Math.atan2(smoothedAccelerationX, smoothedAccelerationY) * 180 / 3.14159;
            }

            cssAngle = deviceRotationAngle;

            if (window.orientation == -90) {
                cssAngle = -90 + deviceRotationAngle;
            }

            if (window.orientation == 90) {
                cssAngle = 90 + deviceRotationAngle;
            }

            var formattedRotationAngle = deviceRotationAngle.toFixed(0) + '';
            while (formattedRotationAngle.length < 4) {
                formattedRotationAngle = "&nbsp;" + formattedRotationAngle;
            }

            $('.rotation-angle').html(formattedRotationAngle);
            water.css({
                "transform": "rotateZ(" + cssAngle + "deg)"
            });
        }

        function onError(accelerationError) {
            //console.log('Acceleration error');
            //console.log(JSON.stringify(accelerationError, null, 4));
        }

        /* Run loop ****************************************************************/

        setInterval(function() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }, 50);

    }

    return {go: _go};
});
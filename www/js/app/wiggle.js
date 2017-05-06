define(["jquery"], function($) {

    var _go = function() {

        var water = $(".water"),
            h1 = $("h1");

        h1.html(device.model + " " + device.manufacturer);

        /* Acceleration *************************************************************/

        var smoothedAccelerationX = 0,
            smoothedAccelerationY = 0,
            deviceRotationAngle = 0,
            rotationAngleAdder = 1,
            cssAngle,
            updateTimeMsec = 50;

        function onSuccess(acceleration) {
            smoothedAccelerationX = (0.9 * smoothedAccelerationX + 0.1 * acceleration.x);
            smoothedAccelerationY = (0.9 * smoothedAccelerationY + 0.1 * acceleration.y);

            if (device.platform === "browser") {

                // Mock the rotation changing when running in a browser on a laptop
                deviceRotationAngle += rotationAngleAdder;
                if (deviceRotationAngle > 5) {
                    rotationAngleAdder = -1;
                }
                if (deviceRotationAngle < -5) {
                    rotationAngleAdder = 1;
                }

            } else {

                // Running on a mobile device
                deviceRotationAngle = Math.atan2(smoothedAccelerationX, smoothedAccelerationY) * 180 / 3.14159;
            }

            cssAngle = deviceRotationAngle;

            if (window.orientation == -90) {
                cssAngle = -90 + deviceRotationAngle;
            }

            if (window.orientation == 90) {
                cssAngle = 90 + deviceRotationAngle;
            }

            var formattedRotationAngle = deviceRotationAngle.toFixed(0) + "";
            while (formattedRotationAngle.length < 4) {
                formattedRotationAngle = "&nbsp;" + formattedRotationAngle;
            }

            $(".rotation-angle").html(formattedRotationAngle);
            water.css({
                "transform": "rotateZ(" + cssAngle + "deg)"
            });
        }

        function onError(accelerationError) {
            //console.log("Acceleration error");
            //console.log(JSON.stringify(accelerationError, null, 4));
        }

        /* Run loop ****************************************************************/

        if (device.platform === "browser") {
            // Slow down the update time so you can edit CSS live with the developer tools in the browser
            updateTimeMsec=1000;
        }

        setInterval(function() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }, updateTimeMsec);

    };

    return {go: _go};
});
// Test the app entry point

console.log("app-spec.js");

define(["app"], function(app) {

    describe("Application", function() {

        function initializeTheApp() {

            app.initialize();

            var e = document.createEvent('Event');
            e.initEvent("deviceready", true, true);
            window.document.dispatchEvent(e);
        }

        describe("initialize", function() {

            console.log("initialize");

            beforeAll(function(done) {

                // add a spy for device ready
                spyOn(app, "onDeviceReady");

                initializeTheApp();

                done();
            });

            it("should trigger onDeviceReady", function() {

                // make sure it happened
                expect(app.onDeviceReady).toHaveBeenCalled();
            });

        });
    });
});


// Test the app entry point
define(["app"], function(app) {

    describe("Application", function() {

        function initializeTheApp() {
            app.initialize();

            var e = document.createEvent('Event');
            e.initEvent("deviceready", true, true);
            window.document.dispatchEvent(e);
        }

        describe("initialize", function() {

            beforeAll(function(done) {

                // add a spy for device ready
                spyOn(app, "deviceready");

                initializeTheApp();

                done();
            });

            it("should trigger deviceready", function() {

                // make sure it happened
                expect(app.deviceready).toHaveBeenCalled();
            });

        });
    });
});


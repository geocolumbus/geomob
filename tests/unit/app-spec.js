// Test the app entry point

console.log("app-spec.js");

define(["app"], function(app) {

    describe("Application", function() {

        console.log("Application");

        function initializeTheApp() {
            console.log("initializeTheApp()");
            app.initialize();

            var e = document.createEvent('Event');
            e.initEvent("deviceready", true, true);
            window.document.dispatchEvent(e);
        }

        describe("initialize", function() {

            console.log("initialize");

            beforeAll(function(done) {

                console.log("beforeAll");

                // add a spy for device ready
                spyOn(app, "deviceready");

                initializeTheApp();

                done();
            });

            it("should trigger deviceready", function() {

                console.log("should trigger");

                // make sure it happened
                expect(app.deviceready).toHaveBeenCalled();
            });

        });
    });
});


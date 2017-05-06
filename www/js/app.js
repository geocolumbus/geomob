define(["app/wiggle"], function(wiggle) {

    return {
        initialize: function() {
            this.bindEvents();
        },
        bindEvents: function() {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        },
        onDeviceReady: function() {
            wiggle.go();
        }
    };
});



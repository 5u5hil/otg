var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        chrome.usb.getDevices(function (devices) {
            alert(JSON.stringify(devices))
        });
    }
};

app.initialize();
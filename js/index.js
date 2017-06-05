var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        serial.requestPermission(function success() {
            alert("Success");
            serial.open({}, function success() {
                alert("Success 2");
                serial.read(function success(buffer) {
                    alert(JSON.stringify(buffer));
                }, function error() {
                    alert("Error 3");
                });
            }, function error() {
                alert("Error 2");
            });
        }, function error() {
            alert("Error");
        });






    }
};

app.initialize();
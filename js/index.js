var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
      serial.requestPermission(function success(){
          alert("Success");
      }, function error(){
          alert("Error");
      });
      
      serial.open({}, function success(){
           alert("Success 2");
      }, function error(){
           alert("Error 2");
      });
      
      serial.read(function success(buffer){
           alert(JSON.stringify(buffer));
      }, function error(){
           alert("Error 3");
      });


    }
};

app.initialize();
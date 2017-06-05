var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
       cordova.plugins.diagnostic.isExternalStorageAuthorized(function(authorized){
    alert("App is " + (authorized ? "authorized" : "denied") + " access to the external storage");
    cordova.plugins.diagnostic.getExternalSdCardDetails(function(data){
        alert(JSON.stringify(data))
    }, function(err){
        alert(err)
    });


}, function(error){
    alert("The following error occurred: "+error);
});






    }
};

app.initialize();
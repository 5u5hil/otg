var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
       cordova.plugins.diagnostic.isExternalStorageAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to the external storage");
}, function(error){
    console.error("The following error occurred: "+error);
});






    }
};

app.initialize();
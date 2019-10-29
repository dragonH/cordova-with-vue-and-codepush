var app = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
      const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
      codePush.sync( null, {updateDialog: true, installMode:InstallMode.IMMEDIATE, mandatoryInstallMode: InstallMode.IMMEDIATE}, downloadProgress );
  }
};
app.initialize();
// qhR6tWnxa-OyerB3ExFX4UfFL_az572ebc93-7b95-40b1-b6db-43fd2640960f
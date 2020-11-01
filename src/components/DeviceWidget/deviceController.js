const TuyAPI = require("tuyapi");

const device = new TuyAPI({
  id: "01200703dc4f2201a8fd",
  key: "7162d26718223f79",
  persistentConnection: true
});

let deviceOn = true;
let stateHasChanged = false;

// Find device on network
device
  .find()
  .then(() => {
    // Connect to device
    device.connect();
  })
  .catch(device.connect());

// Add event listeners
device.on("connected", () => {
  console.log("Connected to device!");
});

device.on("disconnected", () => {
  console.log("Disconnected from device.");
});

device.on("error", (error) => {
  console.log("Error!", error);
});

device.on('data', data => {
    console.log('Data from device:', data);
   
    const status = data.dps['1'];
   
    console.log('Current status:', status);
  });


// Disconnect after 10 seconds
setTimeout(() => {
  device.disconnect();
}, 10000);

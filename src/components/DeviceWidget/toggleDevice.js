const axios = require('axios');

const toggleDevice = (command) => {
      axios.post(`http://ec2-3-101-81-119.us-west-1.compute.amazonaws.com/device?command=${command}`)
        .then((data) => console.log('Device on', data))
        .catch((err) => console.log(err));
    }

module.exports = toggleDevice;
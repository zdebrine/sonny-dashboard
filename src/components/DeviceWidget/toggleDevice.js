const axios = require('axios');

const toggleDevice = (command) => {
      axios.post(`/device?command=${command}`)
        .then((data) => console.log('Device on', data))
        .catch((err) => console.log(err));
    }

module.exports = toggleDevice;
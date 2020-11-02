const faker = require('faker');

// Create visits
const createVisit = (visitType) => {
    const name = "Zak";
    const place_id = "4385395b88eb3dc1206d000000000000";
    let event = ""
    if (visitType === 1) {
        event = "Location Event - Enter";
    } else {
        event = "Location Event - Exit";
    }
    let time = JSON.stringify(faker.date.between('2020-10-27', '2020-11-01'));

    return `${name},${place_id},${time},${event}\n`
}

// Create users
const createUser = () => {
    const name = "Zak";

    return `${name}\n`
}

module.exports = {
    createVisit,
    createUser
}
const fs = require('fs');
const { createVisit, createUser } = require('./faker_data.js');

//======================
//====== USER GEN ======
//======================

const generateUsers = (callback) => {
    const writeUserStream = fs.createWriteStream('UserData.csv');
    let i = 1;
    const write = () => {
        let status = true;
        while (i > 0 && status) {
            i--; 
            const newUser = createUser();
            if (i === 0) {
                writeUserStream.write(newUser, 'utf-8', () => { writeUserStream.end(); callback(); });
            } else {
                status = writeUserStream.write(newUser, 'utf-8');
            }
        }
        if (i > 0) {
            writeUserStream.once('drain', write);
        }
    }
    write();
};

//======================
//===== VISIT GEN ======
//======================

const generateVisits = (callback) => {
    const writeVisitStream = fs.createWriteStream('VisitData.csv');
    let i = 100;
    const write = () => {
        let status = true;
        let currentVisit = 1;
        let visitPerUserTotal = Math.random() * Math.floor(20);
        let vPerCount = 0;
        while (i > 0 && status) {
            i--;
            if (vPerCount === visitPerUserTotal) {
                if (currentVisit === 100 || currentVisit === 99) {
                    currentVisit = 1;
                } else {
                    currentVisit++;
                }
                visitPerUserTotal = Math.random() * Math.floor(20);
                vPerCount = 0;
            } else {
                vPerCount++;
            }
            const enterExit = Math.floor(Math.random() * Math.floor(3));
            const newVisit = createVisit(enterExit);
            if (i === 0) {
                writeVisitStream.write(newVisit, 'utf-8', () => { writeVisitStream.end(); callback(); });
            } else {
                status = writeVisitStream.write(newVisit, 'utf-8');
            }
        }
        if (i > 0) {
            writeVisitStream.once('drain', write);
        }
    }
    write();
};

module.exports = {
    generateUsers,
    generateVisits,
}
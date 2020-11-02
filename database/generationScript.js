const { generateUsers, generateVisits, } = require('./generate_data');

//==========================
//==== GENERATE 1 MIL ======
//==========================

const generateOneHunnedRecords = () => {
    console.time("Total Generation");
    generateUsers(() => {
        generateVisits(() => {
            console.timeEnd("Total Generation");
        });
    });
}

generateOneHunnedRecords();
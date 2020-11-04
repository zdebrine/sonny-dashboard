const converter = (dataArray) => {
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].name === 'ca6a5125eec6') {
            dataArray[i].room = 'Outside';
        } else if (dataArray[i].name === 'fe578a27e2b0') {
            dataArray[i].room = 'Office';
        }
        // convert temp from c to f
        dataArray[i].temp = (Math.floor(((dataArray[i].temp / 5) * 9) + 32)); 
    }
    return dataArray;
}

module.exports = converter;
//For Yi's data science dissertation, she needs a distribution graph containing billions of data points. Amazingly she has found an Array containing IQ's for every person on earth, and now you must sort it all.  All values are between 0 and 220, and the array is 7 Billion elements long;

function sortIQs(data) {
    //build a seperate array of the counts of each valid IQ found in the data set (max size: 220 integers);
    let iqCounts = [];

    for (let i = 0; i < data.length; i++) {
        if (!iqCounts[data[i]]) iqCounts[data[i]] = 1;
        else iqCounts[data[i]]++;
    }


    // rebuild the dataset by adding each index n times where n is the count of that IQ in the datasets
    data = [];

    for (let iq = 0; iq < iqCounts.length; iq++) {
        for (let count = 0; count < iqCounts[iq]; count++) {
            data.push(iq);
        }
    }
    return data;
}

function buildIQSet(amount) {
    let data = [];

    for (let i = 0; i < amount; i++) {
        data.push(Math.round(Math.random() * 220));
    }
    return data;
}

let IQSet = buildIQSet(1000);
console.log(sortIQs(IQSet))
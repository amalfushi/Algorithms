// Given a string of words (with spacees, tabs, and linefeeds) return an array of words.
// "Life is not a drill!" => ["Life", "is", "not", "a", "drill!"]


// doesn't grab '!'
function stringToWordArray(str) {
    return str.match(/(\w+)/g)
}

function strToArr(str) {
    let out = [];
    let newStr = "";

    for (let i = 0; i < str.length+1; i++) {
        if (str[i] == " " || i == str.length) out.push(newStr), newStr = "";
        else newStr += str[i];
    }
    return out;
}

console.log(stringToWordArray("Life is not a drill!"))
console.log(strToArr('Life is not a drill!'))

exports.strToArr = strToArr;
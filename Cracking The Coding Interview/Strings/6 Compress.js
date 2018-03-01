//Given a string, return a string that is the characters followed by the character counts IF it is shorter than the original string;

function CompressString(s) { //aabbbcccdd
    let chars = []; //builds an array that looks like this [a, 2, b, 3, c, 3, d, 2]
    for (let i = 0; i < s.length; i++){
        if (!chars.includes(s[i])) chars.push(s[i]), chars.push(1); // if the character array does not include the character, add it and a 1 for the count
        else chars[chars.indexOf(s[i])+1]++;                        // otherwise increase the count
    }
    if (chars.length > s.length) return s;                          //check to see if the resulting string would be longer
    return chars.reduce((a, b) => a + b, " ");
}

console.log(CompressString("abbbcccdd"))
console.log(CompressString("Barnaby Jones"))
console.log(CompressString("The quick fox jumped over the lazy dog"))
console.log(CompressString("tacocatacocatacocat"));
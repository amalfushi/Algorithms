function CompressString(s) { //aabbbcccdd
    let chars = []; //builds an array that looks like this [a, 2, b, 3, c, 3, d, 2]
    for (let i = 0; i < s.length; i++){
        if (!chars.includes(s[i])) chars.push(s[i]), chars.push(1);
        else chars[chars.indexOf(s[i])+1]++;
    }
    if (chars.length > s.length) return s;
    return chars.reduce((a, b) => {return a+b}, " ");
}

console.log(CompressString("aabbbcccdd"))
console.log(CompressString("Barnaby Jones"))
console.log(CompressString("The quick fox jumped over the lazy dog"))
console.log(CompressString("tacocatacocatacocat"));
// Given two strings, determine they are permutations of each other (eg: both have the same characters in different order).

function IsPermute(s1, s2) {
    // split each string into a sorted array of characters
    let a = s1.split('').sort(); 
    let b = s2.split('').sort();

    // early exit to see if the lengths are different
    if(a.length != b.length) return false; 

    // iterate through each character to see if they match.
    for (let i = 0; i < a.length; i++){
        if (a[i] != b[i]) return false;
    }
    
    return true; 
}


// one liner version
// function isPermute(s1, s2) {
//     return s1.split('').sort().toString() === s2.split('').sort().toString();
// }

console.log(isPermute("moon", "noom"))
console.log(isPermute("moon", "nooma"))
console.log(isPermute("moodafea n", "sdfa e"))
// Create strSubsets(str) such that it returns an array with every possible in-order character subset of str.
// The resultant array itself need not be in any specific order - it is the subset of letters in each string 
// that must be in the same order as they were in the original string.

// strSubsets("abc") = ["", "c", "b", "bc", "a", "ac", "ab", "abc"]

function strSubsets(str) {
    let out = [];
    let chars = str.split("");

    rPermute(str, "");
    return out;

    function rPermute(str, perm) {
        // console.log(str)
        if (str.length < 1){
            return out.push(perm);
        }
        rPermute(str.slice(1), perm + str[0]);
        rPermute(str.slice(1), perm);
    }
}

console.log(strSubsets("abc"));
console.log(strSubsets("dust"));
console.log(strSubsets("1234"));
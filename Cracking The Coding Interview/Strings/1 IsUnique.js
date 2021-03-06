//Given a string, determine whether a string contains only unique characters.

//probably O(n^2)
function IsUnique(s) {
    for (let i = 0; i < s.length; i++) {            // for each character in the string
        if (i != s.lastIndexOf(s[i])) return false; // check to see if the index of the character matches the last index of the character specified.
    }
    return true;
}


//O(n)
function IsUnique(s) {
    let letters = {}

    for (let i = 0; i < s.length; i++) {
        if (!letters[s[i]]) letters[s[i]] = 1;
        else return false;
    }

    return true;
}

console.log(IsUnique("abcdefghijklmnopqrstuvwxyz"));
console.log(IsUnique("abcdefghijk   lmnopqrstuvwxyz"));
console.log(IsUnique("Aa"));
console.log(IsUnique("Barnaby Jones"));
console.log(IsUnique("the quick brown fox jumped over the lazy dog."))
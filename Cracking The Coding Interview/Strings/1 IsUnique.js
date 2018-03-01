//Given a string, determine whether a string contains only unique characters.

function IsUnique(s) {
    for (let i = 0; i < s.length; i++) {            // for each character in the string
        if (i != s.lastIndexOf(s[i])) return false; // check to see if the index of the character matches the last index of the character specified.
    }
    return true;
}

console.log(IsUnique("abcdefghijklmnopqrstuvwxyz"));
console.log(IsUnique("abcdefghijk   lmnopqrstuvwxyz"));
console.log(IsUnique("Aa"));
console.log(IsUnique("Barnaby Jones"));
console.log(IsUnique("the quick brown fox jumped over the lazy dog."))
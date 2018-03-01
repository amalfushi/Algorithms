//Given a string, determin if one of it's permutations could be a palindrome ignoring spaces;

function IsPalindromePermutation(s) {
    s = s.toLowerCase();

    // store character counts in a dictionary
    let charCounts = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") continue; // ignore spaces
        else if (!charCounts[s[i]]) charCounts[s[i]] = 1;
        else charCounts[s[i]]++;
    }


    // for each character
    let odd = false;

    for (var c in charCounts) {
        if (charCounts[c] % 2 != 0) {   // check for odd character count
            if (odd) return false;      // if an odd count has already been found, return false (there can only be one);
            else odd = true;
        }
    }

    return true;
}

console.log(IsPalindromePermutation("  Taco Cat"))
console.log(IsPalindromePermutation("  Tact Coat"))
console.log(IsPalindromePermutation("  a a   b  n n  "))
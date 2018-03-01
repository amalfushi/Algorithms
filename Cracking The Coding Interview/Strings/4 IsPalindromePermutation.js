function IsPalindromePermutation(s) {
    s = s.toLowerCase();
    let charCounts = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") continue;
        else if (!charCounts[s[i]]) charCounts[s[i]] = 1;
        else charCounts[s[i]]++;
    }

    let odd = false;

    for (var c in charCounts) {
        if (charCounts[c] % 2 != 0) {
            if (odd) return false;
            else odd = true;
        }
    }

    return true;
}

console.log(IsPalindromePermutation("  Tact Coa"))
console.log(IsPalindromePermutation("  Tact Coat"))
console.log(IsPalindromePermutation("  aabnn  "))
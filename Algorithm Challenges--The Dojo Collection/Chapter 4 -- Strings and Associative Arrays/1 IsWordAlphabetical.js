// Given a string, determine if all of the vowels (book asks for letters) are in alphabetical order

function IsWordAlphabetical(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let seen = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i].toLowerCase();
        if (vowels.includes(c)) {
            // check to see that there are some vowels in seen and compare the value of c to the last vowel in seen
            if (seen.length > 0 && c < seen[seen.length - 1]) return false; 
            seen.push(s[i]);
        }
    }

    return true;
}


console.log(isWordAlphabetical("ace"))
console.log(isWordAlphabetical("facetiously"))
console.log(isWordAlphabetical("arseniously"))
console.log(isWordAlphabetical("pie"))
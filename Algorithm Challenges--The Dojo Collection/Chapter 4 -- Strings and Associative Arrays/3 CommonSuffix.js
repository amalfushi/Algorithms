// Given an array of words, return the longest suffix (word-end) common to all words
//      [deforestation, citation, conviction, incarceration] => tion


function CommonSuffix(words) {
    if (!words.length) return "";
    if (words.length < 2) return words[0];

    let out = []

    for (let i = 1; i < words[0].length; i++){
        let toAdd = true
        let c = words[0][words[0].length-i];                // set the character to the last character (minus i) in the first word 

        for (var word of words){                            // iterate through each word and check the corresponding character.
            if (word[word.length-i] != c) toAdd = false;    // push it to the output if it is seen in all words.
        }

        if (toAdd == false) break;
        out.push(c);
    }

    return out.reverse().join("");
}

console.log(CommonSuffix(['deforestation', 'citation', 'conviction', 'incarceration']));
console.log(CommonSuffix(['bannana', 'mana', 'aard']));
console.log(CommonSuffix(['aardvark']));
console.log(CommonSuffix([]));
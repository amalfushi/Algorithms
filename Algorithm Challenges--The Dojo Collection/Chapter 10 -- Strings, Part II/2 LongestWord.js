// Given a string of words, return the longest word in the string.
// "Snap crackle pop makes the world go round!" => "crackle"

function longestWord(str) {
    let temp = "";
    let longest = "";

    for (let i = 0; i < str.length+1; i++) {
        if (str[i] == " " || i == str.length) {
            if (temp.length > longest.length) longest = temp;
            temp = "";
        } 
        else temp += str[i];
    }

    return longest;
}


//one liner
lw = (str) => str.match(/(\w+)/g).reduce((a, b) => a.length > b.length ? a : b);



let string = "Snap crackle pop makes the world go round!";
console.log(longestWord(string))
console.log(lw(string))
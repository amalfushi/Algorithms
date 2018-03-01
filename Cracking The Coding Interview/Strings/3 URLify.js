// Given a string, replace any amount of spaces with a %20

function URLify(s) {
    s = s.trim().replace(/\s\s+/g, ' '); // Remove spaces on the leading and trailing edges, Then replace any mutliple spaces with a single.
    s = s.replace(/([/ ])/g, "%20");; // Replace all remaining spaces with %20
    return s;
}

// One liner
// function URLify(s) {    // this could probably be condensed into one replace
//     return s.trim().replace(/\s\s+/g, ' ').replace(/[/ ]/g, '%20');
// }

console.log(URLify("Moana the Noanna     "))
console.log(URLify("      Moana   the     Noanna     "))
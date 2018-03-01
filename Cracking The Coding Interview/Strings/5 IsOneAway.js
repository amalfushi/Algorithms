// Given a two strings, Determin if there is only a single difference between the two where a difference can be: 
//      removing a letter, adding a letter, or replacing a single letter with another.


function IsOneAway(first, second) {

    //length check
    if (Math.abs(first.length - second.length) > 1) return false;

    // determine longer/shorter string
    let s1 = first.length < second.length ? first : second;
    let s2 = first.length < second.length ? second : first;

    let p1 = 0;
    let p2 = 0;
    let diff = false;

    while (p2 < s2.length && p1 < s1.length) {
        if (s1[p1] != s2[p2]) {
            if (diff) return false; //ensure that the first difference is found
            diff = true;

            if (s1.length == s2.length) p1++;
        } else {
            p1++; //if matching move shorter pointer
        }
        p2++; //always move longer pointer
    }
    return true;
}

console.log(IsOneAway("pass", "past"))
console.log(IsOneAway("pass", "pas"))
console.log(IsOneAway("past", "pasta"))
console.log(IsOneAway("pass", "pastasdfase"))
console.log(IsOneAway("pass", "pass"))
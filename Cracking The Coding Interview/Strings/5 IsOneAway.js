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

    // //check for some early exit cases
    // if (first == second) return false;
    // if (Math.abs(first.lenth - second.length) > 1) return false;

    // //determine longest string
    // if (first.length >= second.length) {
    //     var short = second, long = first;
    // } else {
    //     var short = first, long = second;
    // }

    // //generate a dictionary with the counts for each character in each string
    // let chars = {};
    // for (let i = 0; i < long.length; i++){
    //     if (!chars[long[i]]) chars[long[i]] = [1, 0];
    //     else chars[long[i]][0]++;

    //     if (short[i]) {
    //         if (!chars[short[i]]) chars[short[i]] = [0, 1];
    //         else chars[short[i]][1]++;
    //     }
    // }

    // let count = 0;
    // for (var c in chars) {
    //     if (chars[c][0] != chars[c][1]) count += Math.abs(chars[c][0] - chars[c][1]);
    // }

    // if (count > 2) return false;
    // return true;
}

console.log(IsOneAway("pass", "past"))
console.log(IsOneAway("pass", "pas"))
console.log(IsOneAway("past", "pasta"))
console.log(IsOneAway("pass", "pastasdfase"))
console.log(IsOneAway("pass", "pass"))
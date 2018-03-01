function IsUnique(s){
    // let chars = s.split('');
    // let seen = [];

    // while(chars.length){
    //     if(seen.includes(chars[chars.length-1])) return false;
    //     else seen.push(chars.pop());
    // }
    // return true;

    for (let i = 0; i < s.length; i++){
        if (i != s.lastIndexOf(s[i])) return false;
    }
    return true;
}

console.log(IsUnique("abcdefghijklmnopqrstuvwxyz"));
console.log(IsUnique("abcdefghijk   lmnopqrstuvwxyz"));
console.log(IsUnique("Aa"));
console.log(IsUnique("Barnaby Jones"));
console.log(IsUnique("the quick brown fox jumped over the lazy dog."))
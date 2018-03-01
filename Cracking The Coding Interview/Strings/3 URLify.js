function URLify(s) {
    s = s.trim().replace(/\s\s+/g, ' ');
    s = s.replace(/([/ ])/g, "%20");;
    return s;
}

console.log(URLify("Moana the Noanna     "))
console.log(URLify("      Moana   the     Noanna     "))
function isPermute(s1, s2) {
    let a = s1.split('');
    let b = s2.split('');
    a.sort();
    b.sort();

    if(a.length != b.length) return false;
    for (let i = 0; i < a.length; i++){
        if (a[i] != b[i]) return false;
    }
    
    return true;
}

console.log(isPermute("moon", "noom"))
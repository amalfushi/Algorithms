// The Tarai (Japanese: 'to pass around') function was created to profile recursive performance in various systems and languages.  Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant.
// The tarai function accepts thre paramters and is defined as
//      1) tarai(x, y, z) == y, if x <= y
//      2) tarai(x, y, z) == tarai(tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1, x, y))
// Calling tarai(10, 2, 9) should return 9 after recursing 4145 times;


function Tarai(x, y, z) {
    // console.log(x, y, z);
    if (x <= y) return y;
    return Tarai(Tarai(x-1, y, z), Tarai(y-1, z, x), Tarai(z-1, x, y))
}


console.log(Tarai(10, 2, 9));

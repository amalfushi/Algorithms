const link = require("./_DLL.js");

// Given a new value and an existing value, insert the new value before existing value

// class version
// ==================================================
link.DLL.prototype.kthToLast = function (k) {
    if (!this.tail) return null;
    let cur = this.tail;
    let i = 1;

    while (cur && i < k) {
        cur = cur.prev;
        i++;
    }
    return cur;
}
// ==================================================



let list1 = new link.DLL();
list1.push(9).push(8).push(7).push(6).push(5).push(4).push(3).push(2).push(1).push(0);
console.log(list1.kthToLast(1).toString())
console.log(list1.kthToLast(2).toString())
console.log(list1.kthToLast(5).toString())
console.log(list1.kthToLast(12))
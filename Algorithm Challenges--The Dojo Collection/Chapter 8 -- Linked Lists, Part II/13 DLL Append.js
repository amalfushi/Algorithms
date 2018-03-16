const link = require("./_DLL.js");

// Given a new value and an existing value, insert the new value after existing value

// class version
// ==================================================
link.DLL.prototype.append = function (val, after) {
    let cur = this.head;
    
    while (cur) {
        if (cur.value == after) {
            let nn = new link.DLNode(val);
            nn.prev = cur;
            if (!cur.next) this.tail = nn, cur.next = nn;
            else nn.next = cur.next, cur.next.prev = nn, cur.next = nn;
            break;
        }
        cur = cur.next;
    }
    return this;
}
// ==================================================



let list1 = new link.DLL();
list1.push(9).push(8).push(7).push(6).push(5);
console.log(list1.append("excelcior", 6).toString())
console.log(list1.append("monkey", 9).toString())
const link = require("./_DLL.js");

// Given a new value and an existing value, insert the new value before existing value

// class version
// ==================================================
link.DLL.prototype.prepend = function (val, before) {
    let cur = this.head;
    
    while (cur) {
        if (cur.value == before) {
            let nn = new link.DLNode(val);
            nn.next = cur;
            if (!cur.prev) this.head = nn;
            else cur.prev.next = nn;
            break;
        }
        cur = cur.next;
    }
    return this;
}
// ==================================================



let list1 = new link.DLL();
list1.push(9).push(8).push(7).push(6).push(5);
console.log(list1.prepend("excelcior", 5).toString())
console.log(list1.prepend("monkey", 8).toString())
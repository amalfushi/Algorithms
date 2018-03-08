const link = require("./_SLL.js");


// remove any nodes containing negative values;

// class version
// ==================================================
link.SLL.prototype.removeNegatives = function () {

    if (this.head == null) return this;

    let cur = this.head;
    let prev = cur;

    while(cur != null) {
        if (cur.value < 0) {
            if (cur.next != null) {
                cur.value = cur.next.value;
                cur.next = cur.next.next;
                continue;
            } else {
                prev.next = null;
                return this;
            }
        }
        if (prev != cur) prev = cur;
        cur = cur.next;
    }

    return this;
}
// ==================================================

let list1 = new link.SLL();
list1.add(9999).add(9299).add(-999).add(-9999).add(9999).add(-89999);

console.log(list1.removeNegatives().toString());
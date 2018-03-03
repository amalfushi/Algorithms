const link = require("./_SLL.js");

link.SLL.prototype.contains = function(c) {
    let cur = this.head
    if (cur == null) return false;

    while (cur != null) {
        if (cur.value === c) return true;
        cur = cur.next;
    }
    return false;
}

let list = new link.SLL();
list.add(9).add(8).add(7).add(6).add(5);

console.log(list.contains(8));
console.log(list.contains("gandalf"));
console.log(list.contains(5));
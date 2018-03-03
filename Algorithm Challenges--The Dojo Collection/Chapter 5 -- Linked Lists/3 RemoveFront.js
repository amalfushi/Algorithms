const link = require("./_SLL.js");


//remove the node in the front of the list;
link.SLL.prototype.removeFront = function (c) {
    if (this.head == null) return this;
    if (this.head.next == null) this.head = null, this.tail = null;
    else {
        let temp = this.head;
        this.head = temp.next;
        temp = null; // to be sure that there isn't an extra node floating around
    }
    return this;
}

let list = new link.SLL();
list.add(9).add(8).add(7).add(6).add(5);

console.log(list.removeFront().removeFront().toString());
console.log(list.removeFront().removeFront().removeFront());
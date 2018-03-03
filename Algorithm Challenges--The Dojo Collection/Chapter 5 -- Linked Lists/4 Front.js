const link = require("./_SLL.js");


//return the value at the head of the list
link.SLL.prototype.front = function (c) {
    if (this.head == null) return null;
    return this.head.value;
}

let list = new link.SLL();

console.log(list.front());
list.add(9).add(8).add(7).add(6).add(5);
console.log(list.front());
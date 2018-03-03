const link = require("./_SLL.js")

link.SLL.prototype.addToFront = function(val) {
    let newNode = new link.Node(val);
    if (this.head == null) this.head = newNode;
    else {
        newNode.next = this.head;
        this.head = newNode;
    }
    return this;
}

let list = new link.SLL();
list.addToFront(9).addToFront(8).addToFront(['a', 'b', 'c']).addToFront({'Horses': ['Carlie', 'Ray', 'Jepson']}).addToFront(5)

console.log(list.toString());
const link = require("./_SLQueue");

link.SLQueue.prototype.enqueue = function (val) {
    const temp = new link.Node(val);

    if (!this.tail) this.head = temp; // check for empty queue;
    else this.tail.next = temp;
    this.tail = temp;

    return this;
}

let queue = new link.SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)

console.log(queue.toString());
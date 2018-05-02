const link = require("./_SLQueue");

link.SLQueue.prototype.dequeue = function () {
    const temp = this.head;

    this.head = this.head.next;
    if (this.tail == temp) this.tail = null; // check to see if queue is now empty;
    temp.next = null;

    return temp;
}

let queue = new link.SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)

console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.toString());
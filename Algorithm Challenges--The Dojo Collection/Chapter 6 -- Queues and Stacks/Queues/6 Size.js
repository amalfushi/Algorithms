const link = require("./_SLQueue");

link.SLQueue.prototype.size = function () {
    let count = 0;
    let current = this.head;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

let queue = new link.SLQueue();
console.log(queue.size());

queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)
console.log(queue.size());

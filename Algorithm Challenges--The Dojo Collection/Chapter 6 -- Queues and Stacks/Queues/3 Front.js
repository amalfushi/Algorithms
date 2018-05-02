const link = require("./_SLQueue");

link.SLQueue.prototype.front = function () {
    return this.head.value;
}

let queue = new link.SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)

console.log(queue.front());

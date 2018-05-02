const link = require("./_SLQueue");

link.SLQueue.prototype.isEmpty = function () {
    return this.head === null;
}

let queue = new link.SLQueue();
console.log(queue.isEmpty());

queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)
console.log(queue.isEmpty());

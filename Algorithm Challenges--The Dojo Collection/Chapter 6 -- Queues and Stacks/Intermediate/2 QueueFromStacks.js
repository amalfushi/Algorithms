const link = require("../Stacks/_SLStack")

// Using only stack objects for the underlying data storage, recreate a Queue class;

class StackQueue {
    constructor() {
        this.queue = new link.SLStack();
        this.holding = new link.SLStack();
    }
    toString() {
        return this.queue.toString();
    }

    enqueue(val) {
        while (this.queue.top) this.holding.push(this.queue.pop());
        this.queue.push(val);
        while (this.holding.top) this.queue.push(this.holding.pop())
        return this;
    }

    dequeue() {
        return this.queue.pop();
    }

    isEmpty() {
        return this.queue.isEmpty();
    }
}

let sq = new StackQueue();
sq.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
console.log(sq.toString())

sq.dequeue();
console.log(sq.toString())
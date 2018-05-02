const link = require("./_SLQueue");
// Create a function to remove an SLQueue's lowest value, otherwise leaveing values in the same sequence.  Only use local variables; allocate no other objecs. Remove all duplicates of this value;
// Bonus: only remove the last minimum value (7,2,5,2,4) => (7,2,5,4)

link.SLQueue.prototype.removeMinimum = function () {
    if (this.head) {
        let current = this.head;
        let previous = null;

        let minimum = current;
        let minPrev = null;

        while (current) {
            if (current.value <= minimum.value) {
                minimum = current;
                minPrev = previous;
            }
            previous = current;
            current = current.next;
        }

        if (minimum === this.tail) this.tail = minPrev; // will be null if there is only one item in the queue
        if (minimum === this.head) this.head = minimum.next;
        else minPrev.next = minimum.next;
    }
    return this;
}

let queue = new link.SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(1)
console.log(queue.toString(), "\n", queue)
console.log(queue.removeMinimum().toString(), "\n", queue);
console.log(queue.removeMinimum().toString(), "\n", queue);
console.log(queue.removeMinimum().removeMinimum().removeMinimum().removeMinimum().toString(), "\n", queue);
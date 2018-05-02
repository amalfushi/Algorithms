const link = require("./_SLQueue");

// Reorder SLQueue values to alternate the first half values with the second half values, in order. You may create an additional SLQueue, if needed
// ex: (1, 2, 3, 4, 5) => (1, 4, 2, 5, 3)


link.SLQueue.prototype.interleave = function () {
    if (this.head) {
        let middle = Math.ceil(this.size() / 2);

        // traverse to middle of queue
        let mid = this.head;
        while (middle > 1) mid = mid.next, middle--;

        // create a pointer to the portion that needs to be distributed and sever the connection to the second half
        let toInterleave = mid.next;
        mid.next = null;

        // iterate through front half of the queue while inserting nodes from the second half;
        let current = this.head;
        while (toInterleave) {
            let currentChild = current.next;
            let interleaveChild = toInterleave.next;

            current.next = toInterleave;
            toInterleave.next = currentChild;
            toInterleave = interleaveChild;

            current = current.next.next;
        }
    }

    return this;
}

let queue = new link.SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6).enqueue(7).enqueue(8).enqueue(9).enqueue(10);

console.log(queue.interleave().toString());

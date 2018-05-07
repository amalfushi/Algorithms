class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
    toString() {
        return this.value.toString();
    }
}


class SLQueue {
    constructor() {
        this.head = null; // front of the queue;
        this.tail = null; // end of the queue;
    }

    toString() {
        let output = [];
        let current = this.head;
        
        while (current) output.push(current.value), current = current.next;
        return "Tail: " + output.reverse().join(" <- ") + " :Head";
    }

    enqueue(val) {
        const temp = new Node(val);

        if (!this.tail) this.head = temp; // check for empty queue;
        else this.tail.next = temp;
        this.tail = temp;

        return this;
    }

    dequeue() {
        const temp = this.head;

        this.head = this.head.next;
        if (this.tail == temp) this.tail = null; // check to see if queue is now empty;
        temp.next = null;

        return temp;
    }

    front() {
        return this.head.value;
    }

    contains(val) {
        if (this.head) { 
            let current = this.head;
            while (current) {
                if (current.value === val) return true;
                current = current.next;
            }
        }
        return false;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    removeMinimum() {
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

            if (minimum === this.tail) this.tail = minPrev;
            if (minimum === this.head) this.head = minimum.next;
            else minPrev.next = minimum.next;
        }
        return this;
    }

    interleave() {
        if (this.head) {
            let middle = Math.ceil(this.size() / 2);

            let mid = this.head;
            while(middle > 1) mid = mid.next, middle--;
            
            let toInterleave = mid.next;
            mid.next = null;

            let current = this.head;
            while(toInterleave) {
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
}

exports.SLQueue = SLQueue;
exports.Node = Node;
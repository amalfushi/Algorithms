const link = require("./_SLQueue")

function compareQueues(first, second) {
    if (first instanceof link.SLQueue && second instanceof link.SLQueue) {
        let firstPointer = first.head;
        let secondPointer = second.head;

        while (firstPointer || secondPointer) {
            if (!firstPointer || !secondPointer || firstPointer.value !== secondPointer.value) return false;
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }
        return true;
    }
    else return Error("One of the compared objects is not a SLQueue");
}

let queue1 = new link.SLQueue();
queue1.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)

let queue2 = new link.SLQueue();
queue2.enqueue(1).enqueue(2).enqueue(3).enqueue(4)
console.log(compareQueues(queue1, queue2));

queue2.enqueue(5);
console.log(compareQueues(queue1, queue2));

let queue3 = "definitely not a queue"
console.log(compareQueues(queue1, queue3));
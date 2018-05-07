const SLS = require("../Stacks/_SLStack")
const SLQ = require("../Queues/_SLQueue")

// Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack. 

function queueIsPalindrome(queue) {
    if (queue.head && queue.head.next) {
        let mid = queue.head;
        let runner = queue.head;

        // A stack to hold the the values of the second half of the queue.  If the queue is a palindrome, the values removed from the stack will match the values from the front of the queue in order.
        let stack = new SLS.SLStack();

        // Traverse to the middle of the queue.
        while (runner && runner.next) {
            mid = mid.next;
            runner = runner.next.next;
        }

        // Push second half of the queue to the stack
        while (mid) {
            stack.push(mid.value);
            mid = mid.next;
        }

        // Compare the top value of the stack to the values of the queue from the front;
        runner = queue.head;
        while (stack.top) {
            if (runner.value !== stack.pop().value) return false;
            runner = runner.next;
        }
    }
    return true;
}

let queue1 = new SLQ.SLQueue();
console.log(queue1.toString(), queueIsPalindrome(queue1))

queue1.enqueue(1)
console.log(queue1.toString(), queueIsPalindrome(queue1))

queue1.enqueue(2);
console.log(queue1.toString(), queueIsPalindrome(queue1))

queue1.enqueue(3).enqueue(2).enqueue(1);
console.log(queue1.toString(), queueIsPalindrome(queue1))

queue1.dequeue()
queue1.dequeue()
queue1.dequeue()
queue1.enqueue(2).enqueue(1);
console.log(queue1.toString(), queueIsPalindrome(queue1))
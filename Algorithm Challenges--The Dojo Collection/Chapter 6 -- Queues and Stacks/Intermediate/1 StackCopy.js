const SLS = require("../Stacks/_SLStack")
const SLQ = require("../Queues/_SLQueue")

// Given a Stack, create a new second Stack and copy values from the first Stack into the Second Stack, so that they pop in the same order.  Use only one Queue for additional storage, and only public Stack/Queue interfaces.

function copyStack(stack) {
    let output = new SLS.SLStack();
    let queue = new SLQ.SLQueue();

    let current = stack.top;

    // Add values to a output stack (in reverse order)
    while (current) {
        output.push(current.value);
        current = current.next;
    }

    // Add output values to a queue.
    while (output.top) queue.enqueue(output.pop().value);

    // Put them back into the output stack, now in the same order as the original stack
    while (queue.head) output.push(queue.dequeue().value);

    return output;
}

let stack1 = new SLS.SLStack;
stack1.push(1).push(2).push(3).push(4).push(5);

let stack2 = copyStack(stack1);

console.log(stack1.toString())
console.log(stack2.toString())
const link = require("./_SLStack")

function compareStacks(first, second) {
    if (first instanceof link.SLStack && second instanceof link.SLStack) {
        let firstPointer = first.top;
        let secondPointer = second.top;

        while (firstPointer && secondPointer) {
            if (firstPointer.value !== secondPointer.value) return false;
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }
        return firstPointer === secondPointer;
    }
    else return Error("One of the compared objects is not a SLStack");
}

let stack1 = new link.SLStack;
stack1.push(1).push(2).push(3).push(4).push(5);

let stack2 = new link.SLStack;
stack2.push(1).push(2).push(3).push(4);
console.log(compareStacks(stack1, stack2));

stack2.push(5);
console.log(compareStacks(stack1, stack2));

let stack3 = "definitely not a stack"
console.log(compareStacks(stack1, stack3));
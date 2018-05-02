const link = require("./_SLStack")

link.SLStack.prototype.size = function () {
    let count = 0;
    let current = this.top;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

let stack = new link.SLStack;
console.log(stack.size());
stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.size());
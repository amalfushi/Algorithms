const link = require("./_SLStack")

link.SLStack.prototype.isEmpty = function () {
    return this.top === null;
}

let stack = new link.SLStack;
console.log(stack.isEmpty());
stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.isEmpty());
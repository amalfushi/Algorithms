const link = require("./_SLStack")


// I called this peek because some naming issues with the this.top
link.SLStack.prototype.peek = function () {
    return this.top.value;
}

let stack = new link.SLStack;

stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.peek());
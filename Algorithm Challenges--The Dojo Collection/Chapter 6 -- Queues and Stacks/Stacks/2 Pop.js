const link = require("./_SLStack")

link.SLStack.prototype.pop = function () {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp;
}

let stack = new link.SLStack;

stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.pop());
console.log(stack.toString())
const link = require("./_SLStack")

link.SLStack.prototype.push = function(val) {
    let temp = new link.Node(val);
    temp.next = this.top;
    this.top = temp;
    return this;
}

let stack = new link.SLStack;

stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.toString());
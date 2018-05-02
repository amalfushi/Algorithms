const link = require("./_SLStack")

link.SLStack.prototype.contains = function (val) {
    let current = this.top;
    while (current) {
        if (current.value === val) return true;
        current = current.next;
    }
    return false;
}

let stack = new link.SLStack;

stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.contains(4), stack.contains("apple"));
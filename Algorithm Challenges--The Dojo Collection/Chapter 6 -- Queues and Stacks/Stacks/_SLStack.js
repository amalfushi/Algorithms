class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
    toString() {
        return this.value.toString();
    }
}

class SLStack {
    constructor() {
        this.top = null;
    }

    toString() {
        let output = [];
        let current = this.top;
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        return output.join(", ");
    }

    push(val) {
        let temp = new Node(val);
        temp.next = this.top;
        this.top = temp;
        return this;
    }

    pop() {
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp;
    }

    peek() {
        return this.top.value;
    }

    contains(val) {
        let current = this.top;
        while (current) {
            if (current.value === val) return true;
            current = current.next;
        }
        return false;
    }

    isEmpty() {
        return this.top === null;
    }

    size() {
        let count = 0;
        let current = this.top;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

exports.SLStack = SLStack;
exports.Node = Node;
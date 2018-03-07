class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
    toString() {
        return this.value.toString();
    }
}


class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //returns a string: '[1, a, b, [ajioewpw], {guitar: 3, taco, 4}]
    toString() {
        if (this.head == null) return "[]";
        let cur = this.head;
        let out = ['[']
        while (cur != null) {
            out.push(cur.toString(), ", "); //to allow for more complex objects in the value
            cur = cur.next;
        }
        out.pop();
        out.push(']');
        return out.join("");
    }

    // add(val) { // without tail
    //     let nn = new Node(val);
    //     if (this.head == null)  this.head = nn;
    //     else {
    //         let cur = this.head;
    //         while(cur.next != null) cur = cur.next;
    //         cur.next = nn;
    //     }
    //     this.tail = cur;
    //     return this;
    // }

    add(val) { // with tail
        let nn = new Node(val);
        if (this.tail == null) this.head = nn, this.tail = this.head; // no nodes
        else if (this.tail == this.head) this.head.next = nn, this.tail = nn; // only one node
        else this.tail.next = nn, this.tail = nn; // more than one node
        return this;
    }

    length() {
        let runner = this.head;
        let length = 0;

        while(runner) {
            runner = runner.next;
            length++;
        }
        
        return length;
    }
}

exports.Node = Node;
exports.SLL = SLL;
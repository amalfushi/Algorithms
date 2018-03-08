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
        this.length = 0;
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

    add(val) {          // with tail
        let nn = new Node(val);
        if (this.tail == null) this.head = nn, this.tail = this.head; // no nodes
        else if (this.tail == this.head) this.head.next = nn, this.tail = nn; // only one node
        else this.tail.next = nn, this.tail = nn; // more than one node
        this.length++;
        return this;
    }

    addNode(node) {
        if (this.tail == null) this.head = node, this.tail = this.head;
        else if (this.tail == this.head) this.head.next = node, this.tail = node;
        else this.tail.next = node, this.tail = node;
        this.length++;
        return this;
    }

    length() {
        return this.length;
        // ========= without the length property ==============
        // let runner = this.head;
        // let length = 0;

        // while (runner) {
        //     runner = runner.next;
        //     length++;
        // }

        // return length;
    }

    concat(list) {       //this does leave some pointers for the second list floating around
        if (this.head == null) {
            this.head = list.head;
            this.tail = list.tail;
        } else {
            this.tail.next = list.head;
            this.tail = list.tail;
            this.length += list.length;
        }
        return this;
    }

    remove(val) { // removes 1
        if (this.head == null) return this;

        if (this.head.value == val) {
            if (this.head.next != null) {
                let temp = this.head.next;
                this.head.next = null;
                this.head = temp;
            } else {
                this.head = null;
            }
            return this;
        }

        let cur = this.head;
        while (cur != null) {
            if (cur.next != null && cur.next.value == val) {
                if (cur.next.next != null) cur.next = cur.next.next;
                else cur.next = null, this.tail = cur;
                return this;
            }
            cur = cur.next;
        }

        length--;
        return this;
    }
}

exports.Node = Node;
exports.SLL = SLL;
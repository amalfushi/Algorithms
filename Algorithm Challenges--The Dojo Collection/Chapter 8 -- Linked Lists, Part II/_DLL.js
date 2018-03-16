class DLNode {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }

    toString() {
        return this.value.toString();
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let nn = new DLNode(val);
        if (!this.head) {
            this.head = nn;
            this.tail = nn;
        } else {
            nn.next = this.head;
            this.head.prev = nn;
            this.head = nn;
        }
        return this;
    }

    pop() {
        let out = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return out;
    }

    front() {
        return this.head;
    }

    back() {
        return this.tail
    }

    size() {
        let count = 0;
        let cur = this.head;
        while (cur != this.tail) {
            count++;
            cur = cur.next;
        }
        return this.tail;
    }

    toString() {
        if (!this.head) return "{}";
        let cur = this.head
        let out = ["{"];
        while (cur) {
            out.push(cur.toString(), ", ");
            cur = cur.next;
        }
        out.pop();
        out.push("}")
        return out.join("");
    }
}

exports.DLL = DLL;
exports.DLNode = DLNode;
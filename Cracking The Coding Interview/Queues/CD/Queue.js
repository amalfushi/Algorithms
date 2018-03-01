function SLNode(val) {
    this.value = val;
    this.next = null;
}

function SLQueue() {
    var head = null;
    var tail = null;
}

SLQueue.prototype.Enqueue = function (val) {
    if (!this.head) this.head = new SLNode(val);
    else {
        let cur = this.head;
        while (cur.next) cur = cur.next;
        cur.next = new SLNode(val);
        this.tail = cur.next;
        return this;
    }
}

SLQueue.prototype.Dequeu = function () {
    let temp = this.head;
    if (temp.next) this.head = temp.next;
    else this.head = null;
    temp.next = null;
    return temp.value;
}

var Q1 = new SLQueue();
Q1.Enqueue(1);
Q1.Enqueue(2);
Q1.Enqueue(3);
Q1.Enqueue(4);
Q1.Enqueue(5);
// Q1.Dequeu();

console.log(Q1.Dequeu())
console.log(Q1)
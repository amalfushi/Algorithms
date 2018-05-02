const link = require("./_SLQueue");

link.SLQueue.prototype.contains = function (val) {
    if (this.head) {
        let current = this.head;
        while (current) {
            if (current.value === val) return true;
            current = current.next;
        }
    }
    return false;
}

let queue = new link.SLQueue();
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5)

console.log(queue.contains(4), queue.contains("excelcior"));

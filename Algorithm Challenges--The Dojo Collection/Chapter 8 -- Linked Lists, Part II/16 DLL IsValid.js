const link = require("./_DLL.js");

// determine whether given list is valid: whether next and prev pointers match

// class version
// ==================================================
link.DLL.prototype.isValid = function () {
    if (this.head.prev || this.tail.next) return false;
    let slow = this.head;
    let fast = slow;

    while (fast && fast.next){
        if (slow.next != slow.next.next.prev) return false;
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return false;
        }
    }

    return true;
}
// ==================================================



let list1 = new link.DLL();
list1.push(9).push(8).push(7).push(6).push(5).push(4).push(3).push(2).push(1).push(0);
console.log(list1.toString());
console.log(list1.isValid());

list1.head.prev = list1.head.next.next.next;
console.log(list1.isValid());

list1.head.prev = null;
list1.tail.next = list1.head.next.next.next.next;
console.log(list1.isValid());

list1.tail.next = null;
list1.head.next.next.next.prev = null;
console.log(list1.isValid())
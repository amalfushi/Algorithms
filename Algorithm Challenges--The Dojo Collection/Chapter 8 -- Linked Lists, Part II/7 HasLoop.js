const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// Given a SLL, check to see if the list contains a loop and return a boolean value


// stand alone version
// ==================================================
function SllHasLoop(list) {
    if (list.head && list.head.next) {
        let slow;
        let fast = list.head;

        // advance the two pointers until the meet up or the fast one gets to the end;
        while (fast && fast.next) {
            if (slow == fast) return true;
            if (!slow) slow = list.head;
            fast = fast.next.next;
            slow = slow.next;
        }
    }
    return false;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.hasLoop = function () {
    if (this.head && this.head.next) {
        let slow = this.head;
        let fast = this.head;
        
        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) return true;
        }
    }
    return false;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);
console.log(SllHasLoop(list1), list1.hasLoop())

list1.tail.next = list1.head.next.next.next;
console.log(SllHasLoop(list1), list1.hasLoop())

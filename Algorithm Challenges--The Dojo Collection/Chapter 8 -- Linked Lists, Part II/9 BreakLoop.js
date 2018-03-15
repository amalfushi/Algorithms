const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// Given a SLL, check to see if the list contains a loop and return the node or 'null' if it does not


// stand alone version
// ==================================================
function SllBreakLoop(list) {
    if (list.head && list.head.next) {
        let slow = list.head.next;
        let fast = list.head.next.next;

        while (fast && fast.next) {
            if (slow == fast) break;
            fast = fast.next.next;
            slow = slow.next;
        }

        if (fast == slow) {
            slow = list.head;
            while(slow.next != fast.next){
                slow = slow.next;
                fast = fast.next;
            }
            // terminate the list since they're at the last node;
            fast.next = null;
            list.tail = fast;
        }


    }
    return list;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.breakLoop = function () {
    if (this.head && this.head.next) {
        let slow = this.head.next;
        let fast = this.head.next.next;

        while (fast && fast.next) {
            if (fast == slow) break;
            fast = fast.next.next;
            slow = slow.next;
        }

        if (fast == slow) {
            slow = this.head;
            while(slow.next != fast.next) {
                slow = slow.next;
                fast= fast.next;
            }
            fast.next = null;
            this.tail = fast;
        }
    }
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);
console.log(SllBreakLoop(list1).toString(), list1.breakLoop().toString())

list1.tail.next = list1.head.next.next.next;
console.log(SllBreakLoop(list1).toString())

list1.tail.next = list1.head.next.next.next;
console.log(list1.breakLoop().toString())

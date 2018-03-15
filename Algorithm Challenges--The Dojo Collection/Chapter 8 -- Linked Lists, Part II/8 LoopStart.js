const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// Given a SLL, check to see if the list contains a loop and return the node where the loop starts or 'null' if it does not


// stand alone version
// ==================================================
function SllLoopStart(list) {
    if (list.head && list.head.next) {
        let slow = list.head.next;
        let fast = list.head.next.next;

        // advance the pointers until the meet or the fast one gets to the end;
        while (fast && fast.next) {
            if (slow == fast) break;
            fast = fast.next.next;
            slow = slow.next;
        }

        // if they've met, reset the slow pointer to the head and continue until the two meet again but advance the fast pointer at the same pace.  they will be at the last node of the loop;
        if (fast == slow) {
            slow = list.head;
            while(slow.next != fast.next){
                slow = slow.next;
                fast = fast.next;
            }
            return fast.next;
        }
    }
    return null;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.loopStart = function () {
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
            return fast.next;
        }
    }
    return null;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);
console.log(SllLoopStart(list1), list1.loopStart());

list1.tail.next = list1.head.next.next.next;
console.log(SllLoopStart(list1).toString(), list1.loopStart().toString())

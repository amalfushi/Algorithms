const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// given a linked list with or without a loop, return the total number of nodes;


// stand alone version
// ==================================================
function SllNumberOfNodes(list) {
    let count = 0;
    if (list.head) {
        count++;
        if (list.head.next) {
            count++;
            let slow = list.head.next;
            let fast = list.head.next.next;

            // count until you get to the end or the pointers meet up;
            while (fast && fast.next) {
                if (slow == fast) break;
                fast = fast.next.next;
                slow = slow.next;
                count++;
            }

            // if they've met, reset the slow pointer and continue counting;
            if (fast == slow) {
                slow = list.head;
                while (slow.next != fast.next) {
                    count++;
                    slow = slow.next;
                    fast = fast.next;
                }
            } else {
                // otherwise subtract one and continue counting till the end;
                count--;
                while (slow) {
                    count++;
                    slow = slow.next;
                }
            }
        }
    }
    return count;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.numberOfNodes = function () {
    let count = 0;
    if (this.head) {
        count++;
        if (this.head.next) {
            count++;
            let slow = this.head.next;
            let fast = this.head.next.next;


            while (fast && fast.next) {
                if (slow == fast) break;
                fast = fast.next.next;
                slow = slow.next;
                count++;
            }

            if (fast == slow) {
                slow = this.head;
                while (slow.next != fast.next) {
                    count++;
                    slow = slow.next;
                    fast = fast.next;
                }
            } else {
                count--;
                while (slow) {
                    count++;
                    slow = slow.next;
                }
            }
        }
    }
    return count;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1);
console.log(SllNumberOfNodes(list1), list1.numberOfNodes());

list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1)
list1.tail.next = list1.head.next.next.next;

console.log(SllNumberOfNodes(list1), list1.numberOfNodes());

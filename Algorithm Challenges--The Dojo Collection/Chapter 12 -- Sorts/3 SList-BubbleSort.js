const SList = require("../Chapter 5 -- Linked Lists/_SLL.js");
const SLL = SList.SLL;
const Node = SList.Node;

// Create a function that uses BubbleSort to sort a linked list.  The list nodes contain .val, .next and other attributes should not be referenced.

SLL.prototype.bubbleSort = function () {
    let prev = null;
    let left = this.head;

    if (left) {
        let right = left.next;
        let sorted = false;

        while (!sorted) { // until you can iterate through the entire list
            sorted = true;

            while (right) { // if node is out of order, swap it with the next until it is not.
                if (left.value > right.value) {
                    sorted = false;

                    if (!prev) this.head = right; // if the SLL.head is not in order
                    else prev.next = right;

                    left.next = right.next; // swap nodes
                    right.next = left;
                    prev = right; // advance pointers
                    right = left.next;

                } else {
                    prev = left; // advance pointers
                    left = left.next;
                    right = right.next;
                }
            }

            prev = null; // restart at beginning of list
            left = this.head;
            right = left.next;
        }
    }
    return list;
}

let list = new SLL();
list.add(Infinity).add(20).add(22 / 7).add(30).add(90).add(-1);

console.log(list.toString());
console.log(list.bubbleSort().toString())
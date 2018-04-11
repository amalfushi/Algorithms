const SList = require("../Chapter 5 -- Linked Lists/_SLL.js");
const SLL = SList.SLL;
const Node = SList.Node;

// Create a function that uses Selection Sort to sort a linked list.  
// The list nodes contain .val, .next and other attributes should not be referenced.

// swap the values version
SLL.prototype.selectionSortValues = function () {
    let unsorted = this.head;
    while (unsorted) {
        let smallest = unsorted;

        let right = unsorted.next;
        while (right) {
            if (right.value < smallest.value) {
                smallest = right;
            }
            right = right.next;
        }

        if (smallest != unsorted) {
            let temp = unsorted.value;
            unsorted.value = smallest.value;
            smallest.value = temp;
        }
        unsorted = unsorted.next;
    }
    return this;
}



// swap the nodes version;
SLL.prototype.selectionSortNodes = function () {
    let unsorted = this.head;
    let sorted = null;
    while (unsorted) {
        // find the rightmost smallestimum;
        let smallest = unsorted;
        let smallest_previous = sorted;
        // runners
        let runner = unsorted.next;
        let runner_previous = unsorted;

        while (runner) {
            if (smallest.value > runner.value) {
                smallest = runner;
                smallest_previous = runner_previous;
            }
            runner_previous = runner;
            runner = runner.next;
        }

        // if the 'smallest' pointer is not set to the leftmost unsorted
        if (smallest != unsorted) { 
            // exception for the first node;
            if (unsorted == this.head) { 
                this.head = smallest; // change the head to the smallest
                smallest_previous.next = smallest.next; // remove smallest from the nodes on either side;
                smallest.next = unsorted; // reconnect the previous head to the list;
            } else {
                smallest_previous.next = smallest.next; // connect everything before the smallest node to everything after it
                smallest.next = unsorted;  // connect the leftmost unsorted to the smallest node
                sorted.next = smallest; // smallest node to the sorted ;
                runner = smallest.next; 
            }
            sorted = smallest;
        } else {
            sorted = unsorted;
            unsorted = unsorted.next;
        }
    }
    return this;
}



let list = new SLL();
list.add(Infinity).add(20).add(22 / 7).add(30).add(90).add(-1);

console.log(list.toString());
console.log(list.selectionSortValues().toString())
const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// Determine if a SLL is a palindrome (the nodes could be read the same front-to-back and back-to-front).
//bonus: try doing so without additional memory


// stand alone version
// ==================================================
function SllIsPalindrome(list) {        // O(2n)
    if (!list.head || !list.head.next) return true;
    // used for traversal
    let walker = list.head;
    let runner = list.head;
    // used for rebuilding second half
    let walkPrev = list.head;
    let mid = null;             

    // get the walker to the middle of the list
    while (runner && runner.next) {
        runner = runner.next.next;
        walkPrev = walker;
        walker = walker.next;
    }

    // to advance the node by 1 for odd sized lists;
    if (runner != null) {
        mid = walker;
        walker = walker.next;
    }

    let second_half = walker;
    //terminate the first half;
    walkPrev.next = null;
    //reverse second half
    reverse();
    let res = compareLists(list.head, second_half);
    reverse();

    // repair the sll
    if (mid != null) { // case for odd sized lists and the middle node;
        walkPrev.next = mid;
        mid.next = second_half;
    } else {
        walkPrev.next = second_half;
    }
    return res;

    function reverse() {
        let prev = null;
        let cur = second_half;
        let next;

        while (cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        second_half = prev;
    }

    function compareLists(left, right) {
        while (left && right) {
            if (left.value !== right.value) return false;
            left = left.next;
            right = right.next;
        }
        return true;
    }
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.isPalindrome = function () {  // O(n) & O(1) space;
    if (!this.head || !this.head.next) return true;

    let walker = this.head;
        runner = walker,
        nodes = [];
    
    while(runner && runner.next) {
        runner = runner.next.next;
        nodes.push(walker);
        walker = walker.next;
    }

    if (runner != null) walker = walker.next;

    while (walker){
        let temp = nodes.pop()
        if (walker.value !== temp.value) {
            return false;
        }
        walker = walker.next;
    }

    return true;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);
console.log(SllIsPalindrome(list1))

list1.add(6).add(7).add(8).add(9)
console.log(SllIsPalindrome(list1))


let list2 = new link.SLL();
list2.add(7).add("7").add("7")

console.log(list2.isPalindrome())
console.log(list2.add(7).isPalindrome())
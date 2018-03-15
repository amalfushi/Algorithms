const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// given a singly linked list, rearrange the nodes so that successive pairs of nodes are swapped in sequence
// do not swap the last node if in an odd sized list;


/* order of operations
h
p   c
1   2   3   4   5
------------- set previous to head and current to head.next

    h
p   c
1   2   3   4   5
------------- set the head to current

    h
p   c   n
1   2   3   4   5
------------- set next to current.next

h
c   p | n
2   1 | 3   4   5
-------------  set current.next to previous

h
c   p           n
2   1   4   5 | 3
-------------  set prevoius.next to next.next

                p
c               n
2   1   4   5 | 3
-------------  set previous to next (which still points to 3)

h
        c   n | p
2   1   4   5 | 3
-------------  set current to previous.next (4). 

h
        c   p | n
2   1   4   3 | 5
-------------  set next to current.next (5).  set current.next to previous(3)

h
        c   p   n
2   1   4   3   5 
-------------  hits if statement, set previous.next to next;
*/

// stand alone version
// ==================================================
function SllSwapPairs(list) {
    if (!list.head || !list.head.next) return list;
    let prev = list.head;
    let cur = prev.next;
    list.head = cur;

    while (true) {
        let next = cur.next;
        cur.next = prev;
        if (!next || !next.next) {
            prev.next = next;
            break
        }
        prev.next = next.next;
        prev = next;
        cur = prev.next;
    }
    if (prev.next) list.tail = prev.next;
    else list.tail = prev;
    return list;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.swapPairs = function () {
    if (!this.head || !this.head.next) return this;
    let prev = this.head;
    let cur = prev.next;
    this.head = cur;

    while (true) {
        let next = cur.next;
        cur.next = prev;
        if (!next || !next.next) {
            prev.next = next;
            break
        }
        prev.next = next.next;
        prev = next;
        cur = prev.next
    }
    if (prev.next) this.tail = prev.next;
    else this.tail = prev;
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1);
console.log(SllSwapPairs(list1).toString(), list1.tail.toString())
list1.add(0);
console.log(SllSwapPairs(list1).toString(), list1.tail.toString())

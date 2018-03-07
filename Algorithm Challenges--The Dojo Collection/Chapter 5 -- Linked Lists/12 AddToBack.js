const link = require("./_SLL.js");


// create afunction that creates a ListNode with given value and inserts it at the end of a SLL

function AddToBack(sll, val) { //standalone
    let nn = new link.Node(val);

    if (sll.head == null) sll.head = nn;
    else {
        let cur = sll.head;
        while (cur.next != null) cur = cur.next;
        cur.next = nn;
    }

    return sll;
}


// class version already in _SLL.js

let list1 = new link.SLL();
AddToBack(list1, 9)
AddToBack(list1, 8)
AddToBack(list1, 7)
AddToBack(list1, 6)
AddToBack(list1, 5);

console.log(list1.toString());
const link = require("../Chapter 5 -- Linked Lists/_SLL.js");
const copy = require("../Chapter 5 -- Linked Lists/23 Copy.js")

// Why limit nodes to containing only one pointer? In this challenge, each node has a .next, but also has a .child that is either null or points to another list. Don't alter .child; arrange.next pointers to 'flatten' the hierarchy into one linear list, from head through all others via next;


// stand alone version
// ==================================================
function FlattenChildren(list) {
    if (!list.head) return null;
    let output = new link.SLL();
    let cur = list.head;

    while (cur) {
        output.addNode(cur);
        if (cur.child != null) {
            let sublist = FlattenChildren(cur.child);
            ///////////////
            // this line is janky.
            // this *should* be handled by removing the else statement and having this be a constant operation.  That somehow creates an infinite loop in the last child list;
            cur = cur.next;
            // might be caused by working with pointers instead of a copy of the nodes.
            ///////////////
            output.tail.next = sublist.head;
            output.tail = sublist.tail;
        } else {
            cur = cur.next;
        }
    }
    return output;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.flattenChildren = function () {
    if (!this.head) return this;
    let cur = this.head;
    let prev = cur;

    while (cur) {
        if (prev != cur) prev = cur;
        cur = cur.next;
        if (prev.child) {
            prev.next = prev.child.head;
            prev.child.tail.next = cur;
            cur = prev.next;
        }
    }
    this.tail = prev;
    this.tail.next = null; //probably not needed
    return this;
}
// ==================================================


// doesn't quite work
link.SLL.prototype.unflattenChildren = function () {
    if (!this.head) return this;
    let cur = this.head;
    let prev = cur;
    let running = false;

    while (cur) {

        if (prev != cur && !running) prev = cur;
        console.log(prev.value, cur.value)
        cur = cur.next;
        // console.log(cur == prev.child.tail)
        if (!running && prev.child) running = true;

        else if (prev.child && prev.child.tail == cur) {
            console.log(cur.value, cur.next.value)
            // cur = cur.next;
            prev.next = cur.next;
            running = false;
            cur = prev;
            // prev = prev.next;
        }
        // console.log(prev.value, cur.value);
    }
    if (running) this.tail = prev, this.tail.next = null;
    return this;
}




link.Node.prototype.child = null;


let list1 = new link.SLL();
list1.add(1).add(2).add(3);

let list2 = new link.SLL();
list2.add('a').add('b').add('c')

let list3 = new link.SLL();
list3.add('cat').add('dog').add('horse')

list1.head.child = list2;
list.tail.child = list3;

// console.log(FlattenChildren(list1).toString());
console.log(list1.flattenChildren().toString());
console.log(list1.unflattenChildren().toString());
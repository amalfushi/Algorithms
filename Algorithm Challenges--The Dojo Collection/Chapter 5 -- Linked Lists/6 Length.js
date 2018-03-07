const link = require("./_SLL.js");


// given a pointer to the first list node, return the number of nodes in that list;
// the book seemed to want a seperate function but I also added it to the class
function SllLength (node) {
    let leng = 0;

    while(node) {
        node = node.next;
        leng++;
    }

    return leng;
}

let list = new link.SLL();

list.add(9).add(8).add(7).add(6).add(5);

console.log(SllLength(list.head))
console.log(list.length());
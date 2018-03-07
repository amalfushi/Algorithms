const link = require("./_SLL.js");


// given a pointer to the first list node, return the average of the SLL;
function SllAverage (node) {
    let cnt = 0;
    let sum = 0;

    while(node) {
        sum += node.value;
        cnt++;
        node = node.next;
    }

    return sum/cnt;
}



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

console.log(SllAverage(list1.head));
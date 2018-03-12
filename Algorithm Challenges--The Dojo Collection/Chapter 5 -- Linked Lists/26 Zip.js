const link = require("./_SLL.js");


// given two SLLs 'zip' the two together by alternating nodes, start with the first list and return the new combined list.


// stand alone version
// ==================================================
function SllZip(list1, list2) {
    let output = new link.SLL();

    let left = list1.head;
    let right = list2.head;

    while (true) {
        if (left != null) {
            output.add(left.value);
            left = left.next;
        }

        if (right != null) {
            output.add(right.value);
            right = right.next;
        }
        if (right == left && right == null) break;
    }

    return output;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.zip = function (list) {
    if (this.head == null) {
        this.head = list.head;
        return this;
    }

    let left = this.head;
    let right = list.head;

    while (left || right) {
    }

}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");


console.log(SllZip(list1, list2).toString());

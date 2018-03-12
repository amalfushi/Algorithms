const link = require("./_SLL.js");


// given an sll, return the second highest value contained in the list


// stand alone version
// ==================================================
function SllSecondHeighest(list) {
    if (list.head == null) return null;
    let highest;
    let second;

    let cur = list.head;
    while (cur != null) {
        if (!highest){
            highest = cur;
        } else if(cur.value > highest.value) {
            second = highest;
            highest = cur;
        } else if (!second || (cur.value < highest.value && cur.value > second.value)) {
            second = cur;
        }
        cur = cur.next;
        // console.log(highest.value, second.value, cur.value)
    }
    return highest.value == second.value || !second ? null : second.value;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.secondHeighiest = function () {
    if (this.head == null || this.head.next == null) return null;
    else {
        let highest;
        let second;
        let cur = this.head;

        while(cur != null) {
            if (!highest) highest = cur;
            else if (cur.value > highest.value) second = highest, highest = cur;
            else if (!second || (cur.value < highest.value && cur.value > second.value)) second = cur;
            cur = cur.next;
        }
        return highest.value == second.value || !second ? null: second.value;
    }
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");


console.log(SllSecondHeighest(list1));
console.log(list2.secondHeighiest())
const link = require("./_BST.js");

// Remove a given value.  Return false if not found.

link.BST.prototype.remove = function (val) {
    let cur = this.root;
    let parent = cur;

    while (cur) {
        if (cur.value == val) break;
        else if (val < cur.value) parent = cur, cur = cur.left;
        else parent = cur, cur = cur.right;
    }

    // if the value is found and both subtrees exist, move to the right subtree and then find the largest value in the less-than subtree.
    //           5
    //       3       8
    //    2    4   6      10
    // 1            -7-  9   11

    //          -7-
    //       3       8
    //    2    4   6     10
    // 1               9   11
    
    // cur only exists here if it's found the value to be removed;
    if (cur) {
        if (cur.left && cur.right) {
            cur = cur.right;
            let prev = parent;
            while (cur.left) prev = cur, cur = cur.left;
            while (cur.right) prev = cur, cur = cur.right;
            parent.value = cur.value;
            prev.left = null;
            prev.right = null;
        } else if (cur.right) {
            let temp = cur.left;
            cur.value = cur.right.value;
            cur.right = cur.right.right;
            cur.left = temp;
        } else if (cur.left) {
            cur.value = cur.left.value;
            cur.left = cur.left.left;
        } else {
            parent.left = null
            parent.right = null;
        }
    }
    return this;
}


let tree = new link.BST();
tree.add(5).add(3).add(8).add(2).add(4).add(1).add(10).add(9).add(6).add(11).add(7)
console.log(tree.remove(33).toString())
console.log(tree.remove(5).toString())
console.log(tree.remove(1).toString())
let link = require("./_BST.js");
// create a function that prints the BST's values traversed post-order;


// uses a queue to hold nodes until the current pointer is empty.  Cur then becomes the first node in the queue, print's it's value, and then becomes it's right node.
link.BST.prototype.preorderNoRecursion = function () {
    let cur = this.root;
    let queue = [];
    while (cur != null || queue.length > 0) {
        if (cur == null) {
            cur = queue.pop();
            console.log(cur.value);
            cur = cur.right;
        } else {
            queue.push(cur);
            cur = cur.left;
        }
    }
}

let tree = new link.BST();
tree.add(5).add(3).add(7).add(2).add(4).add(1).add(8).add(6).add(9)

tree.preorderNoRecursion();
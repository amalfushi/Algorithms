const link = require("./_BST.js");

//given an array that is sorted in ascending order, return a BST object that is height balanced.


function arrayToBST(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    let mid = Math.round((start + end) / 2)
    let node = new link.BTNode();
    node.value = arr[mid];

    node.left = arrayToBST(arr, start, mid - 1);
    node.right = arrayToBST(arr, mid + 1, end);
    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;
    
    return node;
}

// let tree = new link.BST();
// tree.root = arrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(tree);
exports.arrayToBST = arrayToBST;
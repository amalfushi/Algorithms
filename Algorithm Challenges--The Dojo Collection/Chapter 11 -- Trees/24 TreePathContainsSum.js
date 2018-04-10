const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// Given a binary tree (not necessarily a BST) containing numbers and a sum, can you determine whether
// the tree has a root-to-leaf path that, if you add up those nodes values, equals sum? Return a boolean. 
// If a particular node has (for example) a left child but no right child, you can consider it a leaf.

// second, return an array of all the root-to-leaf paths that equal the sum


// first
link.BST.prototype.containsSum = function (sum, current = this.root) {
    if (!current) {
        if (sum == 0) return true;
        return false;
    }
    return this.containsSum(sum - current.value, current.left) || this.containsSum(sum - current.value, current.right);
}


// second 
link.BST.prototype.pathSums = function (sum, node = this.root, curPath = [], sumPaths = []) {
    // If the node is null and the sum is zero, that means we've finished the path with the desired sum
    // Push the path to the array of valid paths containing the sum
    // console.log(sumPaths);
    if (!node) {
        if (sum == 0) {
            return sumPaths.push(curPath);
        }
        return false;
    }
    
    curPath.push(node.value);
    sum -= node.value;

    // Traverse the left subtree recursively using a shallow copy (slice) of the current path
    let path = this.pathSums(sum, node.left, curPath.slice(0), sumPaths); 
    // Do the same thing for the right subtree if it didn't already push it to sumPaths.
    if (!path || path instanceof Array) this.pathSums(sum, node.right, curPath.slice(0), sumPaths); 
    

    return sumPaths;
}


let tree = new link.BST();
tree.root = a2bst.arrayToBST([10, 5, 15])
tree.add(3);
let rightLeaf = tree.root.right;
rightLeaf.right = new link.BTNode(-5);
rightLeaf.right.parent = rightLeaf;


//     5
//    /  \
//   10   15
//  /       \
// 3        -5

console.log(tree.pathSums(15))
console.log(tree.pathSums(20))
console.log(tree.pathSums(18))
console.log(tree.pathSums(30))

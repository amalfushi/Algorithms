const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// Create BST method closestValue(val) to return the vailue contained in a BST that is closest to the given val.
// This could be the exact value if contained in the tree or one that is greater or less than the value.
// take care, there is no gaurantee that the closest value is a direct parent, grandparent, child, grandchild, etc.


link.BST.prototype.closestValue = function (val, current = this.root) {
    if (current) {
        var closest = current; // hold onto the previous node

        while (current) {
            if (current.value == val) {
                return current.value
            } else {
                closest = current;

                // Go to left subtree if it exists and the current value is less than val
                // If not, go right if it exists
                // If neither exist break the loop and return the closest.value
                if (current.value > val && current.left) current = current.left;
                else if (current.right) current = current.right;
                else break;

                // If the tree is valid and the val is between the current.value and closest.value,
                // we can assume that the value is not in the tree.
                // Return whichever node is closer to the value.
                if (current.value > val && closest.value < val) {
                    return Math.abs(val - current.value) < Math.abs(val - closest.value) ? current.value : closest.value;
                }
            }
        }
    }
    return closest.value;
}


let tree = new link.BST();
tree.root = a2bst.arrayToBST([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])

console.log(tree.toString())
console.log(tree.closestValue(11))
console.log(tree.closestValue(44))
console.log(tree.closestValue(4))
console.log(tree.closestValue(1000))

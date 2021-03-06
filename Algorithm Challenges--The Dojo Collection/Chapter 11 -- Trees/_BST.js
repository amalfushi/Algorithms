class BTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        let nn = new BTNode(val)
        if (!this.root) this.root = nn;
        else {
            let cur = this.root;
            while (cur) {
                if (val >= cur.value) {
                    if (!cur.right) {
                        cur.right = nn;
                        break;
                    }
                    cur = cur.right;

                } else {
                    if (!cur.left) {
                        cur.left = nn;
                        break
                    }
                    cur = cur.left;
                }
            }
            nn.parent = cur;
        }
        return this;
    }

    contains(val, node = this.root) {
        if (node) {
            if (node.value == val) return true;
            else return this.contains(val, node.left) || this.contains(val, node.right);
        }
        return false;
    }

    find(val, node = this.root) {
        if (node) {
            if (node.value == val) return node;
            else return this.find(val, node.left) || this.find(val, node.right);
        }
        return null;
    }

    min() {
        let cur = this.root;
        while (cur) {
            if (cur.left) cur = cur.left;
            else break;
        }
        return cur.value;
    }

    max() {
        let cur = this.root;
        while (cur) {
            if (cur.right) cur = cur.right;
            else break;
        }
        return cur.value;
    }

    size(cur = this.root) {
        if (!cur) return 0;
        if (cur.left && cur.right) {
            return 1 + this.size(cur.left) + this.size(cur.right)
        } else if (cur.left) {
            return 1 + this.size(cur.left);
        } else if (cur.right) {
            return 1 + this.size(cur.right);
        } else {
            return 1;
        }
    }

    //ridiculous one-liner version of ^
    count(cur = this.root) {
        return !cur ? 0 : cur.left && cur.right ? 1 + this.size(cur.left) + this.size(cur.right) : cur.left ? 1 + this.size(cur.left) : cur.right ? 1 + this.size(cur.right) : 1;
    }

    isEmpty() {
        return this.root == null;
    }

    height(node = this.root) {
        return !node ? 0 : node.left && node.right ? Math.max(1 + this.height(node.left), 1 + this.height(node.left)) : node.left ? 1 + this.height(node.left) : node.right ? 1 + this.height(node.right) : 1;
    }

    shortest(node = this.root) {
        if (!node) return 0;
        return 1 + Math.min(this.shallowest(node.left), this.shallowest(node.right))
    }

    toString(order = "preorder") { // leaves an annoying 'undefined' at the end
        let arr = [];
        this.traverseTree((node) =>arr.push(node.value), order);
        return arr
    }


    //general purpose tree traversal
    traverseTree(callback, order = "preorder", node = this.root) {
        if (node) {
            // console.log(node);
            switch (order) {
                case "inorder":
                    this.traverseTree(callback, "inorder", node.left);
                    callback(node);
                    this.traverseTree(callback, "inorder", node.right);
                    break;
                case "preorder":
                    callback(node);
                    this.traverseTree(callback, "preorder", node.left);
                    this.traverseTree(callback, "preorder", node.right);
                    break;
                case "postorder":
                    this.traverseTree(callback, "postorder", node.left);
                    this.traverseTree(callback, "postorder", node.right);
                    callback(node);
                    break;
                default:
                    break;
            }
        }
    }
}

exports.BTNode = BTNode;
exports.BST = BST;
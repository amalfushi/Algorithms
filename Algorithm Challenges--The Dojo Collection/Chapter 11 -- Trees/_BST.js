class BTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
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
        }
        return this;
    }

    contains(val) {
        if (this.root) {
            let cur = this.root;
            while (cur) {
                if (cur.value == val) return true;
                if (val > cur.value) cur = cur.right;
                else cur = cur.left;
            }
        }
        return false;
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
}

let nb = new BST();
// nb.add(8).add(10).add(3).add(4).add(2);

console.log(nb.count());

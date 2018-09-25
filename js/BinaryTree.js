BinaryTree.prototype.push = function (val, elId) {
    var root = this.root;
    if (!root) {
        this.root = new Node(val, elId);
        return;
    }
    q = []
    q.push(root);
    while (q.length != 0) {
        var temp = q.shift();
        if (temp.left == null) {
            temp.left = new Node(val, elId);
            break;
        } else
            q.push(temp.left);
        if (temp.right == null) {
            temp.right = new Node(val, elId);
            break;
        } else
            q.push(temp.right);
    }
};

function Node(val, elId) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.elId = elId;
}
function BinaryTree() {
    this.root = null;
}
function dfs(node, x, y) {
    if (node) {
        x.push(node.value);
        y.push(node.elId);
        dfs(node.left, x, y);
        dfs(node.right, x, y);
    }
}
function inorder(node, x, y) {
    if (node) {
        inorder(node.left, x, y);
        x.push(node.value);
        y.push(node.elId);
        inorder(node.right, x, y);
    }
}
function postorder(node, x, y) {
    if (node) {
        postorder(node.left, x, y);
        postorder(node.right, x, y);
        x.push(node.value);
        y.push(node.elId);
    }
}
function preorder(node, x, y) {
    if (node) {
        x.push(node.value);
        y.push(node.elId);
        preorder(node.left, x, y);
        preorder(node.right, x, y);
    }
}
function bfs(node, x, y) {
    if (!node) return;
    var stack = []
    stack.push(node);
    while (stack.length != 0) {
        var c = stack.shift();
        x.push(c.value);
        y.push(c.elId);
        if (c.left != null)
            stack.push(c.left)
        if (c.right != null)
            stack.push(c.right)
    }
}

if (typeof exports == 'undefined') {
    var module = this['mymodule'] = {};
}

module.exports = {
    bfs,
    BinaryTree,
    inorder,
    postorder,
    preorder,
    Node
};
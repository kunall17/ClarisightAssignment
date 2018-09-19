BinaryTree.prototype.push = function (val) {
    var root = this.root;
    if (!root) {
        this.root = new Node(val);
        return;
    }
    q = []
    q.push(root); 
    while (q.length != 0) { 
        var temp = q.shift(); 
        if (temp.left == null) { 
            temp.left = new Node(val); 
            break; 
        } else
            q.push(temp.left); 
        if (temp.right == null) { 
            temp.right = new Node(val); 
            break; 
        } else
            q.push(temp.right); 
    } 
};

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
function BinaryTree() {
    this.root = null;
}
function dfs(node, x) {
    if (node) {
        x.push(node.value);
        dfs(node.left, x);
        dfs(node.right, x);
    }
}
function inorder(node, x) {
    if (node) {
        inorder(node.left, x);
        x.push(node.value);
        inorder(node.right, x);
    }
}
function postorder(node, x) {
    if (node) {
        postorder(node.left, x);
        postorder(node.right, x);
        x.push(node.value);
    }
}
function preorder(node, x) {
    if (node) {
        x.push(node.value);
        preorder(node.left, x);
        preorder(node.right, x);
    }
}
function bfs(node, x) {
    if (!node) return;
    var stack = []
    stack.push(node);
    while (stack.length != 0) {
        var c = stack.shift();
        x.push(c.value);
        if (c.left != null)
            stack.push(c.left)
        if (c.right != null)
            stack.push(c.right)
    } 
}

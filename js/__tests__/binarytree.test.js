const {
  BinaryTree,
  inorder,
  postorder,
  preorder,
  bfs,
} = require('../BinaryTree');

var bt = new BinaryTree();
bt.push(1, "a");
bt.push(2, "b");
bt.push(3, "c");
bt.push(4, "d");
bt.push(5, "e");

describe('Test traversals', () => {
  test('Test inorder', () => {
    var x = [];
    var y = [];
    inorder(bt.root, x, y);
    expect(x).toEqual([4, 2, 5, 1, 3]);
    expect(y).toEqual(["d", "b", "e", "a", "c"]);
  });

  test('Test preorder', () => {
    var x = [];
    var y = [];
    preorder(bt.root, x, y);
    expect(x).toEqual([1, 2, 4, 5, 3]);
    expect(y).toEqual(["a", "b", "d", "e", "c"]);
  });

  test('Test postorder', () => {
    var x = [];
    var y = [];
    postorder(bt.root, x, y);
    expect(x).toEqual([4, 5, 2, 3, 1]);
    expect(y).toEqual(["d", "e", "b", "c", "a"]);
  });

  test('Test bfs', () => {
    var x = [];
    var y = [];
    bfs(bt.root, x, y);
    expect(x).toEqual([1, 2, 3, 4, 5]);
    expect(y).toEqual(["a", "b", "c", "d", "e"]);
  });
});

const { 
  BinaryTree,
  inorder,
  postorder,
  preorder,
  bfs,
} = require('../BinaryTree');

var bt = new BinaryTree();
bt.push(1);
bt.push(2);
bt.push(3);
bt.push(4);
bt.push(5);

describe('Test traversals' , () => {
  test('Test inorder', () => {
    var x = [];
    inorder(bt.root, x);
    expect(x).toEqual([4, 2, 5, 1, 3]);
  });

  test('Test preorder', () => {
    var x = [];
    preorder(bt.root, x);
    expect(x).toEqual([1, 2, 4, 5, 3]);
  });
  
  test('Test postorder', () => {
    var x = [];
    postorder(bt.root, x);
    expect(x).toEqual([4, 5, 2, 3, 1]);
  });

  test('Test bfs', () => {
    var x = [];
    bfs(bt.root, x);
    expect(x).toEqual([1, 2, 3, 4, 5]);
  });
});

const map = (f, node) => {
  const updatedNode = f(node);

  return node.type === 'directory'
    ? { ...updatedNode, children: node.children.map(n => map(f, n)) } : updatedNode;
};

export default map;


const reduce = (f, tree, acc) => {
  const [name, children] = tree;
  const newAcc = f(acc, tree);

  if (!children) {
    return newAcc;
  }
  return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

reduce((acc, n) => acc + 1, tree, 0);

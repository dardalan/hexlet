const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);

  if (node.type === 'file') {
    return newAcc;
  }

  return node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
}

export default reduce;

const findEmptyDirsDepth = (root, depth = 1) => {
  const iter = (n, currentDepth, acc) => {
    if (n.type === 'file' || currentDepth > depth) {
      return acc;
    }

    if (n.children.length === 0) {
      return [...acc, n.name];
    }
    return n.children.reduce((cAcc, nn) => iter(nn, currentDepth + 1, cAcc), acc);
  };

  return iter(root, 0, []);
};

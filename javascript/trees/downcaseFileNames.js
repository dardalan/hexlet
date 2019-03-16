const downcaseFileNames = node => {
  if (node.type === 'directory') {
    return { ...node, children: node.children.map(downcaseFileNames) }
  }
  return { ...node, name: node.name.toLowerCase() }
}

export default downcaseFileNames;

// В коде используются два разных map. Один самописный, другой на массиве.
const map = (f, tree) => {
 const [, children] = tree;
 const [newName] = f(tree);
 if (!children) {
   return [newName];
 }
 return [newName, children.map(c => map(f, c))];
};

const tree = ['A', [
 ['B', [['E'], ['F']]],
 ['C'],
 ['D', [['G'], ['J']]],
]];

JSON.stringify(map(([name]) => [name.toLowerCase()], tree));

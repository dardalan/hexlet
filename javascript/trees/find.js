import path from 'path';

const findFilesByName = (root, substr) => {
  const iter = (n, ancestry, acc) => {
    const newAncestry = path.join(ancestry, n.name);
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, newAncestry] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;

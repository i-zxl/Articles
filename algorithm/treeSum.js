// 树路径和为sum的路径

const treeFindSum = (node, sum) => {
  if (!node) return [];
  let result = [];
  dfsFind(node, sum, [], 0, result);
  return result;
} 

const dfsFind = (node, sum, path, currentSum, result) => {
  currentSum +=  node.value;
  path.push(node.value);
  if (currentSum == sum && !node.left && !node.right) {
    result.push(path.slice(0));
  }
  if (node.left) {
    dfsFind(node.left, sum, path, currentSum, result);
  }
  if (node.right) {
    dfsFind(node.right, sum, path, currentSum, result)
  }
  path.pop();
}



// test
var node = {
  value: 1,
  left: {
    value: 1,
    left: {
      value: 1,
      left: {
        value: 1
      },
      right: {
        value: 2
      }
    },
    right: {
      value: 2
    }
  },
  right: {
    value: 2,
    left: {
      value: 1,
      left: {
        value: 1
      },
      right: {
        value: 2
      }
    },
    right: {
      value: 2
    }
  }
}
treeFindSum(node, 4)
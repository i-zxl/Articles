// 树的深度

// 递归实现 deep = max(left, right) +1
const maxDeep = (node) => {
  const getDepth = (node) => {
    if (!node) return 0;
    return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
  };
  return getDepth(node);
};


// 迭代法
// 队列，先进先出；出一层，进一层，层级叠加
const dfsMaxDeep = (node) => {
  if (!node) return 0;
  let queue = [node], deep = 0;
  while(queue.length) {
    const newQueue = [];
    while (queue.length) {
      const current = queue.shift();
      if (current.left)
        newQueue.push(current.left)
      if (current.right)
        newQueue.push(current.right)
    }
    deep++
    queue = newQueue;
  }
  return deep;
}


// test
var node = {
  value: 1,
  left: {
    value: 1,
    left: {
      value: 1,
      left: {
        value: 1,
        left: {
          value: 1,
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
maxDeep(node);
dfsMaxDeep(node);
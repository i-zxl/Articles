// 斐波那契数列

//非递归
const feibo = (n) => {
  if (n < 2) return 1
  let a1 = 1, a2 = 1, c
  for(let i = 2; i< n; i++) {
    c = a1 + a2
    a1 = a2
    a2 = c
  }
  return c
}

// 递归实现
const feibo = (n) => {
  if (n <=2) return 1
  return feibo(n-1) + feibo(n-2)
}

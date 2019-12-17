/* 
  快速排序
  分治法，逐渐缩小数组的大小，选取基数，大的放在基数的右边，小的放在基数的左边
  递归的实现
 */


const quickSearch = (arr, begin, end) => {
  if(begin >= end) return;
  //基准数
  const temp = arr[begin];
  let l = begin;
  let r = end

  while(l < r) {
    // 从右往左扫描，碰到第一个小于基准数的是停住
    while(l < r && arr[r] >= temp) 
      r--;
    //左指针从左向右扫描，碰到第一个大于基准数的时候停住
    while(l < r && arr[l] <= temp)
      l++;
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  [arr[begin], arr[l]] = [arr[l], arr[begin]];
  //递归处理左右数组
  quickSearch(arr, begin, l - 1);
  quickSearch(arr, l + 1, end);
}


quickSearch([1,23,2,4,43,22,41,3,7,5])
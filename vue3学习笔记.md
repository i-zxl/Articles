# vue2 的问题 

readability as components grow # 随着组件增长可读性变差
code reuse patterns have drawbacks # 代码逻辑复用存在缺陷
limited typescript support # 有限的typescript支持


# 学习Vue3.0版本源码知识点准备

## Set、WeakSet、Map、WeakMap。
1. Set 可以接受一个数组或者具有iterable接口的其他数据结构作为参数初始化。
2. WeakSet 同 Set 定义，但是存在两个差异：
首先，WeakSet的成员只能是对象，不能是其他类型。
其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。


## Proxy

## Typescript基础用法
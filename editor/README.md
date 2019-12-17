编辑器的实现：

. 容器
一个元素能够被编辑，给div设置属性： contenteditable="true"

. 光标
编辑器最重要的功能其实就是控制光碧昂的各种状态、位置信息等，浏览器提供了selection对象和range对象来操作光标;
通常情况下，我们不会操作selection对象本身，而是操作selection对象的ranges区域;
selection对象还有两个特别重要的搬到，addRange和removeAllRanges方法用来添加一个range对象和删除所有的range对象。

```js

let selection = window.getSelection();
let ranges = selection.getRangeAt(0);

```


document中使用execCommand方法允许命令来曹总可编辑内容区域的元素

```js



```
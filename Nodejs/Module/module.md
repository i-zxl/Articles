Node JS 模块实现
在Node中引入模块主要经过三个步骤：
1. 路径分析
2. 文件定位
3. 编译执行

Node 模块一般分为两类：Node自身的模块（核心模块）；用户自己编写的模块（文件模块）

优先从缓存加载：前端浏览器缓存文件，Node缓存的是编译和执行之后的对象。

路径分析和文件定位：因为存在几种心事的标识符，对于不同的标识符，模块查找和定位存在不同程度的差异。
1. 核心模块，如http、fs、path等
2. .或者..开始的相对路径文件模块
3. 非路径形式的文件模块，如自定义的connect模块

核心模块优先级仅次于缓存加载，
路径形式的文件模块，require方法会将相对路径转换成绝对路径作为标识，并以真实路径为索引，将编译和执行的结果缓存，加载速度慢于核心模块
自定义模块，查找最耗时，module.paths会依次输出模块路径，当前文件夹的Node_modules目录依次往父目录查找，可以看出文件月神，模块查找耗时最多，加载速度最慢；

文件解析：
require分析标识符的过程中，commonJS会做.js、.json、.node的次序补足扩展名，依次尝试，在尝试过程中会调用fs模块同步阻塞式的判断文件是否存在，因为node是单线程的，所以存在性能问题，解决方式是：除.js的文件require带上文件拓展名，

目录分析：
require通过文件扩展名分析之后，找不到对应的文件，但是却得到一个目录，Node会将这个目录当成一个包处理，在这个过程中Node对commonJS包规范进行一定的支持，解析当前packaga.json; parse出main属性，如果main属性查找不到，会默认将index作为默认文件，依次进行.js、.json、.node文件解析；

模块编译：
.js文件，通过fs模块同步读取文件后编译执行；
.node文件，用c/c++编写的扩展文件通过dlopen()方法加载并编译生成的文件；
.json 通过fs同步读取文件，JSON.parse解析返回结果；
其余的扩展名文件，都被当做.js文件载入；

每个编译成功的模块都被缓存在Module._cache对象上，以提高二次引入性能

模块的编译
在commonJS模块规范中，我们知道每个模块文件都存在require、exports、module、__filename、__dirname，如果直接定义的话肯定会污染全局，
Node在编译的时候对文件模块进行了包装，

```js

  const fs = require('fs')
  fs.readFile('./module.js', 'utf-8', function(err, data) {
    let contextString = `(function(exports,require, module, __filename, __dirname) { \n ${data} \n})`
    let context = eval(contextString)
    // 调用context. 传入require, exports、module、__filename、__dirname
  })
  
```

前后端javascript分别搁置在http的两端，
浏览器端的javascript需要经历从同一个服务器分发到多个客户端执行，而服务端的javascript则是相同的代码需要执行多次，
前者的瓶颈在于带宽，后者的瓶颈在于CPU和内存等资源，
前者需要通过网络加载，后者是磁盘加载，两者速度不在一个数量级上

AMD规范:
模块定义： difine(id?, dependencues?, factory ), 与commonjs不同的是AMD需要使用define来定义，隔离作用域，而Node是隐式的包装；另一个区别是内容需要通过返回的方式进行导出；
CMD规范: difine(factory), 与AMD不同的是，AMD需要在声明模块的时候指定所有依赖，通过形参传递依赖到模块内容中，CMD则支持动态引入;

如何开发兼容多模块的包：

```js

;(function(name, difinition) {
  const hasDefine = typeof difine === "fucntion";
  const hasExports = typeof module !== "undefined" && module.exports;
  if (hasDefine) {
    define(difinition);
  } else if () {
    module.exports = difinition();
  } else {
    this[name] = difinition();
  }
})('hello', function () {
  const hello = function () {}
  return hello;
})

```

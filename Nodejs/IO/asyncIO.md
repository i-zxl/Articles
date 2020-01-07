为什么异步I/O
异步的概念：javascript在浏览器中的执行是单线程的，浏览器在执行javascript的时候，ui渲染和用户响应是停滞的
前端的资源加载和渲染阻塞的调优：
  使用异步的方式加载资源，javascript资源加载放在dom之后；预加载js资源可以使用async方式加载第三方资源， 执行顺序不定；defer方式加载业务相关资源脚本，执行脚本放在DomconentLoaded之后；
  css样式加载head中，提前加载样式和

复杂的业务中，多线程面临上下文切换、锁、状态同步的问题

浏览器的子进程web workers

阻塞I/O带来的是性能问题
非阻塞I/O则需要使用轮询的方式去确认数据是否完成获取
轮询技术：
read: 最原始、最低效

select:

poll:

epoll:


Node的异步I/O

事件循环：进程启动时，Node便会创建一个while(true)的循环，每执行一次循环体的过程，我们称之为Tick;

NodeJS事件循环
setTimeout 创建的定时器会被插入到定时器观察者内部的一个红黑树中；每次tick的时候，会从该红黑树中取出定时器对象，检查是否超过时间，如果超过时间，就形成一个事件，回调函数会立刻执行

process.nextTick()
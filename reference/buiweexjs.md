## buiweex js

页面要使用框架的buiweex的js，需要先引入

```javascript
var buiweex = require("buiweex");

```
该库包含了常用的工具方法，包括了如下几个：

### toast

弹出吐司

buiweex.toast(msg)

msg: {string} 吐司的文本内容

### alert

弹出提示框

buiweex.alert(msg, callback, option)

msg: {string} 弹出提示框的文本内容

callback: {function} 点击确定后的回调函数，返回的值是按钮的文本

option: {object} 其他配置，目前支持定义按钮的文本，对应的key是okTitle。

```javascript
buiweex.alert("抱歉，程序崩溃了！",function (value) {
    buiweex.toast(value);
},{'okTitle':'知道了'});

```

### confirm

弹出确认框

buiweex.confirm(msg, callback, option)

msg: {string} 弹出确认框的文本内容

callback: {function} 点击确定后的回调函数，返回的值是按钮的文本

option: {object} 其他配置，目前支持定义按钮的文本，确定按钮对应的key是okTitle，取消按钮对应的key是cancelTitle

```javascript
buiweex.confirm("确定要删除吗？",function (value) {
    buiweex.toast(value);
},{'okTitle':'确定','cancelTitle':'再看看'});
```

### getContextPath

获取当前的上下文路径，页面切换的时候需要用到

buiweex.getContextPath()


### push

切换到指定页面，可以带上参数

buiweex.push(url,params)

url: {string} 要切换的具体页面，这里是指生成的 *.weex.js 页面

params: {object} 页面传递的参数

```javascript
var params={"name":"bui-weex","author":"bingosoft"};
var url=buiweex.getContextPath();
buiweex.push(url,params);
```

### pop

返回上个页面

buiweex.pop()



## 常见问题

### 1.PC浏览器无法预览

因`bui-weex`专注于 iOS,android 的效果，对于 PC浏览器的适配目前尚未做到很好。我们的模版工程在 `webpack.config.js`中没有开启生成 **.web.js的功能，因此在PC浏览器上无法预览。进行如下修改即可：

```javascript
...
module.exports = [webConfig,weexConfig];

```

### 2.如何进行iPhoneX的适配

iPhoneX适配，主要是对顶部和底部的 `安全区域` 进行高度的调整。框架提供了接口来判断是否在 iPhoneX 容器里。

```javascript
this.$isIPhoneX() // return  true or false
```

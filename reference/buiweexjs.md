## 全局函数

在 0.2.0 之前，需要手工引入 bui-weex

```javascript
var buiweex = require("bui-weex");

```
在 0.2.0+ 为了方便开发人员使用，将 bui-weex 做成了 Vue plugin, 通过 Vue.use 的方式注入到全局。所有的vue页面无需再引入`bui-weex`了。该库内置了一些工具方法，参考如下：
### this.$toast

```javascript
/**
 * 吐司信息
 * @param msg {string} 提示文本
 */
 
```

### this.$alert

```javascript
/**
 * 弹出警告
 * @param msg {string} 提示文本
 * @param callback {function} 点击确定后回调函数
 * @param option {object} 参数
 * @param option.okTitle {string} 确定按钮文本
 */

```

### this.$confirm

```javascript
/**
 * 弹出确认框
 * @param msg {string} 提示文本
 * @param callback {function} 点击确定/取消后回调函数
 * @param option {object} 参数
 * @param option.okTitle {string} 确定按钮文本
 * @param option.cancelTitle {string} 取消按钮文本
 */
```

### this.$getContextPath

```javascript
/**
 * 获取当前上下文路径
 * @return {string} 当前上下文路径
 */
```

### this.$push

```javascript
/**
 * 加载一个新的页面(bundleJS)
 * @param url {string} bundle js 地址
 * @param params {object} 传递的参数
 */
```

### this.$pop

```javascript
/**
 * 返回上个页面
 */
```

### this.$getPageParams

```javascript
/**
 * 获取页面参数(bundleJS),从url查询参数中获取
 * @return {object} 返回json数据
 */
```

### this.$get

```javascript
/**
 * 发送GET请求
 * @param params {object} 请求参数
 * @param params.url {string} 请求的URL
 * @param params.headers {object} 请求头
 * @param params.type {string} 响应类型, json(默认),text
 * @param params.data {object} 请求数据，自动拼接到url后面
 * @return {Promise.<TResult>} 成功: resolve(data, status, statusText), 失败: reject(status, statusText)
 */
```

### this.$post

```javascript
/**
 * 发送POST请求
 * @param params {object} 请求参数
 * @param params.url {string} 请求的URL
 * @param params.headers {object} 请求头, Content-Type默认值是 application/x-www-form-urlencoded
 * @param params.type {string} 响应类型, json(默认),text
 * @param params.data {object} 请求数据，带到 HTTP body中
 * @return {Promise.<TResult>} 成功: resolve(data, status, statusText), 失败: reject(status, statusText)
 */
```


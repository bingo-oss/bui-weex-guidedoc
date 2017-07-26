## 页面开发

Weex框架要求使用 [Vue](https://vuejs.org/) 进行页面开发。开发者通过撰写 `*.vue` 文件，基于`<template>`,`<style>`,`<script>` 快速构建组件化的应用。

### 页面开发模式

页面的开发模式分为两种：

* 第一种：单页面（SPA） 通过 [Vue-router](https://github.com/vuejs/vue-router) + [Vuex](https://github.com/vuejs/vuex) 来实现。这种方式是通过Router的方式来进行页面切换，如果您的页面不需要太多的交互效果，可以使用这种方式来实现。缺点是 1.页面切换在手机上显得很生硬；2.`transition`使用bug比较多。
* 第二种：独立页面，每个页面都独立打出一个 js 文件，通过 `navigator`对象进行页面切换，交互效果较好。


**推荐的开发模式**

整体架构使用`独立页面`的方式，在 src/entry 配置好每一个独立入口。通过 `buiweex` 提供的 `push` 和 `pop` 来切换页面。局部页面使用 Router 的方式进行组件切换。

以上的方式并不是绝对的，可以根据实际需要进行调整。


### 第一步，页面入口配置

首先在 src/view 下创建 index.vue 文件（脚手架工程默认会有个app.vue）

结构如下：

```html
<template>
    <div>
        <text>Hello BUI-Weex</text>
    </div>
</template>
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<script>
    var buiweex = require("bui-weex");
    module.exports = {
        data: function () {
            return {}
        },
        methods: {}
    }
</script>
```

之后，在 src/entry 下创建 index.js

```javascript
import Index from '../views/index.vue'
import mixins from '../js/mixins.js' //如果不用可以去掉
Vue.mixin(mixins);
Index.el = '#root'
new Vue(Index)

```
webpack 会根据 src/entry 的文件自动在dist下生成`index.weex.js`，这就是一个独立的Bundle JS。如果没有生成文件，请重新运行 `npm run dev`。



### 第二步，页面组装

bui-weex 里面提供了很多组件，开发者只需要通过组装的方式进行开发即可。

**引入 js**

里面包含了一些工具方法，例如`push`,`pop`,`alert`,`toast`等:

```javascript
var buiweex = require("bui-weex");
```

**引入 css**

如果想使用到布局等基础样式，需要引入`buiweex.scss`,注意这里是使用[sass](http://www.w3cplus.com/sassguide/syntax.html)的语法。

需要用哪些组件，可以在 compontents 中引入，具体请看【开发手册】


### 第三步，页面跳转和传递参数

假设想从 App.vue 跳转到 Index.Vue ，实际上是从 `app.weex.js` 跳转到 `index.weex.js` 。

App.vue 中调用如下接口：（假设点击Button）

```javascript
 buiweex.push(buiweex.getContextPath()+"/index.weex.js")

```

传递参数:

```javascript
var params={'name':'yulsh','company':'BingoSoft'}
buiweex.push(buiweex.getContextPath()+"/index.weex.js",params)
```

Index.vue 中获取参数: 

```javascript
mounted:function(){
	var pageParams=buiweex.getPageParams();
}

```


到此，您已经可以基于 bui-weex 提供的工程进行页面开发了！








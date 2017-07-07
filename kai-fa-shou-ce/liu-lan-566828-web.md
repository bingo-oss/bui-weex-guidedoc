# 浏览器

一系列的 `<web>` 组件操作接口。 比如 goBack、goForward、和 reload。webview module 与   `<web>` 组件共用

## 特性

* `url` 组件的资源地址


## 事件

* `goBack(webElement)` 加载历史记录里的前一个资源地址，参考如下：

  ```
  <div class="flex-row">
    <bui-button class="ex-btn" type="danger" value="goBack" @click="gobackFunc"></bui-button>
  </div>
  <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
  ```

  ```js
  methods: {
    "gobackFunc": function (event) {
        buiweex.toast('page url:' + this.url);
        webview.goBack(this.$refs.webview)
    },
  }
  ```

* `goForward(webElement)` 加载历史记录里的下一个资源地址，参考如下：

  ```
  <div class="flex-row">
    <bui-button class="ex-btn" type="success" value="goForward" @click="goforwardFunc"></bui-button>
  </div>
  <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
  ```
  
  ```js
  methods: {
    "goforwardFunc": function (event) {
        buiweex.toast('page url:' + this.url);
        this.toast('will go goforward');
        webview.goForward(this.$refs.webview)
    }
  }
  ```
  
  * `reload(webElement)` 刷新当前页面，参考如下：

  ```
  <div class="flex-row">
    <bui-button class="ex-btn" type="danger" value="reload" @click="reloadFunc"></bui-button>
  </div>
  <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
  ```
  
  ```js
  methods: {
    "reloadFunc": function (event) {
        buiweex.toast('reload')
        webview.reload(this.$refs.webview);
    }
  }
  ```

  






  









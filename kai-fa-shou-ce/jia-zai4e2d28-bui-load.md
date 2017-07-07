# 加载 \(bui-load\)

## 特性

* `message` 组件文本，默认为 `努力加载中...`

* `show` 与 `v-if` 都是触发组件是否展开，值设置同一个，触发时设置值为true


## 事件

* `@close` 关闭遮罩层组件，参考如下：

  ```
  <text @click="loadFn()">加载中</text>
  <bui-load message="加载中..." :show="showLoading" v-if="showLoading" @close="closeLoading"></bui-load>
  ```

  ```js
  methods: {
    "loadFn": function () {
        var _this = this;
        this.showLoading = true;
    },
    "closeLoading": function () {
        this.showLoading = false;
        
    }
  }
  ```



  









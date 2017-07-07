# 弹出层 \(bui-dialog\)

## 特性

* `title` 组件标题，默认为 `标题`

* `buttons` 组件按钮，数据格式为字符串，默认为 `"取消,确定"`

* `show` 与 `v-if` 都是触发组件是否展开，值设置同一个，触发时设置值为true


## 事件

* `@btnClick` 组件按钮事件，参考如下：

  ```
  <text @click="open()">打开弹出框</text>
  <bui-dialog @btnClick="onDialogCallback" v-if="showDialog"></bui-dialog>
  ```

  ```js
  methods: {
    "open": function () {
        this.showDialog = true;
    },
    "onDialogCallback": function (text) {
        this.showDialog = false;
    }
  }
  ```

* `@close` 点击组件遮罩层后触发的事件，把 `show` 的值设置为false，参考如下：

  ```
  <text @click="open()">打开弹出框</text>
  <bui-dialog @btnClick="onDialogCallback" @close="closeDailog" v-if="showDialog"></bui-dialog>
  ```

  ```js
  methods: {
    "closeDailog": function () {
        this.showDialog = false;
    }
  }
  ```
  
## 扩展

  组件里的内容可以直接加到组件作为其子组件，参考如下：

  ```
  <text @click="open()">打开弹出框</text>
  <bui-dialog @btnClick="onDialogCallback" @close="closeDailog" v-if="showDialog">
    <text>欢迎使用Bui-Weex!</text>
    <text>基于阿里weex构建的一套UI框架</text>
  </bui-dialog>
  ```

  ```js
  methods: {
    "open": function () {
        this.showDialog = true;
    },
    "onDialogCallback": function (text) {
        this.showDialog = false;
    },
    "closeDailog": function () {
        this.showDialog = false;
    }
  }
  ```





  









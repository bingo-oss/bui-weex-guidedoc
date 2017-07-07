# 上拉弹出菜单 \(bui-actionsheet\)

## 特性

* `title` 组件的标题，默认为 `请选择操作`

* `items` 组件的数据列表，数据格式为数组，例如 `['复制文字','收藏动态']`

* `button` 按钮的文本，默认为 `取消`

* `show` 与 `v-if` 都是触发组件是否展开，值设置同一个，触发时设置值为true

* `ref` 给组件窗口设置dom


## 事件

* `open` 打开组件，参考如下：

  ```
  <text @click="openActionsheet()">上拉菜单</text>
  <bui-actionsheet :items="actionsheetItems" :show="showBar" @close="closeActionsheet" @itemClick="actionsheetItemClick" @btnClick="actionsheetBtnClick" v-if="showBar" ref="actionsheet"></bui-actionsheet>
  ```

  ```js
  methods: {
    "openActionsheet": function () {
        var _this = this;
        this.showBar = true;
        setTimeout(function () {
            _this.$refs['actionsheet'].open();
        }, 1);
    }
  }
  ```

* `@close` 点击组件遮罩层后触发的事件，把 `show` 的值设置为false，参考如下：

  ```
  <bui-actionsheet :items="actionsheetItems" :show="showBar" @close="closeActionsheet" @itemClick="actionsheetItemClick" @btnClick="actionsheetBtnClick" v-if="showBar" ref="actionsheet"></bui-actionsheet>
  ```

  ```js
  methods: {
    "closeActionsheet": function () {
        this.showBar = false;
    }
  }
  ```
  
* `@btnClick` 点击组件的取消按钮后触发的事件，参考如下：

  ```
  <bui-actionsheet :items="actionsheetItems" :show="showBar" @close="closeActionsheet" @itemClick="actionsheetItemClick" @btnClick="actionsheetBtnClick" v-if="showBar" ref="actionsheet"></bui-actionsheet>
  ```

  ```js
  methods: {
    "actionsheetBtnClick": function () {
        //事件
    }
  }
  ```
  
* `@itemClick` 点击组件列表项触发的事件，参考如下：

  ```
  <bui-actionsheet :items="actionsheetItems" :show="showBar" @close="closeActionsheet" @itemClick="actionsheetItemClick" @btnClick="actionsheetBtnClick" v-if="showBar" ref="actionsheet"></bui-actionsheet>
  ```

  ```js
  methods: {
    "itemClick": function () {
        //事件
    }
  }
  ```






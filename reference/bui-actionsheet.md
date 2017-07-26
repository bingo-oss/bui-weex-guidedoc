## 弹出层 (bui-actionsheet)
此组件类似原生层面的 ActionSheet

### 导入组件

```javascript
components: {
    'bui-actionsheet': buiweex.buiActionSheet
}

```

### 使用

```html
<div class="span1">
    <bui-button value="弹出" @click="openActionsheet()"></bui-button>
</div>
<!--自定义上拉菜单-->
<bui-actionsheet
        :items="actionsheetItems"
        :show="showBar"
        @close="closeActionsheet"
        @itemClick="actionsheetItemClick"
        @btnClick="actionsheetBtnClick"
        ref="actionsheet"
></bui-actionsheet>
```

```javascript
var buiweex = require("bui-weex");
export default {
    data: function () {
        return {
            showBar: false,
            actionsheetItems: ['复制文字', '收藏动态']
        }
    },
    components: {
        'bui-actionsheet': buiweex.buiActionSheet
    },

    methods: {
        "back": function () {
            buiweex.pop();
        },
        //打开上拉菜单
        "openActionsheet": function () {
            this.showBar = true;
            this.$nextTick(e=>{
                this.$refs.actionsheet.open();
            });
        },
        //关闭事件
        "closeActionsheet": function () {
            this.showBar = false;
        },
        //点击某个item的事件
        "actionsheetItemClick": function (item) {
            buiweex.toast(item)
            this.showBar = false;
        },
        //点击取消/确定按钮事件
        "actionsheetBtnClick": function () {
            this.showBar = false;
        }
    }
}

```

### 属性

* `title` 标题文本，默认为 `请选择操作`

* `items` 组件的数据列表，数据格式为数组，例如 `['复制文字','收藏动态']`

* `button` 按钮的文本，默认为 `取消`

* `show` 控制组件是否展开，触发时设置值为true，关闭时设置为false

* `ref` dom id  组件内部做动画需要用到


### 事件

* `open` 打开组件，参考如下：

  ```html
  <text @click="openActionsheet()">上拉菜单</text>
  <bui-actionsheet 
  :items="actionsheetItems" 
  :show="showBar" 
  @close="closeActionsheet"
   @itemClick="actionsheetItemClick" 
  @btnClick="actionsheetBtnClick"
   ref="actionsheet"></bui-actionsheet>
  ```

  ```javascript
  methods: {
	    "openActionsheet": function () {
	       this.showBar = true;
           this.$nextTick(e=>{
                this.$refs.actionsheet.open();
           });
	    }
  }
  ```

* `@close` 点击组件遮罩层后触发的事件，把 `show` 的值设置为false，参考如下：


  ```javascript
  methods: {
	    "closeActionsheet": function () {
	        this.showBar = false;
	    }
  }
  ```
  
* `@btnClick` 点击组件的取消/去定按钮后触发的事件，参考如下：

  ```javascript
  methods: {
	    "actionsheetBtnClick": function () {
	        //todo
	    }
  }
  ```
  
* `@itemClick` 点击组件列表项触发的事件，参考如下：

  ```javascript
  methods: {
	    "itemClick": function () {
	        //todo
	    }
  }
  ```
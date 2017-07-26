## 弹出层 (bui-dialog)

### 导入组件

```javascript
components: {
    'bui-dialog': buiweex.buiDialog
}

```

### 使用

```html
<div class="span1">
    <bui-button value="打开窗口" @click="open"></bui-button>
</div>
<!--自定义Dialog-->
<bui-dialog  @btnClick="onDialogCallback" :show="showDialog">
    <text>欢迎使用BUI-Weex!</text>
    <text>基于阿里weex构建的一套高质量UI框架</text>
</bui-dialog>

```

```javascript
var buiweex = require("bui-weex");
export default {
    data: function(){
        return {
        	showDialog: false
        }
    },
    components: {
        'bui-dialog': buiweex.buiDialog
    },
    methods: {
        "open": function () {
            this.showDialog = true;
        },
        "onDialogCallback": function (text) {
            this.showDialog = false;
            buiweex.toast(text)
        }
    }
}

```


### 属性

* `title` 标题文本

* `buttons` 按钮组，默认为 `"取消,确定"`

* `show` 控制组件是否展开，触发时设置值为true，关闭时设置为false

### 事件

* `@btnClick` 按钮事件，可以在text中获取按钮文本
* `@close` 点击遮罩层后触发的事件, 在这里可以关闭组件，设置 show 为false即可

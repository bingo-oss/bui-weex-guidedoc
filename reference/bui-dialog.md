## 弹出框 (bui-dialog)

### 用法

```html
<div class="center" style="padding:10px;">
    <bui-button type="warning" value="打开自定义窗口" @click="open"></bui-button>
</div>

<bui-dialog v-model="showDialog" @btnClick="onDialogCallback">
    <text>欢迎使用BUI-Weex!</text>
    <text>基于weex构建的一套高质量UI框架</text>
</bui-dialog>

```

```javascript
data: function(){
    return {
        showDialog: false
    }
},
methods: {
    open() {
        this.showDialog = true;
    },
    onDialogCallback (text) {
        this.showDialog = false;
        this.$toast(text)
    }
}

```
Example: [bui-dialog](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/dialog-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`value`** | `boolean` | `Y` |  | 可以使用v-model进行双向绑定 |
| **`height`** | `number` | `N` | `200` | 窗口高度 |
| **`top`** | `number` | `N` | `300` | 距离顶部的距离 |
| **`title`** | `string` | `N` | `标题` | 标题文本|
| **`buttons`** | `string` | `N` | `取消,确定` | 通过逗号隔开，如 "按钮一,按钮二"|

### 事件

* `@btnClick ` 按钮事件，可以在text中获取按钮文本
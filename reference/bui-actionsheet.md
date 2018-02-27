## 上拉菜单 (bui-actionsheet)

### 用法

```html
<div class="center" style="padding:10px;">
    <bui-button type="warning" value="上拉菜单" @click="open()"></bui-button>
</div>

<!--自定义上拉菜单-->
<bui-actionsheet
        :items="actionsheetItems"
        v-model="showBar"
        @itemClick="actionsheetItemClick"
        @btnClick="actionsheetBtnClick"
></bui-actionsheet>
```

```javascript
data: function () {
    return {
        showBar: false,
        actionsheetItems: ['复制文字', '收藏动态']
    }
},
methods: {
    open() {
        this.showBar = true;
    },
    actionsheetItemClick(item,index) {
        this.$toast(item)
        this.showBar = false;
    },
    actionsheetBtnClick() {
        this.showBar = false;
    }
}
```

Example:[bui-actionsheet](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/actionsheet-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`value`** | `boolean` | `N` |  | 可以使用v-model进行双向绑定 |
| **`title`** | `string` | `N` | `请选择` | 标题文本 |
| **`items`** | `array` | `Y` |  | 弹出的菜单选项，数组元素为字符串 |
| **`button`** | `string` | `N` | `取消` | 最底部按钮文本|

### 事件

* `@itemClick`:点击某项触发的事件，返回文本和索引
* `@btnClick`:底部按钮事件（通常为取消）
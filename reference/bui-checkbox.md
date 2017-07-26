## 多选 (bui-checkbox)

表单元素多选按钮

### 导入组件

```javascript
components: {
    'bui-checkbox': buiweex.buiCheckbox
}

```

### 使用

```html
<bui-checkbox :items="checkboxItems"
   @change="checkboxChange"></bui-checkbox>
```

```javascript
data: function () {
    return {
        "checkboxItems": [
            {
                title: "设计部",
                select: true,
                value: "0"
            },
            {
                title: "产品部",
                select: false,
                value: "1"
            },
            {
                title: "销售部",
                select: false,
                value: "2"
            },
            {
                title: "行政部",
                select: false,
                value: "3"
            }
        ]
    }
},
methods: {
	"checkboxChange": function (item, selecteArray) {
        console.log(item); //当前选中的item
        console.log(selecteArray); //所有选中的项
    }
}

```

### 属性

* `items` 赋值多选组数据列表，传一个数组，属性如下：

  * title ：单选文本

  * disabled ：表明是否激活按钮, true为激活、false为不激活、默认值为false

  * select ：表明是否是选中项, true为选中、false为不选中

  * value ：表单的value

* `direction ` ：单选表单组布局控制，水平为 horizontal（默认),竖直为 vertical 

### 事件

* `@change` ：选中时触发的事件，返回选中的对象 和 所有选中的对象，包含属性如下：
  * title ：单选文本
  * disabled ：表明是否激活按钮, true为激活、false为不激活、默认值为false
  * select ：表明是否是选中项, true为选中、false为不选中
  * value ：表单的value




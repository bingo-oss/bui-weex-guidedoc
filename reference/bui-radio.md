## 单选 (bui-radio)

表单元素单选按钮

### 导入组件

```javascript
components: {
    'bui-radio': buiweex.buiRadio
}

```

### 使用

```html
<bui-radio :items="radioItems" direction="horizontal" @change="radioChange" ></bui-radio>
```

```javascript
data: function () {
    return {
        "radioItems": [
            {
                title: "男", //文本
                select: true, //表明是否是选中项, true为选中、false为不选中
                value: "1"
            },
            {
                title: "女",
                select: false,
                value: "0"
            }
        ]
    }
},
methods: {
    "radioChange": function (item) {
	  //当前选中的item
        console.log(item);
    }
}

```

### 属性

* `items` 赋值单选组数据列表，传一个数组，单个数组的属性如下：

  * title ：单选文本

  * disabled ：表明是否激活按钮, true为激活、false为不激活、默认值为false

  * select ：表明是否是选中项, true为选中、false为不选中

  * value ：表单的value

* `direction ` ：单选表单组布局控制，水平为 horizontal（默认),竖直为 vertical 

### 事件

* `@change` ：选中时触发的事件，返回选中的对象，包含属性如下：
  * title ：单选文本
  * disabled ：表明是否激活按钮, true为激活、false为不激活、默认值为false
  * select ：表明是否是选中项, true为选中、false为不选中
  * value ：表单的value




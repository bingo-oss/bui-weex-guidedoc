## 开关(bui-switch)

表单元素中的开关，基于weex的Switch组件。

### 导入组件

```javascript
components: {
    'bui-switch': buiweex.buiSwitch
}

```

### 使用

```html
<bui-switch title="接收新消息通知" @change="switchChange"></bui-switch>
```

```javascript
"switchChange":function (value) {
	 //返回 true/false
    console.log(value);
}

```

### 属性

* `title` : 切换提示文本
* `checked` : 表明按钮是否开启，默认 false.
* `disabled` : 表明是否激活按钮，默认 false.


### 事件

* `@change` 开关切换时候触发的事件，返回 true/false
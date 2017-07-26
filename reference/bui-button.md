## 按钮 \(bui-button\)

### 导入组件

```js
components: {
	'bui-button':buiweex.buiButton
}
```

### 颜色配置

框架提供了多个色值的按钮，参考如下：

```html
<bui-button></bui-button>
<bui-button type="primary" value="Primary"></bui-button>
<bui-button type="success" value="Success"></bui-button>
<bui-button type="warning" value="Warning"></bui-button>
<bui-button type="danger" value="Danger"></bui-button>
<bui-button disabled="true" value="Disabled"></bui-button>
```

### 圆角配置

目前仅支持同时设置4个角的radius

```html
<bui-button radius="10px" type="primary" value="圆角矩形按钮"></bui-button>
```

## 横向按钮排列

需要在外层增加`flex-row`使其从左到右铺开

```html
<div class="flex-row">
     <bui-button type="danger" value="确认删除"></bui-button>
     <bui-button type="success" value="确认提交"></bui-button>
</div>
```

## 事件

按钮支持：点击事件`@click`和长按事件`@click`

```html
<bui-button radius="10px" @longpress="btnEvent($event,'长按事件')" type="primary"
     value="长按"></bui-button>

<bui-button radius="10px" @click="btnEvent($event,'点击事件')" type="primary"
     value="点击"></bui-button>
```

```js
methods: {
   "btnEvent": function (e,msg) {
        //todo;
    }
}
```

## 属性

| 属性 | 类型 | 描述 |
| :--- | :--- | :--- |
| type | string | default(默认值),  primary,  success,  warning,  danger,  info |
| value | string | 按钮显示的文本 |
| disabled | boolean | 是否不可用，默认false |
| radius | string | 按钮4个角的弧度，默认 0px |




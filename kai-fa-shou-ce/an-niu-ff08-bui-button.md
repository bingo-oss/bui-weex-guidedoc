# 按钮 \(bui-button\)

## 颜色配置

框架提供了多个色值的按钮，参考如下：

```
<bui-button></bui-button>
<bui-button type="primary" value="Primary"></bui-button>
<bui-button type="success" value="Success"></bui-button>
<bui-button type="warning" value="Warning"></bui-button>
<bui-button type="danger" value="Danger"></bui-button>
<bui-button disabled="true" value="Disabled"></bui-button>
```

## 圆角配置

目前仅支持同时设置4个角的radius

```
<bui-button radius="10px" type="primary" value="圆角矩形按钮(radius='10px')"></bui-button>
```

## 横向按钮排列

需要在外层增加`flex-row`使其水平铺开

```
<div class="flex-row">
     <bui-button type="danger" value="确认删除"></bui-button>
     <bui-button type="success" value="确认提交"></bui-button>
</div>
```

## 按钮事件

按钮支持：点击事件@click和长按事件@click

```
<bui-button radius="10px" @longpress="btnEvent('长按事件')" type="primary"
     value="长按(@longpress)"></bui-button>

<bui-button radius="10px" @click="btnEvent('点击事件')" type="primary"
     value="点击(@click)"></bui-button>
```

```js
methods: {
   "btnEvent": function (msg) {
        //todo;
    }
}
```

## 属性

| 属性 | 类型 | 描述 |
| :--- | :--- | :--- |
| type | string | default\\(默认值\\),  primary,  success,  warning,  danger,  info |
| value | string | 按钮显示的文本 |
| disabled | boolean | 是否不可用，默认false |
| radius | string | 按钮4个角的弧度，默认 0px |




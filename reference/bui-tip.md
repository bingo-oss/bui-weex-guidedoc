## 提示 \(bui-tip\)

### 使用

`value` 提示的文本内容，参考如下：

```html
<bui-tip value="This is success tip."></bui-tip>
```
  
`type` 提示条的类型，也就是色值，组件提供了多个色值的提示条，参考如下：

```html
<bui-tip value="bui-weex success tip."></bui-tip>
<bui-tip type="info" value="bui-weex info tip."></bui-tip>
<bui-tip type="warning" value="bui-weex warning tip."></bui-tip>
<bui-tip type="danger" value="bui-weex 是专门为weex开发者打造的高质量UI组件"></bui-tip>
```
Example: [bui-tip](https://github.com/bingo-oss/bui-weex-sample/blob/master/src/views/example/tip-demo.vue)

### 属性

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`type`** | `string` | `N` | `success` | 支持info,warning,danger,success |
| **`value`** | `string` | `N` |  | 文本内容|
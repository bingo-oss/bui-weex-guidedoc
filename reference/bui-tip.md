## 提示条 \(bui-tip\)

用于在页面上作提示内容，默认提供了几种类型：

### 导入组件

```javascript
components: {
   'bui-tip': buiweex.buiTip
}

```

### 使用

`value` 提示条的文本内容，参考如下：

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




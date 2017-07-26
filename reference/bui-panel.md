## 面板 (bui-panel)

### 导入组件

```javascript
components: {
    'bui-panel': buiweex.buiPanel
}
```

### 使用

```html
<bui-panel title="Default Panel"><text>Default Panel</text></bui-panel>
<bui-panel title="Primary Panel" type="primary" border="1"><text>Primary Panel</text></bui-panel>
<bui-panel title="Success Panel" type="success" border="1"><text>Success Panel</text></bui-panel>
<bui-panel title="Info Panel" type="info" border="1"><text>Info Panel</text></bui-panel>
<bui-panel title="Warning Panel" type="warning" border="1"><text>Warning Panel</text></bui-panel>
<bui-panel title="Danger Panel" type="danger" border="1"><text>Danger Panel</text></bui-panel>
```


### 属性

* `title` 面板标题文本
* `border` 面板的边框大小
* `type` 面板的皮肤颜色设置，组件提供了多个色值的面板：primary,success,info,warning,danger  
  
### 扩展

支持任意类型的 Weex 组件作为其子组件，参考如下：

```html
<bui-panel title="Primary Panel" type="primary" border="1">
    <text>Primary Panel</text>
    <bui-image src="/image/demo.png" width="200px" height="200px" ></bui-image>
</bui-panel>
```








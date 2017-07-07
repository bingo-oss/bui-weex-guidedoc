# 面板 \(bui-panel\)

## 特性

* `title` 面板标题文本，参考如下：

  ```
  <bui-panel title="Default Panel"></bui-panel>
  ```
* `border` 面板的边框大小，参考如下：

  ```
  <bui-panel title="Default Panel" border="1"></bui-panel>
  ```
* `type` 面板的皮肤颜色设置，组件提供了多个色值的面板，参考如下：

  ```
  <bui-panel title="Default Panel"><text>Default Panel</text></bui-panel>
  <bui-panel title="Primary Panel" type="primary" border="1"><text>Primary Panel</text></bui-panel>
  <bui-panel title="Success Panel" type="success" border="1"><text>Success Panel</text></bui-panel>
  <bui-panel title="Info Panel" type="info" border="1"><text>Info Panel</text></bui-panel>
  <bui-panel title="Warning Panel" type="warning" border="1"><text>Warning Panel</text></bui-panel>
  <bui-panel title="Danger Panel" type="danger" border="1"><text>Danger Panel</text></bui-panel>
  ```
  
  
## 扩展

支持任意类型的 Weex 组件作为其子组件，参考如下：

```
<bui-panel title="Primary Panel" type="primary" border="1">
    <text>Primary Panel</text>
</bui-panel>
```








## 懒加载组件 \(bui-layzy-render\)

### 导入组件

```javascript
components: {
    'bui-lazy-render': buiweex.buiLazyRender
}

```

### 使用

```html
<bui-lazy-render time='1000'>
    <bui-panel title="延迟1s出来" type="primary" border="1">
        <text>我是延迟加载的内容</text>
    </bui-panel>
</bui-lazy-render>

```

### 属性

* `tip` 组件延迟加载的提示文本，默认为 `正在渲染,请稍候`
* `time` 组件的延迟加载的时间，单位是ms

### 事件

* `@loaded` 组件加载完成后的事件
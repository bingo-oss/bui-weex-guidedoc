# 懒加载组件 \(bui-layzy-render\)

## 特性

* `tip` 组件延迟加载的提示文本，默认为 `正在渲染,请稍候`

* `time` 组件的延迟加载的时间，毫秒为单位


## 扩展

组件里的内容可以直接加到组件作为其子组件，参考如下：
  ```
  <bui-lazy-render time='1000'>
    <bui-panel title="延迟1s出来" type="primary" border="1">
        <image style="width: 260px;height: 260px;"
                   src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
    </bui-panel>
  </bui-lazy-render>
  <bui-lazy-render time='3000'>
    <bui-panel title="延迟3s出来" type="primary" border="1">
        <image style="width: 260px;height: 260px;"
                   src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
    </bui-panel>
  </bui-lazy-render>
  ```
 








